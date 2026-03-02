import './globals.css'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../lib/cart'

const poppinsSans = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' })
const poppinsDisplay = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Grand-PE',
  description: 'Pixel-close ecommerce demo with Next.js 14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppinsSans.variable} ${poppinsDisplay.variable}`}>
      <body className="min-h-screen bg-muted text-neutral-900 overflow-x-hidden w-full">
        <CartProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
