'use client'

import { CartItemType } from '@/types/product'
import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'

interface Props {
  item: CartItemType
}

export default function CartItem({ item }: Props) {
  const { removeFromCart } = useCart()

  return (
    <div className='bg-white p-5 rounded-xl shadow flex justify-between items-center'>
      <div>
        <h2 className='text-xl font-semibold'>
          {item.name}
        </h2>

        <p>Cantidad: {item.quantity}</p>

        <p className='font-bold'>
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className='bg-red-500 text-white px-4 py-2 rounded-lg'
      >
        Eliminar
      </button>
    </div>
  )
}