export interface ProductData {
  id: string | number;
  name: string;
  price: string;
  image: string;
  productRating: number;
  isFavorite?: boolean;
}

export interface HealthProductDealsProps {
  products: ProductData[];
  title?: string;
  special?: boolean;
}

export interface ProductFullData {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: string;
  stockStatus: string;
  shippingCost: number;
  shippingLocation: string;
  image: string;
  sizes: string[];
  rating: number;
  verifiedRatings: number;
  ratingBreakdown: {
    [key: number]: number;
  };
  description: string;
  delivery: {
    pickupStation: {
      fee: number;
      deliveryTime: string;
    };
    returnPolicy: string;
    warranty: string;
  };
  seller: {
    name: string;
    score: string;
    deliveryRate: string;
    performance: {
      orderFulfillment: string;
      qualityScore: string;
      customerRating: string;
    };
  };
  customerFeedback: {
    rating: number;
    comment: string;
    date: string;
    customer: string;
    verifiedPurchase: boolean;
  }[];
}
