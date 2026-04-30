import { Product } from '../store/cartSlice';

export const products: Product[] = [
  {
    id: 1,
    name: 'Cold Brew Concentrate',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80',
    category: 'Beverages',
    description: 'Small-batch cold brew, steeped 18 hours.',
  },
  {
    id: 2,
    name: 'Wildflower Honey',
    price: 11.49,
    image:
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&q=80',
    category: 'Pantry',
    description: 'Raw, unfiltered honey from local hives.',
  },
  {
    id: 3,
    name: 'Sourdough Loaf',
    price: 9.99,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    category: 'Bakery',
    description: '72-hour fermented, stone-baked daily.',
  },
  {
    id: 4,
    name: 'Matcha Ceremonial Grade',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80',
    category: 'Beverages',
    description: 'First harvest, stone-ground in Uji, Japan.',
  },
  {
    id: 5,
    name: 'Extra Virgin Olive Oil',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80',
    category: 'Pantry',
    description: 'Single-origin, cold-pressed from Sicily.',
  },
  {
    id: 6,
    name: 'Himalayan Pink Salt',
    price: 7.49,
    image:
      'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&q=80',
    category: 'Pantry',
    description: 'Coarse ground, mineral-rich ancient salt.',
  },
  {
    id: 7,
    name: 'Dark Chocolate Bar 85%',
    price: 6.99,
    image:
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80',
    category: 'Snacks',
    description: 'Single-origin cacao, minimal ingredients.',
  },
  {
    id: 8,
    name: 'Oat Milk Original',
    price: 5.49,
    image:
      'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=400&q=80',
    category: 'Beverages',
    description: 'Creamy, barista-grade oat milk.',
  },
];
