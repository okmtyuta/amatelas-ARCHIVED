import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Frame } from '@okmtyuta/amatelas'
import '@okmtyuta/amatelas/style.css'
import './reset.css'
import './katex.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmatelasUI',
  description: 'AmatelasUI is a simple component library.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Frame>{children}</Frame>
        <Footer />
      </body>
    </html>
  )
}
