import './globals.css'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import { Header } from '@/components/header'

const arimo = Arimo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grocery Simulator',
  description: 'Make grocery shopping simulations to compare prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${arimo.className} min-h-screen bg-zinc-50`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
