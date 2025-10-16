import type { Metadata } from 'next'
import ResourcesHero from '@/components/resources/ResourcesHero'
import EducationalGuides from '@/components/resources/EducationalGuides'
import PestIdentification from '@/components/resources/PestIdentification'
import DownloadsSection from '@/components/resources/DownloadsSection'
import FAQSection from '@/components/resources/FAQSection'

export const metadata: Metadata = {
  title: 'Knowledge Center - Fedo Agencies Limited | Agricultural Resources & Guides',
  description: 'Access comprehensive agricultural resources, pest identification guides, application guidelines, FAQs, and downloadable materials for successful farming in Kenya.',
  keywords: 'agricultural guides Kenya, pest identification, farming resources, application guidelines, agricultural FAQs, farming education',
  openGraph: {
    title: 'Knowledge Center - Fedo Agencies Limited',
    description: 'Comprehensive agricultural resources and expert guidance for successful farming.',
    url: '/resources',
  },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <ResourcesHero />
      <EducationalGuides />
      <PestIdentification />
      <DownloadsSection />
      <FAQSection />
    </div>
  )
}