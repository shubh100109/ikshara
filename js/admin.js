/**
 * STORE OWNER PRODUCT CREATION HELPER
 * Enables the client/admin to easily preview, generate, and add new Sarees & 3-Piece Suits
 * without coding knowledge.
 */

class AdminTool {
  constructor() {
    this.modal = null;
    this.init();
  }

  init() {
    // Listen for Ctrl+Shift+A keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        this.open();
      }
    });

    // Link in footer
    const link = document.getElementById('adminToolFooterLink');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    }
  }

  open() {
    const modal = document.getElementById('adminProductModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  close() {
    const modal = document.getElementById('adminProductModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  generateProductJSON() {
    const title = document.getElementById('adminTitle')?.value || "Royal Handwoven Silk Saree";
    const category = document.getElementById('adminCategory')?.value || "saree";
    const subcategory = document.getElementById('adminSubcategory')?.value || "kanjivaram";
    const fabric = document.getElementById('adminFabric')?.value || "Pure Silk";
    const work = document.getElementById('adminWork')?.value || "Gold Zari Weaving";
    const color = document.getElementById('adminColor')?.value || "Crimson Red";
    const priceINR = parseInt(document.getElementById('adminPrice')?.value || "6999", 10);
    const originalPriceINR = parseInt(document.getElementById('adminMRP')?.value || "10999", 10);
    const image1 = document.getElementById('adminImage1')?.value || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80";
    const image2 = document.getElementById('adminImage2')?.value || "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=900&q=80";
    const desc = document.getElementById('adminDesc')?.value || "Exquisite artisan ethnic attire.";

    const id = `${category.substring(0,3)}-${Date.now().toString().slice(-4)}`;
    const sku = `${category.substring(0,3).toUpperCase()}-${Date.now().toString().slice(-3)}`;

    const newProduct = {
      id: id,
      sku: sku,
      title: title,
      category: category,
      subcategory: subcategory,
      fabric: fabric,
      work: work,
      color: color,
      occasion: "Festive Celebration",
      priceINR: priceINR,
      originalPriceINR: originalPriceINR,
      badge: "New Arrival",
      rating: 5.0,
      reviewsCount: 1,
      readyToShip: true,
      inStock: true,
      images: [image1, image2],
      description: desc,
      specifications: {
        sareeLength: category === 'saree' ? "5.5 Metres" : "N/A",
        blousePiece: category === 'saree' ? "0.8 Metre Fabric Included" : "N/A",
        topPiece: category === 'suit' ? "Embroidered Kurta (2.5m)" : "N/A",
        bottomPiece: category === 'suit' ? "Matching Trouser Fabric (2.5m)" : "N/A",
        dupatta: category === 'suit' ? "Luxury Dupatta (2.5m)" : "N/A",
        washCare: "Dry Clean Only"
      },
      sizes: category === 'saree' 
        ? ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
        : ["Unstitched", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Custom Fit"]
    };

    return newProduct;
  }

  copyJSON() {
    const product = this.generateProductJSON();
    const str = JSON.stringify(product, null, 2);
    navigator.clipboard.writeText(str + ",");
    if (window.app) {
      window.app.showToast("Product code copied! Paste it into js/products.js");
    } else {
      alert("Product code copied! Paste it into js/products.js");
    }
  }

  addLive() {
    const product = this.generateProductJSON();
    if (window.PRODUCTS_DATA && window.app) {
      window.PRODUCTS_DATA.unshift(product);
      window.app.renderProducts();
      window.app.showToast(`Added "${product.title}" to catalog!`);
      this.close();
      const grid = document.getElementById('productsSection');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.adminTool = new AdminTool();
});
