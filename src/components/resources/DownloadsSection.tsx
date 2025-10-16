'use client'

import { useState } from 'react'
import { Download, FileText, Image, Video, Calendar, Eye, Star } from 'lucide-react'

export default function DownloadsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Downloads', count: 45 },
    { id: 'catalogs', name: 'Product Catalogs', count: 12 },
    { id: 'manuals', name: 'Application Manuals', count: 15 },
    { id: 'guides', name: 'Quick Reference Guides', count: 10 },
    { id: 'videos', name: 'Training Videos', count: 8 }
  ]

  const downloads = [
    {
      id: 1,
      title: 'Complete Product Catalog 2024',
      category: 'catalogs',
      type: 'PDF',
      size: '15.2 MB',
      pages: 120,
      downloads: 5200,
      rating: 4.9,
      description: 'Comprehensive catalog featuring all our agricultural products with detailed specifications, application rates, and pricing.',
      date: '2024-01-15',
      featured: true,
      icon: FileText
    },
    {
      id: 2,
      title: 'Pesticide Application Safety Manual',
      category: 'manuals',
      type: 'PDF',
      size: '8.5 MB',
      pages: 45,
      downloads: 3800,
      rating: 4.8,
      description: 'Essential safety guidelines and best practices for safe pesticide application and handling.',
      date: '2024-01-10',
      icon: FileText
    },
    {
      id: 3,
      title: 'Tomato Farming Quick Guide',
      category: 'guides',
      type: 'PDF',
      size: '2.1 MB',
      pages: 8,
      downloads: 4500,
      rating: 4.7,
      description: 'Quick reference guide for tomato farming including variety selection, planting, and pest management.',
      date: '2024-01-08',
      icon: FileText
    },
    {
      id: 4,
      title: 'IPM Training Video Series',
      category: 'videos',
      type: 'MP4',
      size: '250 MB',
      duration: '45 min',
      downloads: 2100,
      rating: 4.9,
      description: 'Comprehensive video training on Integrated Pest Management strategies for various crops.',
      date: '2024-01-05',
      icon: Video
    },
    {
      id: 5,
      title: 'Fertilizer Application Chart',
      category: 'guides',
      type: 'PDF',
      size: '1.8 MB',
      pages: 4,
      downloads: 3200,
      rating: 4.6,
      description: 'Visual chart showing fertilizer application rates for different crops and growth stages.',
      date: '2024-01-03',
      icon: Image
    },
    {
      id: 6,
      title: 'Herbicide Selection Guide',
      category: 'manuals',
      type: 'PDF',
      size: '6.2 MB',
      pages: 32,
      downloads: 2800,
      rating: 4.5,
      description: 'Detailed guide for selecting the right herbicide based on weed type, crop, and application timing.',
      date: '2023-12-28',
      icon: FileText
    },
    {
      id: 7,
      title: 'Soil Testing Procedures',
      category: 'manuals',
      type: 'PDF',
      size: '4.7 MB',
      pages: 24,
      downloads: 2400,
      rating: 4.4,
      description: 'Step-by-step procedures for conducting soil tests and interpreting results.',
      date: '2023-12-25',
      icon: FileText
    },
    {
      id: 8,
      title: 'Crop Calendar for Kenya',
      category: 'guides',
      type: 'PDF',
      size: '3.1 MB',
      pages: 12,
      downloads: 3600,
      rating: 4.8,
      description: 'Seasonal planting calendar for major crops in different regions of Kenya.',
      date: '2023-12-20',
      icon: Calendar
    }
  ]

  const filteredDownloads = selectedCategory === 'all' 
    ? downloads 
    : downloads.filter(download => download.category === selectedCategory)

  const featuredDownload = downloads.find(download => download.featured)

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return FileText
      case 'MP4': return Video
      case 'JPG':
      case 'PNG': return Image
      default: return FileText
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Downloads Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our library of product catalogs, application manuals, quick reference guides, and training materials.
          </p>
        </div>

        {/* Featured Download */}
        {featuredDownload && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-1" />
                  Featured Download
                </div>
                <h3 className="text-3xl font-bold mb-4">{featuredDownload.title}</h3>
                <p className="text-blue-100 mb-6">{featuredDownload.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold">{featuredDownload.size}</div>
                    <div className="text-blue-200">File Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{featuredDownload.pages} pages</div>
                    <div className="text-blue-200">Content</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{featuredDownload.downloads.toLocaleString()}</div>
                    <div className="text-blue-200">Downloads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{featuredDownload.rating}/5</div>
                    <div className="text-blue-200">Rating</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Now
                  </button>
                  <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Preview
                  </button>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <FileText className="h-24 w-24 text-white/80 mx-auto mb-4" />
                  <div className="text-lg font-semibold">{featuredDownload.type} Document</div>
                  <div className="text-blue-200">{featuredDownload.pages} pages • {featuredDownload.size}</div>
                </div>
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDownloads.filter(download => !download.featured).map((download) => {
            const IconComponent = getFileIcon(download.type)
            return (
              <div key={download.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-600">{download.type}</div>
                      <div className="text-sm text-gray-500">{download.size}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium ml-1">{download.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{download.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{download.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    {download.pages && `${download.pages} pages`}
                    {download.duration && download.duration}
                  </div>
                  <div className="text-sm text-gray-500">
                    {download.downloads.toLocaleString()} downloads
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  Updated: {new Date(download.date).toLocaleDateString()}
                </div>
              </div>
            )
          })}
        </div>

        {/* Download Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Download Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Total Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">25,000+</div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.7/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
              <div className="text-gray-600">New Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}