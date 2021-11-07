export interface Product {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  price: number;
  brand: string;
  type?: string;
  quantityInStock?: number;
}