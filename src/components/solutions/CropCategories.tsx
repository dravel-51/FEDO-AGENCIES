'use client'

import { useState } from 'react'
import { Carrot, Wheat, Apple, Coffee, Leaf, Droplets } from 'lucide-react'

export default function CropCategories() {
  const [selectedCategory, setSelectedCategory] = useState('vegetables')

  const categories = [
    {
      id: 'vegetables',
      icon: Carrot,
      title: 'Vegetables',
      description: 'Comprehensive solutions for vegetable farming',
      crops: ['Tomatoes', 'Cabbages', 'Kales', 'Spinach', 'Onions', 'Carrots', 'Peppers', 'Cucumbers'],
      color: 'bg-green-50 border-green-200',
      activeColor: 'bg-green-100 border-green-400',
      iconColor: 'text-green-600'
    },
    {
      id: 'cereals',
      icon: Wheat,
      title: 'Cereals',
      description: 'Targeted protection for cereal crops',
      crops: ['Maize', 'Wheat', 'Rice', 'Barley', 'Sorghum', 'Millet'],
      color: 'bg-yellow-50 border-yellow-200',
      activeColor: 'bg-yellow-100 border-yellow-400',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'fruits',
      icon: Apple,
      title: 'Fruits',
      description: 'Specialized care for fruit production',
      crops: ['Mangoes', 'Avocados', 'Citrus', 'Bananas', 'Passion Fruit', 'Grapes', 'Apples'],
      color: 'bg-red-50 border-red-200',
      activeColor: 'bg-red-100 border-red-400',
      iconColor: 'text-red-600'
    },
    {
      id: 'cash-crops',
      icon: Coffee,
      title: 'Cash Crops',
      description: 'Premium solutions for high-value crops',
      crops: ['Coffee', 'Tea', 'Cotton', 'Sugarcane', 'Tobacco', 'Pyrethrum'],
      color: 'bg-purple-50 border-purple-200',
      activeColor: 'bg-purple-100 border-purple-400',
      iconColor: 'text-purple-600'
    }
  ]

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Crop Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your crop type to discover tailored solutions and expert recommendations
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isActive = selectedCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  isActive ? category.activeColor : category.color
                } hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${category.iconColor}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{category.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </button>
            )
          })}
        </div>

        {/* Selected Category Details */}
        {selectedCategoryData && (
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Crop List */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedCategoryData.title} We Support
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCategoryData.crops.map((crop, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <Leaf className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{crop}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Issues & Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Common Challenges &amp; Our Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-red-100 rounded-lg mr-4">
                      <Droplets className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pest Infestations</h4>
                      <p className="text-gray-600 text-sm">Targeted insecticides and biological controls</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4">
                      <Droplets className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Disease Management</h4>
                      <p className="text-gray-600 text-sm">Preventive and curative fungicide programs</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-green-100 rounded-lg mr-4">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Weed Control</h4>
                      <p className="text-gray-600 text-sm">Selective and non-selective herbicide options</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                      <Droplets className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Nutrient Deficiency</h4>
                      <p className="text-gray-600 text-sm">Balanced fertilizer programs and soil amendments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors mr-4">
                View {selectedCategoryData.title} Solutions
              </button>
              <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Download {selectedCategoryData.title} Guide
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}