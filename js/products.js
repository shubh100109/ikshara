/**
 * LUXURY PRODUCT CATALOG
 * Sarees & Three-Piece Suits Collection
 * High quality curated images & specifications
 */

const PRODUCTS_DATA = [
  // ================= SAREES COLLECTION =================
  {
    id: "sar-kanjivaram-01",
    sku: "SAR-KAN-01",
    title: "Royal Kanjivaram Pure Mulberry Silk Saree",
    category: "saree",
    subcategory: "kanjivaram",
    fabric: "Pure Kanjivaram Silk",
    work: "Pure Gold Zari Woven Temple Border & Rich Pallu",
    color: "Ruby Crimson & Antique Gold",
    occasion: "Bridal & Wedding",
    priceINR: 11499,
    originalPriceINR: 17999,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 142,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Handwoven in Tamil Nadu by master weavers using pure mulberry silk yarn and real gilded zari threads. Features iconic mythological motifs along the border and a majestic ceremonial pallu that exudes regal charm.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Unstitched Matching Silk Fabric Included",
      weaveType: "Traditional Handloom Jacquard",
      washCare: "Dry Clean Only",
      origin: "Kanchipuram, Tamil Nadu, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sar-banarasi-02",
    sku: "SAR-BAN-02",
    title: "Heritage Banarasi Katan Silk Saree with Floral Jaal",
    category: "saree",
    subcategory: "banarasi",
    fabric: "Katan Pure Silk",
    work: "Intricate Kadwa Meenakari Floral Jaal Weave",
    color: "Imperial Emerald & Champagne Gold",
    occasion: "Bridal & Wedding",
    priceINR: 13999,
    originalPriceINR: 19999,
    badge: "Heritage Masterpiece",
    rating: 5.0,
    reviewsCount: 98,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An ode to timeless Varanasi artistry. Crafted with sheer devotion over 4 weeks of hand weaving, this saree exhibits shimmering gold and silver zari vines interspersed with delicate colored meena work.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Brocade Fabric Included",
      weaveType: "Authentic Kadwa Handloom",
      washCare: "Dry Clean Only",
      origin: "Varanasi, Uttar Pradesh, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sar-organza-03",
    sku: "SAR-ORG-03",
    title: "Hand-Painted Floral Organza Silk Saree with Scalloped Gota",
    category: "saree",
    subcategory: "organza",
    fabric: "Pure Sheer Organza Silk",
    work: "Botanical Water-Color Print with Cutwork Scallop Borders",
    color: "Blush Peach & Soft Rose",
    occasion: "Festive Celebration",
    priceINR: 4899,
    originalPriceINR: 7999,
    badge: "Trending Worldwide",
    rating: 4.8,
    reviewsCount: 165,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Light-as-air organza silk rendered in dreamy pastel shades. Accented with handcrafted cutwork scalloped borders and hand-applied pearl and moti embellishments that drape effortlessly.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Raw Silk Contrast Blouse Piece",
      weaveType: "Sheer Organza Weave",
      washCare: "Gentle Dry Clean",
      origin: "Surat, Gujarat, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sar-chiffon-04",
    sku: "SAR-CHF-04",
    title: "Celebrity Sequin Embroidered Pure Chiffon Saree",
    category: "saree",
    subcategory: "chiffon",
    fabric: "Featherlight French Chiffon",
    work: "Hand-Embroidered Micro Sequin Border & Scattered Bootis",
    color: "Midnight Obsidian & Silver Sparkle",
    occasion: "Party Wear",
    priceINR: 5999,
    originalPriceINR: 9499,
    badge: "Red Carpet Look",
    rating: 4.9,
    reviewsCount: 88,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Designed for cocktail evenings and destination receptions. The fluid drape of pure chiffon hugs the silhouette gracefully, while tonal sequin embroidery reflects ambient light stunningly.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "1.0 Metre Fully Embellished Sequin Blouse Piece",
      weaveType: "Fluid High-Twist Chiffon",
      washCare: "Specialist Dry Clean",
      origin: "Mumbai, Maharashtra, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sar-banarasi-05",
    sku: "SAR-BAN-05",
    title: "Sunlit Yellow Georgette Banarasi Saree with Resham Border",
    category: "saree",
    subcategory: "banarasi",
    fabric: "Banarasi Khaddi Georgette",
    work: "Handloom Bandhej Tie-Dye with Pure Gold Zari Weave",
    color: "Haldi Yellow & Marigold",
    occasion: "Festive Celebration",
    priceINR: 8799,
    originalPriceINR: 13500,
    badge: "Haldi & Mehendi Special",
    rating: 4.9,
    reviewsCount: 114,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=900&q=80"
    ],
    description: "The ideal traditional attire for Haldi and morning wedding festivities. Combines the bounce and ease of pure georgette with the venerable splendour of Banarasi metallic zari work.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Banarasi Silk Blouse Fabric",
      weaveType: "Khaddi Handloom Weave",
      washCare: "Dry Clean Only",
      origin: "Varanasi, Uttar Pradesh, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sar-chanderi-06",
    sku: "SAR-CHA-06",
    title: "Ivory Royal Chanderi Silk Saree with Meenakari Butas",
    category: "saree",
    subcategory: "chanderi",
    fabric: "Handwoven Chanderi Silk-Cotton",
    work: "Real Zari Woven Ashavali Border & Floral Butis",
    color: "Ivory Pearl & Antique Gold",
    occasion: "Casual Luxury",
    priceINR: 3799,
    originalPriceINR: 5999,
    badge: "Pure Elegance",
    rating: 4.7,
    reviewsCount: 76,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Subtle, understated luxury. Crafted with the legendary lightweight handloom technique of Madhya Pradesh, adorned with fine gold zari and soft cotton texture.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Contrast Brocade Blouse Piece",
      weaveType: "Handspun Chanderi Weave",
      washCare: "Dry Clean or Gentle Hand Wash",
      origin: "Chanderi, Madhya Pradesh, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },

  // ================= THREE-PIECE SUITS COLLECTION =================
  {
    id: "sut-pakistani-01",
    sku: "SUT-PAK-01",
    title: "Luxury Pakistani Lawn 3-Piece Designer Suit Set",
    category: "suit",
    subcategory: "pakistani-suit",
    fabric: "Premium Embroidered Swiss Lawn & Digital Chiffon",
    work: "Intricate Resham Threadwork, Organza Cutwork Borders & Pearl Detailing",
    color: "Powder Sky Blue & Pearl White",
    occasion: "Festive Celebration",
    priceINR: 5499,
    originalPriceINR: 8999,
    badge: "Bestseller 3-Piece",
    rating: 4.9,
    reviewsCount: 198,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "The epitome of subcontinent haute couture. Includes a heavily embroidered lawn kurta tunic with detailed scalloped organza hemline, matching tailored trousers/culottes, and a lavishly printed pure silk chiffon dupatta.",
    specifications: {
      topPiece: "Embroidered Lawn Kurta (2.5 Metres)",
      bottomPiece: "Dyed Cambric Cotton Trousers Fabric (2.5 Metres)",
      dupatta: "Digital Printed Luxury Pure Chiffon Dupatta (2.5 Metres)",
      embroidery: "Laser Cut Embroidered Neckline & Hem Patches Included",
      washCare: "Dry Clean Recommended"
    },
    sizes: ["Unstitched Fabric", "Ready Stitched S (36\")", "Ready Stitched M (38\")", "Ready Stitched L (40\")", "Ready Stitched XL (42\")", "Ready Stitched XXL (44\")", "Custom Tailored Stitching (+₹1299 / $18)"]
  },
  {
    id: "sut-anarkali-02",
    sku: "SUT-ANK-02",
    title: "Grand Floor-Length Anarkali 3-Piece Bridal Set",
    category: "suit",
    subcategory: "anarkali",
    fabric: "Pure Georgette & Shantoon Silk",
    work: "Heavy Zardozi, Gota Patti & Mirror Hand Embroidery",
    color: "Deep Crimson Maroon & Gold",
    occasion: "Bridal & Wedding",
    priceINR: 12999,
    originalPriceINR: 18999,
    badge: "Wedding Couture",
    rating: 5.0,
    reviewsCount: 112,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A show-stopping 48-kalidar flared Anarkali silhouette designed for brides and wedding guests. Comes with heavily embellished flare, fitted churidar, and an opulent scalloped organza dupatta.",
    specifications: {
      topPiece: "Heavily Embroidered Anarkali Gown (56-inch Length)",
      bottomPiece: "Stretchable Silk Lycra Churidar Pant",
      dupatta: "Heavy Four-Side Border Organza Dupatta (2.5 Metres)",
      flareSpan: "4.5 Metre Grand Kalidar Flare",
      washCare: "Dry Clean Only"
    },
    sizes: ["Semi-Stitched (Fits up to 46\")", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Stitched XXL (44\")", "Custom Bridal Tailoring"]
  },
  {
    id: "sut-sharara-03",
    sku: "SUT-SHR-03",
    title: "Festive Mirror Work Sharara 3-Piece Designer Set",
    category: "suit",
    subcategory: "sharara-suit",
    fabric: "Flowy Georgette with Butter Crepe Inner",
    work: "Real Foil Mirror Work & Dori Thread Embroidery",
    color: "Lilac Lavender & Silver",
    occasion: "Party Wear",
    priceINR: 6799,
    originalPriceINR: 10500,
    badge: "Party Bestseller",
    rating: 4.8,
    reviewsCount: 145,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Playful, glamorous and festive. Includes a short embellished peplum-style tunic, tiered flared sharara palazzo bottoms with voluminous ruffles, and a matching chiffon dupatta with latkan tassels.",
    specifications: {
      topPiece: "Embroidered Short Kurta (34-inch Length)",
      bottomPiece: "Double-Flared Tiered Sharara (42-inch Length)",
      dupatta: "Chiffon Dupatta with Mirror Border (2.25 Metres)",
      innerLining: "Comfort Crepe Silk Lining Attached",
      washCare: "Dry Clean"
    },
    sizes: ["Unstitched Material", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Stitched XXL (44\")"]
  },
  {
    id: "sut-velvet-04",
    sku: "SUT-VEL-04",
    title: "Royal Micro Velvet Embroidered 3-Piece Winter Formal Suit",
    category: "suit",
    subcategory: "pakistani-suit",
    fabric: "Premium 9000 Micro Velvet & Jacquard Silk",
    work: "Antique Tilla & Dori Embroidery with Stone Embellishments",
    color: "Imperial Regal Teal & Antique Bronze",
    occasion: "Bridal & Wedding",
    priceINR: 8999,
    originalPriceINR: 14500,
    badge: "Royal Winter Special",
    rating: 4.9,
    reviewsCount: 78,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Crafted from sumptuous 9000 Micro Velvet that boasts a rich lustrous sheen. Paired with a contrast woven jacquard shawl dupatta and raw silk cigarette trousers.",
    specifications: {
      topPiece: "Velvet Embroidered Front, Back & Sleeves (2.5 Metres)",
      bottomPiece: "Dyed Raw Silk Trouser Fabric (2.5 Metres)",
      dupatta: "Heavily Woven Metallic Brocade Shawl (2.5 Metres)",
      embroidery: "Antique Metallic Tilla & Zari Threading",
      washCare: "Strictly Dry Clean"
    },
    sizes: ["Unstitched Fabric", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Custom Tailored"]
  },
  {
    id: "sut-straight-05",
    sku: "SUT-STR-05",
    title: "Handcrafted Lucknowi Chikankari & Mukaish 3-Piece Silk Suit",
    category: "suit",
    subcategory: "straight-suit",
    fabric: "Pure Mulberry Georgette Silk",
    work: "Authentic Hand-Stitched Lucknowi Shadow Work with Fine Badla Mukaish",
    color: "Ivory Ecru & Gilded Gold",
    occasion: "Casual Luxury",
    priceINR: 7499,
    originalPriceINR: 11999,
    badge: "Handcrafted Artisan Weave",
    rating: 5.0,
    reviewsCount: 92,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Every inch of this suit represents months of patient needlework by women artisans of Old Lucknow. Subtle, majestic and breathable luxury.",
    specifications: {
      topPiece: "Straight-Cut Hand-Embroidered Kurta (46-inch Length)",
      bottomPiece: "Tailored Cigarette Pants with Matching Border",
      dupatta: "Full Chikankari Embroidered Dupatta with Mukaish Sparkles",
      innerSlip: "Complimentary Pure Cotton Mulmul Slip Attached",
      washCare: "Gentle Hand Wash or Dry Clean"
    },
    sizes: ["Unstitched Fabric", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Stitched XXL (44\")"]
  },
  {
    id: "sut-organza-06",
    sku: "SUT-ORG-06",
    title: "Pakistani Heavy Pastel Organza 3-Piece Festive Trouser Set",
    category: "suit",
    subcategory: "pakistani-suit",
    fabric: "Silk Organza & Jamawar Silk",
    work: "3D Floral Applique, Pearl Beads & Resham Work",
    color: "Sage Mint & Rose Champagne",
    occasion: "Party Wear",
    priceINR: 6499,
    originalPriceINR: 9999,
    badge: "New Arrival",
    rating: 4.8,
    reviewsCount: 67,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Inspired by couture Pakistani runway collections. Featuring ethereal sheer organza accented with crystal and pearl beads, coupled with brocade straight pants.",
    specifications: {
      topPiece: "Organza Kurta with Embellished Sleeve Borders (2.5 Metres)",
      bottomPiece: "Jamawar Silk Trouser Fabric (2.5 Metres)",
      dupatta: "Scalloped Laser-Cut Embroidered Dupatta (2.5 Metres)",
      innerSlip: "Pure Silk Crepe Inner Included",
      washCare: "Dry Clean Only"
    },
    sizes: ["Unstitched Fabric", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Custom Fit"]
  },

  // ================= MORE SAREES & SUITS FOR COMPREHENSIVE BROWSE =================
  {
    id: "sar-paithani-07",
    sku: "SAR-PAI-07",
    title: "Traditional Yeola Paithani Pure Silk Saree with Peacock Pallu",
    category: "saree",
    subcategory: "kanjivaram",
    fabric: "Pure Paithani Silk",
    work: "Hand-Woven Gold Muniya Border & Enamelled Asawali Peacock Pallu",
    color: "Deep Royal Violet & Marigold Zari",
    occasion: "Bridal & Wedding",
    priceINR: 14499,
    originalPriceINR: 22000,
    badge: "Handloom Heritage",
    rating: 5.0,
    reviewsCount: 84,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Recognized by UNESCO for heritage weaving, this authentic Yeola Paithani boasts the iconic Mor-Popat (Peacock & Parrot) motifs created purely by hand without any power assistance.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Matching Silk Blouse Fabric",
      weaveType: "Tapestry Weaving Technique",
      washCare: "Specialist Dry Clean Only",
      origin: "Yeola, Maharashtra, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sut-anarkali-08",
    sku: "SUT-ANK-08",
    title: "Ochre Yellow Mirror & Gota Anarkali 3-Piece Festive Set",
    category: "suit",
    subcategory: "anarkali",
    fabric: "Chanderi Silk & Cotton Mulmul",
    work: "Handcrafted Gota Patti Chevron Border & Foil Mirror Bootas",
    color: "Golden Ochre & Haldi Sunshine",
    occasion: "Festive Celebration",
    priceINR: 5299,
    originalPriceINR: 7999,
    badge: "Haldi Festive Special",
    rating: 4.8,
    reviewsCount: 94,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Vibrant and celebratory, tailored in lustrous Chanderi silk with full flare and paired with matching straight pants and a flared dupatta with handcrafted tassels.",
    specifications: {
      topPiece: "Flared Anarkali Kurta (48-inch Length)",
      bottomPiece: "Chanderi Straight Pants (38-inch Length)",
      dupatta: "Pure Kota Doria Dupatta with Gota Laces (2.5 Metres)",
      innerLining: "Pre-Shrunk Pure Cotton Mulmul Lining",
      washCare: "Dry Clean or Gentle Hand Wash"
    },
    sizes: ["Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Stitched XXL (44\")"]
  },
  {
    id: "sar-crepe-09",
    sku: "SAR-CRP-09",
    title: "Digital Printed French Crepe Silk Designer Saree",
    category: "saree",
    subcategory: "chiffon",
    fabric: "Pure French Crepe Silk",
    work: "Art Deco Floral Digital Print with Subtle Zari Border",
    color: "Midnight Blue & Floral Burst",
    occasion: "Casual Luxury",
    priceINR: 3299,
    originalPriceINR: 4999,
    badge: "Under $45 / Budget Friendly",
    rating: 4.7,
    reviewsCount: 63,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Ultra-soft, wrinkle-resistant drape that effortlessly transitions from daytime executive wear to evening cocktails. Comes with vibrant botanical motifs.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "0.8 Metre Printed Crepe Blouse Fabric",
      weaveType: "Smooth Crepe Silk",
      washCare: "Machine Wash Gentle or Hand Wash",
      origin: "Surat, Gujarat, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sut-cotton-10",
    sku: "SUT-COT-10",
    title: "Jaipuri Hand-Block Printed Cotton 3-Piece Daily Luxe Suit",
    category: "suit",
    subcategory: "straight-suit",
    fabric: "100% Pure 60x60 Cambric Cotton",
    work: "Natural Indigo & Bagru Hand Block Print with Gota Patti Neckline",
    color: "Indigo Royal Blue & Ivory",
    occasion: "Casual Luxury",
    priceINR: 2499,
    originalPriceINR: 3999,
    badge: "Under $35 / 100% Pure Cotton",
    rating: 4.8,
    reviewsCount: 130,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Breathable all-weather summer comfort. Made from fine hand-block printed cotton in Sanganer, Jaipur. Includes straight kurta, comfortable elasticated palazzo trousers, and a lightweight mulmul dupatta.",
    specifications: {
      topPiece: "Kurta Material (2.5 Metres)",
      bottomPiece: "Palazzo Fabric (2.5 Metres)",
      dupatta: "Super Soft Mulmul Cotton Dupatta (2.5 Metres)",
      dyeMethod: "Natural Vegetable Eco-Friendly Dyes",
      washCare: "Hand Wash Separately in Cold Water"
    },
    sizes: ["Unstitched Fabric", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")", "Stitched XXL (44\")"]
  },
  {
    id: "sar-velvet-11",
    sku: "SAR-VEL-11",
    title: "Hand-Embroidered Velvet Border Organza Cocktail Saree",
    category: "saree",
    subcategory: "organza",
    fabric: "Crystal Silk Organza with Rich Velvet Applique Border",
    work: "Zardozi, Cutdana, and Dabka Handwork",
    color: "Wine Burgundy & Antique Gold",
    occasion: "Party Wear",
    priceINR: 7999,
    originalPriceINR: 12499,
    badge: "Cocktail Special",
    rating: 4.9,
    reviewsCount: 57,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An enchanting collision of sheer weightless organza and lush, rich velvet trim embroidered with sparkling cutdana work. Designed to stand out in festive soirees.",
    specifications: {
      sareeLength: "5.5 Metres",
      blousePiece: "1.0 Metre Heavy Velvet Designer Blouse Piece Included",
      weaveType: "Embellished Organza",
      washCare: "Dry Clean Only",
      origin: "New Delhi Designer Studio, India"
    },
    sizes: ["Unstitched Blouse", "Custom Stitched Blouse (+₹999 / $15)"]
  },
  {
    id: "sut-sharara-12",
    sku: "SUT-SHR-12",
    title: "Pakistani Designer Georgette Sharara 3-Piece Set in Mint Green",
    category: "suit",
    subcategory: "sharara-suit",
    fabric: "Pure Micro Georgette & Organza",
    work: "Chikankari Thread Embroidery, Sequins and Pearl Edging",
    color: "Mint Sage Green & Silver",
    occasion: "Festive Celebration",
    priceINR: 6999,
    originalPriceINR: 10999,
    badge: "Trending Set",
    rating: 4.9,
    reviewsCount: 104,
    readyToShip: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A sensational festive ensemble in soft mint sage green. Features a heavily thread-embroidered short kurta with pearl tassels, multi-tier flared sharara bottoms, and a sheer embroidered dupatta.",
    specifications: {
      topPiece: "Embroidered Georgette Kurta (36-inch Length)",
      bottomPiece: "Multi-layered Georgette Sharara Pants (42-inch Length)",
      dupatta: "Embroidered Organza Dupatta (2.5 Metres)",
      innerLining: "Santoon Lining Provided",
      washCare: "Dry Clean Only"
    },
    sizes: ["Unstitched Material", "Stitched S (36\")", "Stitched M (38\")", "Stitched L (40\")", "Stitched XL (42\")"]
  }
];

// Helper functions for products
const ProductService = {
  getAll: () => PRODUCTS_DATA,
  
  getById: (id) => PRODUCTS_DATA.find(p => p.id === id),
  
  getByCategory: (category) => {
    if (!category || category === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter(p => p.category === category);
  },

  filterProducts: ({ category, subcategory, fabric, occasion, maxPrice, search, readyOnly }) => {
    return PRODUCTS_DATA.filter(p => {
      // Category filter
      if (category && category !== 'all' && p.category !== category) return false;
      
      // Subcategory filter
      if (subcategory && subcategory !== 'all' && p.subcategory !== subcategory) return false;
      
      // Fabric filter
      if (fabric && fabric !== 'all') {
        const pFab = p.fabric.toLowerCase();
        if (!pFab.includes(fabric.toLowerCase())) return false;
      }

      // Occasion filter
      if (occasion && occasion !== 'all' && p.occasion !== occasion) return false;

      // Price filter (INR based)
      if (maxPrice && p.priceINR > maxPrice) return false;

      // Ready to ship filter
      if (readyOnly && !p.readyToShip) return false;

      // Search term
      if (search && search.trim() !== '') {
        const q = search.toLowerCase().trim();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesFabric = p.fabric.toLowerCase().includes(q);
        const matchesWork = p.work.toLowerCase().includes(q);
        const matchesColor = p.color.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesFabric && !matchesWork && !matchesColor && !matchesSku && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }
};

if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.ProductService = ProductService;
}
