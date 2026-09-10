/**
 * IKSHARA™ - AUTHENTICATION & USER SESSION ENGINE
 * Enforces mandatory login for:
 * 1. Adding/toggling items in Wishlist
 * 2. Purchasing any item / Buy on WhatsApp / Bag Checkout
 * Remembers pending actions to seamlessly resume after sign-in.
 */

class AuthService {
  constructor() {
    this.currentUser = this.loadUser();
    this.pendingAction = null;
    this.init();
  }

  init() {
    this.setupModalEvents();
    this.updateHeaderUI();
  }

  loadUser() {
    try {
      const data = localStorage.getItem('ikshara_user');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  saveUser(user) {
    this.currentUser = user;
    localStorage.setItem('ikshara_user', JSON.stringify(user));
    this.updateHeaderUI();
    if (window.app) {
      window.app.showToast(`Welcome back, ${user.name}! ✨`);
    }
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  getUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('ikshara_user');
    this.updateHeaderUI();
    if (window.app) {
      window.app.showToast("Signed out successfully");
    }
    this.closeUserDropdown();
  }

  /**
   * Guards any user interaction that requires login.
   * If logged in, calls callback immediately.
   * If not, saves callback as pendingAction and opens Login modal.
   */
  requireAuth(callback, reason = "Please sign in to continue", contextData = null) {
    if (this.isLoggedIn()) {
      callback();
      return true;
    }

    this.pendingAction = {
      callback: callback,
      context: contextData
    };

    this.openLoginModal(reason);
    return false;
  }

  openLoginModal(reason = "Please sign in to continue") {
    const modal = document.getElementById('authModal');
    const reasonEl = document.getElementById('authModalReason');
    if (!modal) return;

    if (reasonEl) {
      reasonEl.textContent = reason;
      reasonEl.classList.remove('hidden');
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // Default to WhatsApp/Mobile tab
    this.switchTab('phone');
  }

  closeLoginModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  switchTab(tab) {
    const phoneTabBtn = document.getElementById('authTabPhone');
    const emailTabBtn = document.getElementById('authTabEmail');
    const phoneForm = document.getElementById('authPhoneForm');
    const emailForm = document.getElementById('authEmailForm');

    if (tab === 'phone') {
      phoneTabBtn?.classList.add('border-amber-700', 'text-stone-900', 'font-bold');
      phoneTabBtn?.classList.remove('border-transparent', 'text-stone-400');
      emailTabBtn?.classList.remove('border-amber-700', 'text-stone-900', 'font-bold');
      emailTabBtn?.classList.add('border-transparent', 'text-stone-400');

      phoneForm?.classList.remove('hidden');
      emailForm?.classList.add('hidden');
    } else {
      emailTabBtn?.classList.add('border-amber-700', 'text-stone-900', 'font-bold');
      emailTabBtn?.classList.remove('border-transparent', 'text-stone-400');
      phoneTabBtn?.classList.remove('border-amber-700', 'text-stone-900', 'font-bold');
      phoneTabBtn?.classList.add('border-transparent', 'text-stone-400');

      emailForm?.classList.remove('hidden');
      phoneForm?.classList.add('hidden');
    }
  }

  handleLoginSuccess(user) {
    this.saveUser(user);
    this.closeLoginModal();

    // Execute pending action if any was queued
    if (this.pendingAction && typeof this.pendingAction.callback === 'function') {
      const action = this.pendingAction;
      this.pendingAction = null;
      setTimeout(() => {
        action.callback();
      }, 200);
    }
  }

  setupModalEvents() {
    // Close button & overlay
    document.getElementById('closeAuthModal')?.addEventListener('click', () => this.closeLoginModal());
    const modal = document.getElementById('authModal');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeLoginModal();
    });

    // Tab buttons
    document.getElementById('authTabPhone')?.addEventListener('click', () => this.switchTab('phone'));
    document.getElementById('authTabEmail')?.addEventListener('click', () => this.switchTab('email'));

    // Mobile Phone / WhatsApp Sign In Form
    document.getElementById('authPhoneForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('authPhoneName')?.value.trim() || "Valued Client";
      const countryCode = document.getElementById('authPhoneCountryCode')?.value || "+64";
      const rawPhone = document.getElementById('authPhoneNumber')?.value.trim();

      if (!rawPhone || rawPhone.length < 6) {
        if (window.app) window.app.showToast("Please enter a valid phone number");
        return;
      }

      const user = {
        id: "usr_" + Date.now().toString(36),
        name: name,
        phone: `${countryCode} ${rawPhone}`,
        country: countryCode === '+64' ? 'New Zealand' : (countryCode === '+61' ? 'Australia' : 'International'),
        email: "",
        method: "whatsapp",
        joinedAt: new Date().toISOString()
      };

      this.handleLoginSuccess(user);
    });

    // Email / Password Form
    document.getElementById('authEmailForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('authEmailName')?.value.trim() || "Valued Client";
      const email = document.getElementById('authEmailAddress')?.value.trim();
      const password = document.getElementById('authEmailPassword')?.value;

      if (!email || !password || password.length < 4) {
        if (window.app) window.app.showToast("Please provide a valid email and password");
        return;
      }

      const user = {
        id: "usr_" + Date.now().toString(36),
        name: name,
        email: email,
        phone: "",
        country: "International",
        method: "email",
        joinedAt: new Date().toISOString()
      };

      this.handleLoginSuccess(user);
    });

    // Quick 1-Click Guest Sign-In Buttons (for immediate testing and seamless checkout)
    document.getElementById('quickAuthNZBtn')?.addEventListener('click', () => {
      this.handleLoginSuccess({
        id: "usr_nz_" + Date.now().toString(36),
        name: "Chloe Harrison",
        phone: "+64 21 555 7890",
        country: "New Zealand",
        email: "chloe@ikshara.co.nz",
        method: "demo",
        joinedAt: new Date().toISOString()
      });
    });

    document.getElementById('quickAuthAUBtn')?.addEventListener('click', () => {
      this.handleLoginSuccess({
        id: "usr_au_" + Date.now().toString(36),
        name: "Priya Patel",
        phone: "+61 400 123 456",
        country: "Australia",
        email: "priya@gmail.com",
        method: "demo",
        joinedAt: new Date().toISOString()
      });
    });

    // Header profile button toggle
    const profileBtn = document.getElementById('userProfileBtn');
    const profileDropdown = document.getElementById('userProfileDropdown');
    profileBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!this.isLoggedIn()) {
        this.openLoginModal("Sign in to view your account, wishlist & orders");
      } else {
        profileDropdown?.classList.toggle('hidden');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#userProfileContainer')) {
        profileDropdown?.classList.add('hidden');
      }
    });

    document.getElementById('userLogoutBtn')?.addEventListener('click', () => {
      this.logout();
    });
  }

  closeUserDropdown() {
    document.getElementById('userProfileDropdown')?.classList.add('hidden');
  }

  updateHeaderUI() {
    const userBtn = document.getElementById('userProfileBtn');
    const userNameEl = document.getElementById('headerUserName');
    const userAvatarEl = document.getElementById('headerUserAvatar');
    const dropdownName = document.getElementById('dropdownUserName');
    const dropdownDetails = document.getElementById('dropdownUserDetails');

    if (!userBtn) return;

    if (this.isLoggedIn()) {
      const u = this.currentUser;
      const initial = u.name.trim().charAt(0).toUpperCase() || 'U';

      if (userNameEl) userNameEl.textContent = u.name.split(' ')[0];
      if (userAvatarEl) userAvatarEl.textContent = initial;
      if (dropdownName) dropdownName.textContent = u.name;
      if (dropdownDetails) dropdownDetails.textContent = u.phone || u.email || u.country;

      userBtn.classList.remove('bg-stone-100', 'text-stone-700');
      userBtn.classList.add('bg-amber-100', 'text-amber-950', 'border-amber-300');
    } else {
      if (userNameEl) userNameEl.textContent = "Sign In";
      if (userAvatarEl) userAvatarEl.innerHTML = `<svg class="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`;
      userBtn.classList.remove('bg-amber-100', 'text-amber-950', 'border-amber-300');
      userBtn.classList.add('bg-stone-100', 'text-stone-700');
    }
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.auth = new AuthService();
});
