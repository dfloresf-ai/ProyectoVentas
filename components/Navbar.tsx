'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function Navbar() {
  const { cart } = useCart()

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  return (
    <nav className='bg-black text-white px-8 py-4 flex justify-between items-center'>
      <Link href='/' className='text-2xl font-bold'>
        TechStore
      </Link>

      <Link
        href='/carrito'
        className='flex items-center gap-2'
      >
        <ShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </nav>
  )
}