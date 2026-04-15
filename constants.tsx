
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'passion-khat',
    name: 'JabaTamu Passion Burst',
    flavor: 'Passion',
    price: 900,
    description: 'A vibrant blend of freshly harvested khat leaves and tangy passion fruit pulp. Refreshing, energizing, and perfectly balanced.',
    image: 'https://lh3.googleusercontent.com/d/1QjZMOywdcUeaPr-9WSkdoghJQs-kW7pn',
    color: 'bg-orange-500/20 border-orange-500/50 text-orange-400',
    benefits: ['Natural Energy', 'Vitamin C Rich', 'Digestive Aid']
  },
  {
    id: 'pineapple-khat',
    name: 'JabaTamu Pineapple Gold',
    flavor: 'Pineapple',
    price: 900,
    description: 'Sun-ripened pineapples infused with the essence of premium fresh khat. A tropical powerhouse that keeps you focused and fresh.',
    image: 'https://lh3.googleusercontent.com/d/1xP5VqkSeVdy-0cFqJVunoTumngG0fmGd',
    color: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
    benefits: ['Focus Boost', 'Anti-inflammatory', 'Tropical Hydration']
  }
];
