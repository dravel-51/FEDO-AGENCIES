import type { Metadata } from 'next'
import CompanyIntro from '@/components/about/CompanyIntro'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import WhyDifferent from '@/components/about/WhyDifferent'
import Certifications from '@/components/about/Certifications'
import Regulators from '@/components/about/Regulators'
import PartnersAssociations from '@/components/about/PartnersAssociations'
import Sustainability from '@/components/about/Sustainability'
import TeamSection from '@/components/about/TeamSection'
import LocationFacilities from '@/components/about/LocationFacilities'

export const metadata: Metadata = {
  title: 'About Us - Fedo Agencies Limited | Certified Agricultural Solutions Kenya',
  description: 'Discover Fedo Agencies Limited - your trusted, certified partner in agricultural solutions. Learn about our GROWTH values, certifications, partnerships, sustainability commitments, and 15+ years of serving farmers across Kenya.',
  keywords: 'about Fedo Agencies, agricultural company Kenya, farming solutions, crop protection experts, agricultural chemicals supplier, KEPHIS certified, ISO certified, sustainable agriculture',
  openGraph: {
    title: 'About Us - Fedo Agencies Limited | Certified Agricultural Solutions',
    description: 'Discover our comprehensive agricultural solutions, certifications, partnerships, and commitment to sustainable farming across Kenya.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <CompanyIntro />
      <MissionVision />
      <CoreValues />
      <WhyDifferent />
      <Certifications />
      <Regulators />
      <PartnersAssociations />
      <Sustainability />
      <TeamSection />
      <LocationFacilities />
    </div>
  )
}