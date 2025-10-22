'use client'

import { useState } from 'react'
import { BookOpen, Clock, User, ArrowRight, Star, Download } from 'lucide-react'
import Image from 'next/image'

export default function EducationalGuides() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Guides', count: 50 },
    { id: 'crop-management', name: 'Crop Management', count: 15 },
    { id: 'pest-control', name: 'Pest Control', count: 12 },
    { id: 'soil-health', name: 'Soil Health', count: 8 },
    { id: 'irrigation', name: 'Irrigation', count: 7 },
    { id: 'post-harvest', name: 'Post-Harvest', count: 8 }
  ]

  const guides = [
    {
      id: 1,
      title: 'Complete Guide to Tomato Farming in Kenya',
      category: 'crop-management',
      description: 'Comprehensive guide covering variety selection, planting, pest management, and harvesting for maximum tomato yields.',
      author: 'Dr. James Mwangi',
      readTime: '15 min',
      rating: 4.9,
      downloads: 2500,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20farming%20guide%20book%20cover%20agricultural%20education%20Kenya&image_size=landscape_4_3',
      featured: true
    },
    {
      id: 2,
      title: 'Integrated Pest Management for Maize',
      category: 'pest-control',
      description: 'Learn effective IPM strategies to protect your maize crop from common pests while maintaining environmental sustainability.',
      author: 'Sarah Wanjiku',
      readTime: '12 min',
      rating: 4.8,
      downloads: 1800,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=maize%20pest%20management%20agricultural%20guide%20Kenya%20farming&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: 'Soil Testing and Nutrient Management',
      category: 'soil-health',
      description: 'Understanding soil health, conducting tests, and developing nutrient management plans for optimal crop production.',
      author: 'Prof. Peter Kimani',
      readTime: '18 min',
      rating: 4.7,
      downloads: 1600,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=soil%20testing%20nutrient%20management%20agricultural%20guide%20Kenya&image_size=landscape_4_3'
    },
    {
      id: 4,
      title: 'Water-Efficient Irrigation Techniques',
      category: 'irrigation',
      description: 'Modern irrigation methods to maximize water efficiency and reduce costs while maintaining crop productivity.',
      author: 'Mary Njeri',
      readTime: '10 min',
      rating: 4.6,
      downloads: 1400,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=irrigation%20techniques%20water%20efficient%20farming%20Kenya%20agriculture&image_size=landscape_4_3'
    },
    {
      id: 5,
      title: 'Post-Harvest Handling for Vegetables',
      category: 'post-harvest',
      description: 'Best practices for handling, storing, and packaging vegetables to minimize losses and maintain quality.',
      author: 'John Ochieng',
      readTime: '14 min',
      rating: 4.5,
      downloads: 1200,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=post%20harvest%20vegetable%20handling%20storage%20Kenya%20agriculture&image_size=landscape_4_3'
    },
    {
      id: 6,
      title: 'Organic Farming Certification Process',
      category: 'crop-management',
      description: 'Step-by-step guide to obtaining organic certification and transitioning to organic farming practices.',
      author: 'Grace Mutua',
      readTime: '16 min',
      rating: 4.4,
      downloads: 1000,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=organic%20farming%20certification%20guide%20Kenya%20agriculture&image_size=landscape_4_3'
    }
  ]

  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory)

  const featuredGuide = guides.find(guide => guide.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-written guides covering all aspects of modern agriculture, from crop management to post-harvest handling.
          </p>
        </div>

        {/* Featured Guide */}
        {featuredGuide && (
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-1" />
                  Featured Guide
                </div>
                <h3 className="text-3xl font-bold mb-4">{featuredGuide.title}</h3>
                <p className="text-green-100 mb-6">{featuredGuide.description}</p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span>{featuredGuide.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{featuredGuide.readTime} read</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    <span>{featuredGuide.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Read Guide
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
              <div className="lg:text-right">
                <Image
                  src={featuredGuide.image}
                  alt={featuredGuide.title}
                  width={400}
                  height={300}
                  className="rounded-xl shadow-2xl w-full max-w-md ml-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.filter(guide => !guide.featured).map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src={guide.image}
                alt={guide.title}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium ml-1">{guide.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 ml-2">{guide.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>{guide.author}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{guide.readTime}</span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                    Read
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Load More Guides
          </button>
        </div>
      </div>
    </section>
  )
}