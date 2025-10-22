'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

// Product data with image references
const productImages = [
  {
    key: 'alphago',
    src: '/assets/alphago.webp',
    alt: 'AlphaGo 200SC - Broad-spectrum insecticide for effective pest control',
    className: 'object-contain'
  },
  {
    key: 'diazole',
    src: '/assets/diazole.webp',
    alt: 'Diazole - Selective herbicide for targeted weed control',
    className: 'object-contain'
  },
  {
    key: 'alphashield',
    src: '/assets/alphashield.webp',
    alt: 'AlphaShield - Insecticidal spray for comprehensive pest management',
    className: 'object-contain'
  },
  {
    key: 'faida',
    src: '/assets/faida milking jelly.webp',
    alt: 'Faida Milking Jelly - Premium insecticide solution for livestock protection',
    className: 'object-contain'
  }
]

// Product data
const products = [
  {
    id: 1,
    name: 'AlphaGo 200SC',
    price: 'KSh 1,200',
    imageKey: 'alphago',
    features: [
      'Broad-spectrum insecticide',
      'Controls Aphids, Whiteflies, Borer',
      'Bollworms',
      'Best for Edible crops',
      'Contains Imidacloprid'
    ]
  },
  {
    id: 2,
    name: 'Diazole',
    price: 'KSh 950',
    imageKey: 'diazole',
    features: [
      'Selective herbicide',
      'Targets Annual Broadleaf,',
      'Grass Weeds',
      'Best for Maize, Sweet Corn',
      'Contains Acetochlor, Atrazine'
    ]
  },
  {
    id: 3,
    name: 'AlphaShield',
    price: 'KSh 800',
    imageKey: 'alphashield',
    features: [
      'Insecticidal spray',
      'Targets Leafminers,',
      'Aphids, Termites,',
      'Root-knot nematode',
      'Best for Edible crops'
    ]
  },
  {
    id: 4,
    name: 'Faida Milking Jelly',
    price: 'KSh 1,100',
    imageKey: 'faida',
    features: [
      'Insecticide',
      'Targets Boll and pest, Bollworms',
      'Caterpillar',
      'Best for Edible crops',
      'Contains Inedible crops'
    ]
  }
]

// Product Card Component
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [imageError, setImageError] = useState(false)
  
  const handleImageError = () => {
    setImageError(true)
  }

  // Find the corresponding image data
  const imageData = productImages.find(img => img.key === product.imageKey)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex h-full">
        {/* Product Image - Left Side (50% width) */}
        <div className="w-1/2 relative bg-gray-50 flex items-center justify-center p-4">
          {!imageError && imageData ? (
            <div className="relative w-full h-48 lg:h-56">
              <Image
                src={imageData.src}
                alt={imageData.alt}
                width={400}
                height={300}
                className={`w-full h-full ${imageData.className}`}
                onError={handleImageError}
              />
            </div>
          ) : (
            <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center rounded-md">
              <div className="text-center text-green-600">
                <div className="text-4xl mb-2">🧪</div>
                <p className="font-medium text-sm">Product</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Details - Right Side (50% width) */}
        <div className="w-1/2 p-4 lg:p-6 flex flex-col justify-between">
          {/* Product Name */}
          <div>
            <h3 className="font-bold text-lg lg:text-xl text-gray-900 mb-3">
              {product.name}
            </h3>

            {/* Features with Green Checkmarks */}
            <ul className="space-y-1 mb-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Button */}
          <div className="space-y-3">
            <div className="text-xl lg:text-2xl font-bold text-gray-900">
              {product.price}
            </div>
            
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200"
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main ProductsOverview Component
const ProductsOverview = () => {
  return (
    <section className="bg-gray-200 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview