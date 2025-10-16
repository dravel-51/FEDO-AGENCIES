import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fedo Agencies Limited - Your Trusted Partner in Agricultural Solutions',
  description: 'Leading provider of agricultural insecticides, chemicals, and supplies in Kenya. Quality products, expert support, and reliable service for farmers and agricultural enterprises.',
  keywords: 'agricultural chemicals Kenya, farm insecticides Nairobi, crop protection products, pest control solutions Kenya, agricultural supplies Nairobi',
  authors: [{ name: 'Fedo Agencies Limited' }],
  creator: 'Fedo Agencies Limited',
  publisher: 'Fedo Agencies Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fedoagencies.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fedo Agencies Limited - Agricultural Solutions Kenya',
    description: 'Leading provider of agricultural insecticides, chemicals, and supplies in Kenya.',
    url: 'https://fedoagencies.co.ke',
    siteName: 'Fedo Agencies Limited',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fedo Agencies Limited - Agricultural Solutions Kenya',
    description: 'Leading provider of agricultural insecticides, chemicals, and supplies in Kenya.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}