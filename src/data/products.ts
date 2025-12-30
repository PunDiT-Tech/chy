import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'High-performance laptops for ultimate gaming experience',
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Professional laptops for enterprise productivity',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80'
  },
  {
    id: 'student',
    name: 'Student',
    description: 'Affordable and reliable laptops for education',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80'
  },
  {
    id: 'ultrabook',
    name: 'Ultrabook',
    description: 'Ultra-thin and lightweight premium laptops',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ProBook Elite X1',
    brand: 'TechPro',
    price: 1899,
    originalPrice: 2199,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80'
    ],
    category: 'business',
    specs: {
      cpu: 'Intel Core i7-13700H',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      gpu: 'Intel Iris Xe',
      screen: '14" 2.8K OLED',
      battery: '12 hours',
      os: 'Windows 11 Pro'
    },
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviews: 156,
    featured: true,
    description: 'The ProBook Elite X1 is engineered for professionals who demand excellence. Featuring a stunning 2.8K OLED display and powerful 13th Gen Intel processor.'
  },
  {
    id: '2',
    name: 'GameMaster RTX 4080',
    brand: 'VelocityTech',
    price: 2499,
    originalPrice: 2799,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80'
    ],
    category: 'gaming',
    specs: {
      cpu: 'AMD Ryzen 9 7945HX',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      gpu: 'NVIDIA RTX 4080 16GB',
      screen: '17.3" QHD 240Hz',
      battery: '6 hours',
      os: 'Windows 11 Home'
    },
    inStock: true,
    stockQuantity: 12,
    rating: 4.9,
    reviews: 243,
    featured: true,
    description: 'Dominate every game with the GameMaster RTX 4080. Featuring the latest NVIDIA graphics and a blazing-fast 240Hz display for competitive edge.'
  },
  {
    id: '3',
    name: 'AirSlim Pro 15',
    brand: 'NovaTech',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80'
    ],
    category: 'ultrabook',
    specs: {
      cpu: 'Apple M2 Pro',
      ram: '16GB Unified',
      storage: '512GB SSD',
      gpu: 'Integrated 19-core',
      screen: '15.3" Liquid Retina XDR',
      battery: '18 hours',
      os: 'macOS Sonoma'
    },
    inStock: true,
    stockQuantity: 45,
    rating: 4.7,
    reviews: 412,
    featured: true,
    description: 'Experience incredible performance in an impossibly thin design. The AirSlim Pro 15 delivers all-day battery life and stunning Retina display.'
  },
  {
    id: '4',
    name: 'EduBook Essential',
    brand: 'LearnTech',
    price: 549,
    originalPrice: 699,
    discount: 21,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80'
    ],
    category: 'student',
    specs: {
      cpu: 'Intel Core i5-1235U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      gpu: 'Intel UHD Graphics',
      screen: '14" FHD IPS',
      battery: '10 hours',
      os: 'Windows 11 Home S'
    },
    inStock: true,
    stockQuantity: 78,
    rating: 4.4,
    reviews: 328,
    featured: false,
    description: 'Perfect for students on a budget. The EduBook Essential offers reliable performance for studying, browsing, and everyday tasks.'
  },
  {
    id: '5',
    name: 'StormForce Gaming Elite',
    brand: 'VelocityTech',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80'
    ],
    category: 'gaming',
    specs: {
      cpu: 'Intel Core i7-13650HX',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      gpu: 'NVIDIA RTX 4070 8GB',
      screen: '15.6" FHD 165Hz',
      battery: '5 hours',
      os: 'Windows 11 Home'
    },
    inStock: true,
    stockQuantity: 19,
    rating: 4.6,
    reviews: 187,
    featured: false,
    description: 'Entry-level gaming laptop that punches above its weight. Experience smooth gameplay with RTX 4070 graphics and rapid refresh display.'
  },
  {
    id: '6',
    name: 'ThinkPad X1 Carbon Gen 11',
    brand: 'TechPro',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80'
    ],
    category: 'business',
    specs: {
      cpu: 'Intel Core i7-1365U vPro',
      ram: '32GB LPDDR5',
      storage: '1TB SSD',
      gpu: 'Intel Iris Xe',
      screen: '14" 2.8K OLED Touch',
      battery: '15 hours',
      os: 'Windows 11 Pro'
    },
    inStock: true,
    stockQuantity: 31,
    rating: 4.9,
    reviews: 276,
    featured: true,
    description: 'The legendary ThinkPad reimagined. Military-grade durability meets modern design with enterprise-level security features.'
  },
  {
    id: '7',
    name: 'CreatorBook Pro 16',
    brand: 'NovaTech',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80'
    ],
    category: 'ultrabook',
    specs: {
      cpu: 'Intel Core i9-13900H',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      gpu: 'NVIDIA RTX 4060 8GB',
      screen: '16" 4K OLED DCI-P3',
      battery: '10 hours',
      os: 'Windows 11 Pro'
    },
    inStock: false,
    stockQuantity: 0,
    rating: 4.8,
    reviews: 89,
    featured: false,
    description: 'Built for creative professionals. The CreatorBook Pro 16 delivers exceptional color accuracy and raw processing power for demanding workflows.'
  },
  {
    id: '8',
    name: 'Campus Companion',
    brand: 'LearnTech',
    price: 429,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80'
    ],
    category: 'student',
    specs: {
      cpu: 'AMD Ryzen 5 5500U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      gpu: 'AMD Radeon Graphics',
      screen: '15.6" FHD',
      battery: '8 hours',
      os: 'Windows 11 Home'
    },
    inStock: true,
    stockQuantity: 92,
    rating: 4.3,
    reviews: 445,
    featured: false,
    description: 'Affordable performance for students. Lightweight, reliable, and perfect for note-taking, research, and streaming.'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getBrands = (): string[] => {
  return [...new Set(products.map(p => p.brand))];
};
