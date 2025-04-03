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
