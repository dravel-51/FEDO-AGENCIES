import { Search, Calendar, TrendingUp, Users, BookOpen } from 'lucide-react'

export default function NewsHero() {
  const stats = [
    {
      icon: BookOpen,
      value: '200+',
      label: 'Articles Published'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Monthly Readers'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Helpful Content'
    },
    {
      icon: Calendar,
      value: 'Weekly',
      label: 'New Posts'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agricultural News &amp; <span className="text-green-200">Insights</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay informed with the latest agricultural news, expert farming tips, industry trends, and practical advice to help you succeed in modern agriculture.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search articles, farming tips, news, or topics..."
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            'Latest News',
            'Farming Tips',
            'Pest Management',
            'Crop Nutrition',
            'Market Updates',
            'Technology',
            'Success Stories'
          ].map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-100 hover:bg-white/20 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Content Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <IconComponent className="h-8 w-8 text-green-200" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-200 mb-2">{stat.value}</div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}