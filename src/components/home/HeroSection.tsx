'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Plus } from 'lucide-react'
import { useState } from 'react'

// Wavy Border SVG Components
const LeftWavyBorder = () => (
  <svg
    className="absolute left-0 top-0 h-full w-16 lg:w-24 z-10"
    viewBox="0 0 100 800"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0 Q20 40 15 80 Q25 120 10 160 Q30 200 20 240 Q35 280 15 320 Q25 360 20 400 Q30 440 15 480 Q35 520 25 560 Q20 600 30 640 Q15 680 25 720 Q35 760 20 800 L0 800 Z"
      fill="#0f3d2f"
      fillOpacity="0.9"
    />
  </svg>
)

const RightWavyBorder = () => (
  <svg
    className="absolute right-0 top-0 h-full w-16 lg:w-24 z-10"
    viewBox="0 0 100 800"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 0 Q80 40 85 80 Q75 120 90 160 Q70 200 80 240 Q65 280 85 320 Q75 360 80 400 Q70 440 85 480 Q65 520 75 560 Q80 600 70 640 Q85 680 75 720 Q65 760 80 800 L100 800 Z"
      fill="#0f3d2f"
      fillOpacity="0.9"
    />
  </svg>
)

// Decorative Elements Component
const DecorativeElements = () => (
  <>
    {/* Floating Stars */}
    <div className="absolute top-20 left-10 text-blue-300 opacity-60 animate-pulse">
      <Star className="h-6 w-6 fill-current" />
    </div>
    <div className="absolute top-32 right-20 text-green-300 opacity-50 animate-pulse delay-1000">
      <Plus className="h-8 w-8" />
    </div>
    <div className="absolute bottom-40 left-16 text-purple-300 opacity-40 animate-pulse delay-2000">
      <Star className="h-5 w-5 fill-current" />
    </div>
    <div className="absolute top-60 right-32 text-blue-400 opacity-50 animate-pulse delay-500">
      <Plus className="h-6 w-6" />
    </div>
    <div className="absolute bottom-60 right-10 text-green-400 opacity-60 animate-pulse delay-1500">
      <Star className="h-4 w-4 fill-current" />
    </div>
    <div className="absolute top-80 left-32 text-purple-400 opacity-40 animate-pulse delay-3000">
      <Plus className="h-7 w-7" />
    </div>
  </>
)

// Statistics Bar Component
const StatisticsBar = () => (
  <div className="bg-white py-8 px-6 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl lg:text-4xl font-bold text-gray-900">5,000+</div>
          <div className="text-gray-600 font-medium">Satisfied Farmers</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl lg:text-4xl font-bold text-gray-900">10+</div>
          <div className="text-gray-600 font-medium">Premium Products</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl lg:text-4xl font-bold text-gray-900">26+</div>
          <div className="text-gray-600 font-medium">Years of Excellence</div>
        </div>
      </div>
    </div>
  </div>
)

// Image Grid Component
const ImageGrid = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }))
  }

  const images = [
    {
      key: 'image1',
      src: '/assets/hero-1.webp',
      alt: 'Professional farmer working in green agricultural field',
      className: 'rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'
    },
    {
      key: 'image2', 
      src: '/assets/hero-2.webp',
      alt: 'Modern agricultural equipment and tractor in action',
      className: 'rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'
    },
    {
      key: 'image3',
      src: '/assets/hero-3.webp',
      alt: 'Successful crop harvest and farming operations',
      className: 'rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 col-span-2'
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
      {images.map((image, index) => (
        <div key={image.key} className={image.className}>
          {!imageErrors[image.key] ? (
            <div className="relative w-full h-full min-h-[200px] lg:min-h-[250px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${image.key === 'image3' ? 'object-center' : 'object-cover'}`}
                style={image.key === 'image3' ? { objectPosition: 'center center' } : {}}
                sizes="(max-width: 768px) 50vw, 25vw"
                onError={() => handleImageError(image.key)}
                priority={index === 0}
              />
            </div>
          ) : (
            <div className="w-full h-full min-h-[200px] lg:min-h-[250px] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-center text-green-600">
                <div className="text-4xl mb-2">
                  {index === 0 ? '🌾' : index === 1 ? '🚜' : '🌱'}
                </div>
                <p className="font-medium text-sm">Agricultural Excellence</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

interface HeroSectionProps {
  eyebrowText?: string
  mainHeading?: string
  descriptionText?: string
  buttonText?: string
  buttonLink?: string
  primaryColor?: string
  accentColor?: string
}

const HeroSection = ({
  eyebrowText = "Agricultural Excellence Since 1985",
  mainHeading = "Empowering Farmers with Premium Solutions",
  descriptionText = "Fedo Agency provides comprehensive agricultural solutions, from high-quality herbicides and pesticides to expert farming consultation. We're committed to enhancing crop yields and supporting sustainable farming practices across Kenya.",
  buttonText = "Explore Products",
  buttonLink = "/products",
  primaryColor = "#1a4d3e",
  accentColor = "#f59e0b"
}: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <DecorativeElements />
        
        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Panel */}
            <div className="space-y-6 lg:space-y-8">
              {/* Eyebrow Text */}
              <div className="text-gray-600 font-semibold text-lg lg:text-xl">
                {eyebrowText}
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                {mainHeading}
              </h1>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                {descriptionText}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={buttonLink}
                  className={`inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                    isHovered ? 'bg-blue-700' : 'bg-blue-600'
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="text-lg">{buttonText}</span>
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                >
                  <span className="text-lg">Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative">
              <ImageGrid />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <StatisticsBar />
    </>
  )
}

export default HeroSection
