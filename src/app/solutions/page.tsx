import type { Metadata } from 'next'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import CropCategories from '@/components/solutions/CropCategories'
import CropSolutions from '@/components/solutions/CropSolutions'
import IPMStrategies from '@/components/solutions/IPMStrategies'

export const metadata: Metadata = {
  title: 'Solutions by Crop - Fedo Agencies Limited | Crop-Specific Agricultural Solutions',
  description: 'Comprehensive crop protection solutions organized by crop type. Get targeted recommendations for vegetables, cereals, fruits, and cash crops in Kenya.',
  keywords: 'crop protection Kenya, vegetable farming, cereal crops, fruit farming, cash crops, integrated pest management, crop solutions',
  openGraph: {
    title: 'Solutions by Crop - Fedo Agencies Limited',
    description: 'Targeted agricultural solutions for every crop type. Expert recommendations for optimal yields.',
    url: '/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <SolutionsHero />
      <CropCategories />
      <CropSolutions />
      <IPMStrategies />
    </div>
  )
}