import { ProductData, ProductFullData } from "@/app/types/health";

export const productData: ProductData[] = [
  {
    id: "1",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "2",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "3",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "4",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "5",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "6",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "7",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "8",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "9",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "10",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "11",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
  {
    id: "12",
    name: "Natural Vitality, CALM Gummies, Magnesi...",
    price: "150,000",
    image: "/health/image.png",
    productRating: 265
  },
];



export const products : ProductFullData[] = [
  {
    id: 1,
    name: "Natural Vitality, CALM Gummies, Magnesium Supplement, Raspberry-Lemon, 120 Gummies",
    brand: "Calm",
    price: 150000,
    originalPrice: 170000,
    discount: "-13.33%",
    stockStatus: "In stock",
    shippingCost: 900,
    shippingLocation: "Owerri",
    image: "/health/image.png",
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40"], // Shoe sizes
    rating: 4.5,
    verifiedRatings: 2422,
    ratingBreakdown: {
      5: 2050,
      4: 300,
      3: 150,
      2: 122,
      1: 10,
    },
    description:
      "Experience relief, comfort, and effectiveness with this year's latest pharmaceutical innovation. This formulation, crafted with precision, offers a versatile solution designed to address a range of conditions while providing soothing relief. Its active ingredients are selected for their efficacy and ease of absorption, ensuring quick action and sustained comfort.",
    delivery: {
      pickupStation: {
        fee: 900,
        deliveryTime: "23 August and 27 August",
      },
      returnPolicy: "Enjoy free returns within 7 days on all eligible items",
      warranty: "1 year",
    },
    seller: {
      name: "Dragon-SEAS-COD",
      score: "94%",
      deliveryRate: "91%",
      performance: {
        orderFulfillment: "Excellent",
        qualityScore: "Excellent",
        customerRating: "Good",
      },
    },
    customerFeedback: [
      {
        rating: 5,
        comment: "Good calm",
        date: "14-06-2024",
        customer: "Samson Adebisi",
        verifiedPurchase: true,
      },
      {
        rating: 5,
        comment: "Very effective product",
        date: "12-06-2024",
        customer: "Jane Doe",
        verifiedPurchase: true,
      },
      {
        rating: 5,
        comment: "Highly recommend",
        date: "10-06-2024",
        customer: "John Smith",
        verifiedPurchase: true,
      },
    ],
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil, 1000mg, Lemon Flavor, 200 Softgels",
    brand: "HealthPlus",
    price: 120000,
    originalPrice: 140000,
    discount: "-14.29%",
    stockStatus: "In stock",
    shippingCost: 800,
    shippingLocation: "Lagos",
    image: "/health/omega3.png",
    sizes: ["100 Softgels", "200 Softgels", "300 Softgels"], // Capsule counts
    rating: 4.7,
    verifiedRatings: 1800,
    ratingBreakdown: {
      5: 1500,
      4: 200,
      3: 170,
      2: 120,
      1: 10,
    },
    description:
      "Support your heart, brain, and joint health with our premium Omega-3 Fish Oil. Sourced from wild-caught fish, this supplement is designed to provide maximum potency and freshness with a refreshing lemon flavor.",
    delivery: {
      pickupStation: {
        fee: 800,
        deliveryTime: "20 August and 25 August",
      },
      returnPolicy: "Enjoy free returns within 7 days on all eligible items",
      warranty: "6 months",
    },
    seller: {
      name: "HealthStore",
      score: "90%",
      deliveryRate: "88%",
      performance: {
        orderFulfillment: "Good",
        qualityScore: "Excellent",
        customerRating: "Very Good",
      },
    },
    customerFeedback: [
      {
        rating: 5,
        comment: "Great product, no fishy aftertaste!",
        date: "15-06-2024",
        customer: "Alice Johnson",
        verifiedPurchase: true,
      },
      {
        rating: 4,
        comment: "Good quality but a bit pricey.",
        date: "13-06-2024",
        customer: "Michael Brown",
        verifiedPurchase: true,
      },
    ],
  },
  {
    id: 3,
    name: "Vitamin C Serum, 30ml, Anti-Aging & Brightening",
    brand: "GlowSkin",
    price: 80000,
    originalPrice: 100000,
    discount: "-20%",
    stockStatus: "In stock",
    shippingCost: 500,
    shippingLocation: "Abuja",
    image: "/health/vitamin-c-serum.png",
    sizes: ["30ml", "50ml"], // Volume measurements
    rating: 4.8,
    verifiedRatings: 3200,
    ratingBreakdown: {
      5: 2800,
      4: 300,
      3: 180,
      2: 120,
      1: 10,
    },
    description:
      "Achieve radiant and youthful skin with our Vitamin C Serum. Packed with antioxidants, this serum helps reduce fine lines, brighten skin tone, and protect against environmental damage.",
    delivery: {
      pickupStation: {
        fee: 500,
        deliveryTime: "18 August and 22 August",
      },
      returnPolicy: "Enjoy free returns within 7 days on all eligible items",
      warranty: "1 year",
    },
    seller: {
      name: "BeautyCare",
      score: "96%",
      deliveryRate: "93%",
      performance: {
        orderFulfillment: "Excellent",
        qualityScore: "Excellent",
        customerRating: "Excellent",
      },
    },
    customerFeedback: [
      {
        rating: 5,
        comment: "My skin has never looked better!",
        date: "16-06-2024",
        customer: "Sophia Williams",
        verifiedPurchase: true,
      },
      {
        rating: 5,
        comment: "Highly effective and worth the price.",
        date: "14-06-2024",
        customer: "Emma Davis",
        verifiedPurchase: true,
      },
    ],
  },
];
