'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

export default function ProductsHero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'insecticides', label: 'Insecticides' },
    { value: 'fungicides', label: 'Fungicides' },
    { value: 'herbicides', label: 'Herbicides' },
    { value: 'fertilizers', label: 'Fertilizers' },
    { value: 'equipment', label: 'Equipment' }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products &amp; <span className="text-green-200">Services</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive range of high-quality agricultural solutions designed to maximize your crop yields and protect your investments.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name, active ingredient, or target pest..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 mr-2">Quick filters:</span>
              {['Organic', 'Systemic', 'Contact', 'Biological', 'Pre-emergent'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-200 mb-2">200+</div>
            <div className="text-green-100">Quality Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-200 mb-2">50+</div>
            <div className="text-green-100">Trusted Brands</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-200 mb-2">24/7</div>
            <div className="text-green-100">Technical Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-200 mb-2">100%</div>
            <div className="text-green-100">Quality Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}