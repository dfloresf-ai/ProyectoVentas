import './globals.css'

import Navbar from '@/components/Navbar'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Tech POS',
  description: 'Catálogo tecnológico'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}