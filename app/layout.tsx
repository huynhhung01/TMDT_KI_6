import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' })
const _lora = Lora({ subsets: ["latin"], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'MỘC AN - Tĩnh Lặng Xứ Quảng | Trầm Hương Premium',
  description: 'Khám phá thế giới trầm hương tự nhiên 100% từ Xứ Quảng. MỘC AN mang đến những trải nghiệm tinh tế, mộc mạc và an yên cho không gian sống của bạn.',
  keywords: 'trầm hương, quà tặng premium, di sản Xứ Quảng, thiền, mộc mạc',
  openGraph: {
    title: 'MỘC AN - Tĩnh Lặng Xứ Quảng',
    description: 'Trầm hương tự nhiên 100% - Thủ công Xứ Quảng',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#A08040',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${_playfair.variable} ${_lora.variable} font-body antialiased bg-cream text-brown-dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
