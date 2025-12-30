export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  category: 'gaming' | 'business' | 'student' | 'ultrabook';
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
    screen: string;
    battery: string;
    os: string;
  };
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}
