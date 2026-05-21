'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import { CartItemType, Product } from '@/types/product'

interface CartContextProps {
  cart: CartItemType[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<CartItemType[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id
      )

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev =>
      prev.filter(item => item.id !== id)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () =>
  useContext(CartContext)