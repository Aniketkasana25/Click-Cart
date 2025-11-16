export interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  imageUrl?: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
