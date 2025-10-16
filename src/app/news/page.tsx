import type { Metadata } from 'next'
import NewsHero from '@/components/news/NewsHero'
import FeaturedPosts from '@/components/news/FeaturedPosts'
import BlogGrid from '@/components/news/BlogGrid'
import NewsletterSignup from '@/components/news/NewsletterSignup'

export const metadata: Metadata = {
  title: 'News & Blog - Fedo Agencies Limited | Agricultural News & Insights',
  description: 'Stay updated with the latest agricultural news, farming tips, industry insights, and expert advice from Fedo Agencies Limited.',
  keywords: 'agricultural news Kenya, farming blog, crop management tips, pest control news, fertilizer updates, agricultural insights',
  openGraph: {
    title: 'News & Blog - Fedo Agencies Limited',
    description: 'Latest agricultural news, farming tips, and expert insights for successful farming.',
    url: '/news',
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <NewsHero />
      <FeaturedPosts />
      <BlogGrid />
      <NewsletterSignup />
    </div>
  )
}