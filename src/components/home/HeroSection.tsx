'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Search, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const HeroSection = () => {
  const [imageError, setImageError] = useState(false)
  
  const searchSuggestions = [
    'Could be:', 'Maize', 'Fall Armyworm', 'Tuta', 'Blossom End Rot', 'Thrips', 'Profile',
    'Taurus', 'Chariot',
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="text-green-600 font-medium text-lg">
              Know-how for your Agribusiness
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Achieve more when farming with us!
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Here at Fedo Agencies, we offer farmers of Kenya 
                support to grow their know-how, market, and capital bases.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2 transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
                <span>Ask us a question</span>
              </button>
              <Link href="/products" className="bg-green-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2 transition-colors duration-300">
                <span>Discover our products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Search Section */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What could you be looking for?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              
              {/* Search Suggestions */}
              <div className="flex flex-wrap gap-2">
                {searchSuggestions.map((suggestion, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors ${
                      index === 0 
                        ? 'text-gray-600 font-medium' 
                        : 'text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {suggestion}
                    {index < searchSuggestions.length - 1 && index !== 0 && ','}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-full flex items-center justify-center">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-20 h-20 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-orange-100 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-green-200 rounded-full opacity-30"></div>
            </div>
            
            <div className="relative w-full max-w-lg lg:max-w-none z-10">
              {!imageError ? (
                <div className="relative aspect-[4/3] w-full h-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-100/50" style={{ minHeight: '300px' }}>
                  <Image
                    src="/assets/asset_cowshed.webp"
                    alt="Modern cowshed with dairy cattle"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    onError={() => setImageError(true)}
                    onLoad={() => console.log('Hero image loaded successfully')}
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full opacity-80"></div>
                </div>
              ) : (
                <div className="aspect-[4/3] w-full h-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200/50" style={{ minHeight: '300px' }}>
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🌱</div>
                    <p className="font-medium">Agricultural Excellence</p>
                    <p className="text-sm">Image loading...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
