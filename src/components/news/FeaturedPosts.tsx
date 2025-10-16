import { Calendar, User, ArrowRight, Clock, Eye } from 'lucide-react'

export default function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Revolutionary IPM Strategies Boost Tomato Yields by 40% in Central Kenya',
      excerpt: 'New integrated pest management techniques are helping farmers achieve unprecedented tomato yields while reducing pesticide use by 60%.',
      author: 'Dr. Sarah Wanjiku',
      date: '2024-01-15',
      readTime: '8 min',
      views: 2500,
      category: 'Success Stories',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20farming%20success%20story%20Kenya%20agricultural%20innovation&image_size=landscape_16_9',
      featured: true
    },
    {
      id: 2,
      title: 'Climate-Smart Agriculture: Adapting to Changing Weather Patterns',
      excerpt: 'Learn how Kenyan farmers are using climate-smart techniques to maintain productivity despite unpredictable weather conditions.',
      author: 'Prof. James Mwangi',
      date: '2024-01-12',
      readTime: '12 min',
      views: 1800,
      category: 'Climate Change',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=climate%20smart%20agriculture%20Kenya%20weather%20adaptation%20farming&image_size=landscape_16_9'
    },
    {
      id: 3,
      title: 'New Maize Varieties Show 30% Higher Resistance to Fall Armyworm',
      excerpt: 'Research reveals promising new maize varieties that offer natural resistance to fall armyworm while maintaining high yields.',
      author: 'Mary Njeri',
      date: '2024-01-10',
      readTime: '6 min',
      views: 2200,
      category: 'Research',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=maize%20varieties%20fall%20armyworm%20resistance%20agricultural%20research&image_size=landscape_16_9'
    }
  ]

  const mainFeatured = featuredPosts[0]
  const secondaryFeatured = featuredPosts.slice(1)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs, success stories, and expert insights shaping the future of agriculture in Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Featured Post */}
          <div className="lg:col-span-1">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={mainFeatured.image}
                  alt={mainFeatured.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                    {mainFeatured.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {mainFeatured.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mainFeatured.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{mainFeatured.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(mainFeatured.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{mainFeatured.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{mainFeatured.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold inline-flex items-center justify-center">
                  Read Full Story
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </article>
          </div>

          {/* Secondary Featured Posts */}
          <div className="lg:col-span-1 space-y-6">
            {secondaryFeatured.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center">
                        Read
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Fall Armyworm Control',
              'Drought-Resistant Crops',
              'Organic Farming',
              'Soil Health',
              'Market Prices',
              'Climate Change',
              'IPM Strategies',
              'Fertilizer Application',
              'Post-Harvest Handling',
              'Crop Insurance'
            ].map((topic, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors text-sm font-medium"
              >
                #{topic.replace(/\s+/g, '')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}