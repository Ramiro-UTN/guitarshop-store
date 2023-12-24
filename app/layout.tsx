import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'

const font = Quicksand({ subsets: ['latin'], weight: '500', })

export const metadata: Metadata = {
  title: 'Guitarras Lonatti',
  description: 'Guitars store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
