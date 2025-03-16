export interface ProductType {
  id: number;
  productName: string;
  slog: string;
  description: string;
  price: number;
  origin: string;
  taste: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
  category: {
    id: number;
    categoryName: string;
    slog: string;
  };
}
