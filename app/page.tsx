'use client'

import { useState } from 'react'

import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'

import { products } from '@/data/products'

export default function HomePage() {
  const [category, setCategory] = useState('Todos')

  const filteredProducts =
    category === 'Todos'
      ? products
      : products.filter(
          product => product.category === category
        )

  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-4xl font-bold mb-8'>
        Catálogo Tecnológico
      </h1>

      <CategoryFilter
        selected={category}
        onSelect={setCategory}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}