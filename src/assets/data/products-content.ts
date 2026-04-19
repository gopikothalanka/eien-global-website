export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  applications: string[];
  meta: {
    type: string;
    forms?: string[];
    source?: string;
    processing?: string;
    origin: string;
  };
};
export const products: Product[] = [
  {
    slug: "natural-honey",
    name: "Natural Honey",
    category: "Natural Products",
    shortDescription:
      "Natural honey is a pure and unprocessed sweetener collected from nectar by honeybees. It is widely valued for its nutritional benefits, natural sweetness, and medicinal properties.",
    longDescription:
      "Our natural honey is sourced from trusted apiaries and carefully processed to retain its natural enzymes, antioxidants, and nutrients. It is widely used in food, beverages, pharmaceuticals, and cosmetic applications. Known for its antibacterial and healing properties, honey is also a preferred natural alternative to refined sugar.",
    image: "/product-images/natural-honey.png",
    applications: [
      "Food and beverage sweetener",
      "Bakery and confectionery",
      "Pharmaceutical and medicinal use",
      "Cosmetics and skincare products",
    ],
    meta: {
      type: "Natural Sweetener",
      source: "Honeybees",
      forms: ["Liquid"],
      origin: "India",
    },
  },
  {
    slug: "dehydrated-fruits-vegetables",
    name: "Dehydrated Fruits & Vegetables (Powders & Slices)",
    category: "Processed Foods",
    shortDescription:
      "Dehydrated fruits and vegetables are processed to remove moisture while retaining flavor, nutrients, and shelf life, making them ideal for various food applications.",
    longDescription:
      "We supply high-quality dehydrated fruits and vegetables in both powder and slice forms. These products are processed using advanced dehydration techniques to preserve natural taste, color, and nutritional value. They are widely used in food processing industries, ready-to-eat meals, seasonings, and health products.",
    image: "/product-images/dehydrated-products.png",
    applications: [
      "Instant food mixes",
      "Snack manufacturing",
      "Seasoning and spice blends",
      "Health and nutrition products",
    ],
    meta: {
      type: "Dehydrated Food Products",
      forms: ["Powder", "Slices"],
      processing: "Low-temperature dehydration",
      origin: "India",
    },
  },
  {
    slug: "cocoa-products",
    name: "Natural Cocoa Powder & Cocoa Butter",
    category: "Food Ingredients",
    shortDescription:
      "Cocoa products derived from premium cocoa beans are widely used in chocolate manufacturing, bakery products, and cosmetic applications.",
    longDescription:
      "Our cocoa powder and cocoa butter are sourced from high-quality cocoa beans and processed under strict quality standards. Cocoa powder is widely used in chocolate, bakery, and beverage industries, while cocoa butter is essential for confectionery and cosmetic formulations due to its smooth texture and stability.",
    image: "/product-images/cocoa-products.png",
    applications: [
      "Chocolate and confectionery",
      "Bakery and desserts",
      "Beverages",
      "Cosmetics and personal care products",
    ],
    meta: {
      type: "Cocoa Derivatives",
      forms: ["Powder", "Butter"],
      processing: "Bean extraction and refinement",
      origin: "India",
    },
  },
  {
    slug: "garlic",
    name: "Garlic",
    category: "Agricultural Products",
    shortDescription:
      "Garlic is a widely used culinary ingredient known for its strong flavor, aroma, and medicinal properties.",
    longDescription:
      "Our garlic is sourced from premium farms in India and processed to maintain freshness, flavor, and nutritional value. It is widely used in cooking, food processing, and medicinal applications due to its natural antibacterial and health benefits. We ensure consistent quality suitable for both domestic and international markets.",
    image: "/product-images/garlic.png",
    applications: [
      "Cooking and food preparation",
      "Processed food industry",
      "Medicinal and health products",
      "Spice blends and seasonings",
    ],
    meta: {
      type: "Vegetable",
      forms: ["Whole", "Cloves", "Powder"],
      processing: "Fresh / Dehydrated",
      origin: "India",
    },
  },
  {
    slug: "cold-pressed-oils",
    name: "Cold-Pressed Oils",
    category: "Oil Products",
    shortDescription:
      "We supply premium cold-pressed oils including sesame, groundnut, mustard, and coconut oil, extracted naturally to retain nutrients, flavor, and aroma.",
    longDescription:
      "Our cold-pressed oils are extracted using traditional and modern low-temperature techniques that preserve natural nutrients, antioxidants, and essential fatty acids. These oils are unrefined, chemical-free, and ideal for health-conscious consumers and food applications. Known for their purity and rich flavor, our oils meet high-quality standards suitable for domestic and export markets.",
    image: "/product-images/oils.png",
    applications: [
      "Cooking and culinary use",
      "Health and wellness products",
      "Ayurvedic and medicinal use",
      "Cosmetics and skincare",
    ],
    meta: {
      type: "Cold-Pressed Vegetable Oils",
      forms: ["Liquid"],
      processing: "Cold-pressed extraction",
      origin: "India",
    },
    // variants: [
    //   "Sesame Oil",
    //   "Groundnut Oil",
    //   "Mustard Oil",
    //   "Coconut Oil"
    // ]
  },
];
