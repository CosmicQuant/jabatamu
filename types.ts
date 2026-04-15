
export interface Product {
  id: string;
  name: string;
  flavor: 'Passion' | 'Pineapple';
  price: number;
  description: string;
  image: string;
  color: string;
  benefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
