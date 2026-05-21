import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Air M2',
    price: 25999,
    category: 'Laptops',
    image:
      'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjQm9vayUyMEFpciUyME0yfGVufDB8fDB8fHww',
    description:
      'Laptop ultraligera con chip Apple M2.'
  },

  {
    id: 2,
    name: 'Lenovo ThinkPad X1',
    price: 21999,
    category: 'Laptops',
    image:
      'https://images.unsplash.com/photo-1626890871138-a286af648586?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVub3ZvJTIwdGhpbmtwYWR8ZW58MHx8MHx8fDA%3D',
    description:
      'Laptop profesional para productividad.'
  },

  {
    id: 3,
    name: 'Logitech MX Master 3',
    price: 2499,
    category: 'Accesorios',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db',
    description:
      'Mouse ergonómico profesional.'
  },

  {
    id: 4,
    name: 'Keychron K2',
    price: 1899,
    category: 'Accesorios',
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae',
    description:
      'Teclado mecánico inalámbrico.'
  },

  {
    id: 5,
    name: 'Sony WH-1000XM5',
    price: 7999,
    category: 'Audio',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    description:
      'Audífonos con cancelación de ruido.'
  },

  {
    id: 6,
    name: 'LG UltraWide 34',
    price: 12999,
    category: 'Monitores',
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
    description:
      'Monitor ultrawide profesional.'
  }
]