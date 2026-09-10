/**
 * IKSHARA™ - ADVANCED INTERACTIVE ANIMATIONS & iOS MAGNETIC POINTER
 * Implements:
 * 1. Apple iPadOS / iOS Fluid Magnetic Pointer Cursor with spring physics & hover morphing
 * 2. 3D Card Tilt & Gyro depth on hover
 * 3. Smooth scroll reveals (IntersectionObserver)
 * 4. Micro-interactions for Wishlist hearts & buttons
 */

class LuxuryAnimations {
  constructor() {
    this.cursor = null;
    this.cursorFollower = null;
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.target = null;
    this.isHovering = false;
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    this.init();
  }

  init() {
    if (!this.isTouch) {
      this.setupIOSPointer();
    }
    this.setupScrollReveals();
    this.setupCardTilt();
  }

  // ================= iOS FLUID POINTER (CRYSTAL CLEAR, ZERO BLUR) =================
  setupIOSPointer() {
    // Create cursor elements
    const dot = document.createElement('div');
    dot.className = 'ios-cursor-dot';
    document.body.appendChild(dot);
    this.cursor = dot;

    const ring = document.createElement('div');
    ring.className = 'ios-cursor-follower';
    document.body.appendChild(ring);
    this.cursorFollower = ring;

    // Track mouse
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Smooth fluid follower loop (stays perfectly circular, never overlays text with blur)
    const renderLoop = () => {
      this.pos.x += (this.mouse.x - this.pos.x) * 0.22;
      this.pos.y += (this.mouse.y - this.pos.y) * 0.22;

      const size = this.isHovering ? 42 : 28;
      const offset = size / 2;
      this.cursorFollower.style.transform = `translate3d(${this.pos.x - offset}px, ${this.pos.y - offset}px, 0)`;

      if (this.isHovering) {
        this.cursorFollower.classList.add('is-hovering-interactive');
      } else {
        this.cursorFollower.classList.remove('is-hovering-interactive');
      }

      requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // Attach hover listeners to interactive elements
    this.attachMagneticListeners();

    // Mouse down click feedback
    window.addEventListener('mousedown', () => {
      ring.classList.add('is-clicked');
      dot.classList.add('is-clicked');
    });
    window.addEventListener('mouseup', () => {
      ring.classList.remove('is-clicked');
      dot.classList.remove('is-clicked');
    });

    // Re-attach listeners when products or DOM change
    const observer = new MutationObserver(() => {
      this.attachMagneticListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  attachMagneticListeners() {
    const interactiveSelectors = 'button, a, .category-pill, .product-card, input, select';
    const elements = document.querySelectorAll(interactiveSelectors);

    elements.forEach(el => {
      if (el._hasPointerListener) return;
      el._hasPointerListener = true;

      el.addEventListener('mouseenter', () => {
        this.isHovering = true;
        this.target = el;
      });

      el.addEventListener('mouseleave', () => {
        this.isHovering = false;
        this.target = null;
      });
    });
  }

  // ================= 2D CRISP CARD ELEVATION (ZERO TEXT BLUR) =================
  setupCardTilt() {
    // Intentionally no 3D perspective or rotateX/rotateY to keep Windows ClearType text 100% crisp and unblurred
  }

  // ================= SCROLL REVEALS =================
  setupScrollReveals() {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const attachReveals = () => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach(el => {
        observer.observe(el);
      });
    };

    attachReveals();
    setTimeout(attachReveals, 400);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.luxAnimations = new LuxuryAnimations();
});
