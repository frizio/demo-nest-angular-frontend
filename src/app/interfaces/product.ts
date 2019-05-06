export interface Product {
  _id?: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  new: boolean;
  createdAt?: Date;
}
