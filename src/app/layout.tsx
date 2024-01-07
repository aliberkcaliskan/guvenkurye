import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Güven Kurye - Hızlı ve Güvenilir Teslimat',
  description: 'Güven Kurye, şehir içi hızlı paket teslimatı sağlayan bir kurye hizmetidir. Güvenli ve zamanında teslimatlarımızla, 1 noktadan diğer noktaya paketlerinizi güvenle ulaştırıyoruz.',
  keywords: 'güven kurye, hızlı teslimat, şehir içi kurye, paket teslimatı, güvenilir kurye hizmeti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
