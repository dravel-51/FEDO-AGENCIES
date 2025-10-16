import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import LocationMap from '@/components/contact/LocationMap'

export const metadata: Metadata = {
  title: 'Contact Us - Fedo Agencies Limited | Get in Touch',
  description: 'Contact Fedo Agencies Limited for agricultural solutions, technical support, and expert consultation. Visit our offices in Nairobi or reach us by phone, email, or WhatsApp.',
  keywords: 'contact Fedo Agencies, agricultural support Kenya, farming consultation, technical support, Nairobi office',
  openGraph: {
    title: 'Contact Us - Fedo Agencies Limited',
    description: 'Get in touch with our agricultural experts for personalized solutions and support.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
    </div>
  )
}