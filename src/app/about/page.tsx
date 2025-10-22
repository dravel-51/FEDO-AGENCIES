import type { Metadata } from 'next'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'

export const metadata: Metadata = {
  title: 'About Us - Fedo Agencies Limited | Mission, Vision & Core Values',
  description: 'Learn about Fedo Agencies Limited\'s mission to provide quality agricultural products, our vision to be Kenya\'s leading agricultural input provider, and our GROWTH core values that guide everything we do.',
  keywords: 'about Fedo Agencies, mission vision values, agricultural company Kenya, farming solutions, crop protection experts, agricultural chemicals supplier',
  openGraph: {
    title: 'About Us - Fedo Agencies Limited | Mission, Vision & Core Values',
    description: 'Discover our mission, vision, and core values that drive our commitment to agricultural excellence in Kenya.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MissionVision />
      <CoreValues />
    </div>
  )
}