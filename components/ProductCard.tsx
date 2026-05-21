'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/types/product'
import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className='w-full h-60 object-cover'
      />

      <div className='p-5'>
        <h2 className='text-xl font-semibold mb-2'>
          {product.name}
        </h2>

        <p className='text-gray-500 mb-4'>
          {product.category}
        </p>

        <p className='text-2xl font-bold mb-4'>
          {formatPrice(product.price)}
        </p>

        <div className='flex gap-3'>
          <Link
            href={`/producto/${product.id}`}
            className='flex-1 bg-gray-200 text-center py-2 rounded-lg'
          >
            Ver detalle
          </Link>

          <button
            onClick={() => addToCart(product)}
            className='flex-1 bg-black text-white py-2 rounded-lg'
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}