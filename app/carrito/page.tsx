'use client'

import Link from 'next/link'

import CartItem from '@/components/CartItem'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'

export default function CartPage() {
  const { cart, clearCart } = useCart()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl font-bold'>
          Carrito de Compras
        </h1>

        <Link
          href='/'
          className='bg-black text-white px-5 py-3 rounded-lg'
        >
          Volver al catálogo
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className='bg-white p-8 rounded-xl shadow'>
          <p className='text-lg'>
            El carrito está vacío
          </p>
        </div>
      ) : (
        <div className='space-y-5'>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className='bg-white p-6 rounded-xl shadow'>
            <h2 className='text-3xl font-bold mb-4'>
              Total: {formatPrice(total)}
            </h2>

            <div className='flex gap-4'>
              <button
                onClick={clearCart}
                className='bg-red-500 text-white px-6 py-3 rounded-lg'
              >
                Vaciar carrito
              </button>

              <Link
                href='/'
                className='bg-black text-white px-6 py-3 rounded-lg'
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}