'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { products } from '@/data/products'
import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'

export default function ProductDetail() {
  const params = useParams()

  const { addToCart } = useCart()

  const product = products.find(
    p => p.id === Number(params.id)
  )

  if (!product) {
    return (
      <main className='min-h-screen flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>
          Producto no encontrado
        </h1>
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <div className='bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8'>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={500}
          loading='eager'
          priority
          className='rounded-xl w-full h-auto object-cover'
        />

        <div>
          <h1 className='text-4xl font-bold mb-4'>
            {product.name}
          </h1>

          <p className='text-gray-500 mb-4'>
            {product.category}
          </p>

          <p className='text-3xl font-bold mb-6'>
            {formatPrice(product.price)}
          </p>

          <p className='mb-8 text-lg'>
            {product.description}
          </p>

          <div className='flex gap-4'>
            <button
              onClick={() => addToCart(product)}
              className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition'
            >
              Agregar al carrito
            </button>

            <Link
              href='/'
              className='bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition'
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}