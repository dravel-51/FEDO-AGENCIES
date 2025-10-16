import type { Metadata } from 'next'
import ProductsHero from '@/components/products/ProductsHero'
import ProductCategories from '@/components/products/ProductCategories'
import ProductCatalog from '@/components/products/ProductCatalog'
import ServicesSection from '@/components/products/ServicesSection'

export const metadata: Metadata = {
  title: 'Products & Services - Fedo Agencies Limited | Agricultural Solutions',
  description: 'Comprehensive range of agricultural products including insecticides, fungicides, herbicides, fertilizers, and equipment. Professional agricultural services and technical support.',
  keywords: 'agricultural products Kenya, insecticides, fungicides, herbicides, fertilizers, crop protection, agricultural equipment, farming supplies',
  openGraph: {
    title: 'Products & Services - Fedo Agencies Limited',
    description: 'Comprehensive range of agricultural products and professional services for farmers in Kenya.',
    url: '/products',
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductCategories />
      <ProductCatalog />
      <ServicesSection />
    </div>
  )
}