/**
 * STORE CONFIGURATION & SETTINGS
 * Brand: IKSHARA™ (Pure Handloom Sarees & Designer 3-Piece Suits)
 * Domain: ikshara.co.nz
 * Admin WhatsApp: 8140307529 (+91 81403 07529)
 */

const STORE_CONFIG = {
  brandName: "Ikshara™",
  brandSubtitle: "Pure Handloom Sarees & Designer 3-Piece Suits",
  domain: "ikshara.co.nz",
  websiteUrl: "https://ikshara.co.nz",
  tagline: "Worldwide Express Delivery • New Zealand • Australia • USA • UK • UAE & 80+ Countries",
  
  // WhatsApp Settings (Customer inquiry and direct orders go to this number)
  whatsapp: {
    countryCode: "91",
    rawNumber: "8140307529",
    fullNumber: "918140307529",
    displayNumber: "+91 81403 07529",
    welcomeMessage: "Hello Ikshara™ (ikshara.co.nz)! I am visiting your website and would like to order Sarees and 3-Piece Suits.",
  },

  // Contact details
  support: {
    email: "orders@ikshara.co.nz",
    hours: "24/7 WhatsApp Assistance & Video Call Saree Inspection",
    address: "Auckland & Wellington (NZ) & India Handloom Artisan Studios",
    instagram: "@ikshara_nz",
  },

  // Multi-currency support
  defaultCurrency: "INR",
  currencies: {
    NZD: {
      symbol: "NZ$",
      name: "New Zealand Dollar",
      rate: 0.0195,
      format: (amount) => "NZ$" + Math.round(amount),
      freeShippingThreshold: 240,
      standardShipping: 35
    },
    AUD: {
      symbol: "AU$",
      name: "Australian Dollar",
      rate: 0.018,
      format: (amount) => "AU$" + Math.round(amount),
      freeShippingThreshold: 220,
      standardShipping: 35
    },
    USD: {
      symbol: "$",
      name: "US Dollar",
      rate: 0.012,
      format: (amount) => "$" + Math.round(amount),
      freeShippingThreshold: 150,
      standardShipping: 25
    },
    INR: {
      symbol: "₹",
      name: "Indian Rupee",
      rate: 1.0,
      format: (amount) => "₹" + Math.round(amount).toLocaleString('en-IN'),
      freeShippingThreshold: 9999,
      standardShipping: 499
    },
    GBP: {
      symbol: "£",
      name: "British Pound",
      rate: 0.0095,
      format: (amount) => "£" + Math.round(amount),
      freeShippingThreshold: 120,
      standardShipping: 20
    },
    EUR: {
      symbol: "€",
      name: "Euro",
      rate: 0.011,
      format: (amount) => "€" + Math.round(amount),
      freeShippingThreshold: 140,
      standardShipping: 22
    },
    AED: {
      symbol: "AED ",
      name: "UAE Dirham",
      rate: 0.044,
      format: (amount) => "AED " + Math.round(amount),
      freeShippingThreshold: 550,
      standardShipping: 90
    },
    CAD: {
      symbol: "CA$",
      name: "Canadian Dollar",
      rate: 0.016,
      format: (amount) => "CA$" + Math.round(amount),
      freeShippingThreshold: 200,
      standardShipping: 32
    }
  },

  // Worldwide shipping destinations with flags and dialing codes
  countries: [
    { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
    { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
    { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
    { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
    { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
    { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
    { name: "Fiji", code: "FJ", dial: "+679", flag: "🇫🇯" },
    { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
    { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
    { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
    { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
    { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
    { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
    { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
    { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
    { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
    { name: "Mauritius", code: "MU", dial: "+230", flag: "🇲🇺" },
    { name: "Other Worldwide Destination", code: "OTHER", dial: "+", flag: "🌍" }
  ]
};

if (typeof window !== 'undefined') {
  window.STORE_CONFIG = STORE_CONFIG;
}
