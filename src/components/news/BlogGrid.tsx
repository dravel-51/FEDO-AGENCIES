'use client'

import { useState } from 'react'
import { Calendar, User, Clock, Eye, ArrowRight, Filter } from 'lucide-react'

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const categories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'farming-tips', name: 'Farming Tips', count: 15 },
    { id: 'pest-management', name: 'Pest Management', count: 12 },
    { id: 'market-updates', name: 'Market Updates', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'success-stories', name: 'Success Stories', count: 4 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Successful Tomato Farming in Kenya',
      excerpt: 'Master the art of tomato cultivation with these proven techniques that can increase your yields by up to 50%.',
      author: 'John Ochieng',
      date: '2024-01-14',
      readTime: '7 min',
      views: 1200,
      category: 'farming-tips',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20farming%20tips%20Kenya%20agricultural%20guide&image_size=landscape_4_3',
      tags: ['Tomatoes', 'Vegetables', 'Yield Optimization']
    },
    {
      id: 2,
      title: 'Understanding Fall Armyworm: Identification and Control Strategies',
      excerpt: 'Learn to identify fall armyworm early and implement effective control measures to protect your maize crop.',
      author: 'Dr. Grace Mutua',
      date: '2024-01-13',
      readTime: '10 min',
      views: 1800,
      category: 'pest-management',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=fall%20armyworm%20identification%20control%20maize%20pest%20management&image_size=landscape_4_3',
      tags: ['Fall Armyworm', 'Maize', 'IPM']
    },
    {
      id: 3,
      title: 'Weekly Market Report: Vegetable Prices Show Upward Trend',
      excerpt: 'Current market analysis shows increasing demand for quality vegetables with premium prices for certified organic produce.',
      author: 'Peter Kimani',
      date: '2024-01-12',
      readTime: '5 min',
      views: 950,
      category: 'market-updates',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=vegetable%20market%20prices%20Kenya%20agricultural%20economics&image_size=landscape_4_3',
      tags: ['Market Prices', 'Vegetables', 'Economics']
    },
    {
      id: 4,
      title: 'Smart Irrigation: How Technology is Revolutionizing Water Management',
      excerpt: 'Discover how smart irrigation systems are helping farmers save water while maintaining optimal crop growth.',
      author: 'Sarah Wanjiku',
      date: '2024-01-11',
      readTime: '8 min',
      views: 1400,
      category: 'technology',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20irrigation%20technology%20water%20management%20agriculture&image_size=landscape_4_3',
      tags: ['Irrigation', 'Technology', 'Water Management']
    },
    {
      id: 5,
      title: 'From 2 to 20 Acres: A Farmer\'s Journey to Success',
      excerpt: 'Follow the inspiring story of Mary Njoki who transformed her small plot into a thriving commercial farm.',
      author: 'James Mwangi',
      date: '2024-01-10',
      readTime: '12 min',
      views: 2100,
      category: 'success-stories',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=farmer%20success%20story%20Kenya%20agricultural%20transformation&image_size=landscape_4_3',
      tags: ['Success Story', 'Scaling', 'Inspiration']
    },
    {
      id: 6,
      title: 'Soil Health 101: Building Fertile Ground for Better Crops',
      excerpt: 'Understanding soil composition and implementing practices to improve soil health for sustainable farming.',
      author: 'Dr. Anne Wambui',
      date: '2024-01-09',
      readTime: '9 min',
      views: 1600,
      category: 'farming-tips',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=soil%20health%20testing%20fertile%20ground%20agriculture&image_size=landscape_4_3',
      tags: ['Soil Health', 'Sustainability', 'Crop Nutrition']
    },
    {
      id: 7,
      title: 'Integrated Pest Management: A Holistic Approach to Crop Protection',
      excerpt: 'Learn how IPM combines biological, cultural, and chemical methods for effective and sustainable pest control.',
      author: 'Michael Omondi',
      date: '2024-01-08',
      readTime: '11 min',
      views: 1300,
      category: 'pest-management',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=integrated%20pest%20management%20IPM%20sustainable%20agriculture&image_size=landscape_4_3',
      tags: ['IPM', 'Sustainability', 'Crop Protection']
    },
    {
      id: 8,
      title: 'Coffee Market Outlook: Opportunities for Kenyan Farmers',
      excerpt: 'Analysis of global coffee trends and how Kenyan farmers can capitalize on premium market opportunities.',
      author: 'Lucy Wanjiru',
      date: '2024-01-07',
      readTime: '6 min',
      views: 1100,
      category: 'market-updates',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=coffee%20market%20outlook%20Kenya%20agricultural%20economics&image_size=landscape_4_3',
      tags: ['Coffee', 'Market Analysis', 'Export']
    },
    {
      id: 9,
      title: 'Precision Agriculture: Using Data to Optimize Farm Performance',
      excerpt: 'How GPS, sensors, and data analytics are helping farmers make informed decisions for better yields.',
      author: 'David Kiprotich',
      date: '2024-01-06',
      readTime: '10 min',
      views: 1700,
      category: 'technology',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=precision%20agriculture%20GPS%20sensors%20data%20analytics&image_size=landscape_4_3',
      tags: ['Precision Agriculture', 'Data Analytics', 'GPS']
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'popular':
        return b.views - a.views
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default:
        return 0
    }
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights and practical advice for modern farming
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="mt-6 lg:mt-0">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="latest">Latest First</option>
                <option value="popular">Most Popular</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                    Read
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
            Load More Articles
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Tomatoes', 'Maize', 'Fall Armyworm', 'IPM', 'Soil Health',
              'Irrigation', 'Market Prices', 'Organic Farming', 'Fertilizers',
              'Pest Control', 'Climate Change', 'Technology', 'Success Stories',
              'Crop Nutrition', 'Post Harvest', 'Training'
            ].map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors text-sm font-medium border border-gray-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
