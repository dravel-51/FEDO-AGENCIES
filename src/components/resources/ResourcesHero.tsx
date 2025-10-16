import { BookOpen, Search, Download, HelpCircle, Users, Award } from 'lucide-react'

export default function ResourcesHero() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Educational Guides',
      count: '50+ Guides',
      description: 'Comprehensive farming guides and best practices'
    },
    {
      icon: Search,
      title: 'Pest ID Guide',
      count: '200+ Pests',
      description: 'Visual identification and control methods'
    },
    {
      icon: Download,
      title: 'Downloads',
      count: '30+ Resources',
      description: 'Catalogs, manuals, and reference materials'
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      count: '100+ Questions',
      description: 'Answers to common agricultural questions'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge <span className="text-blue-200">Center</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access our comprehensive library of agricultural resources, expert guides, and educational materials to enhance your farming knowledge and success.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <IconComponent className="h-8 w-8 text-blue-200" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-blue-200 font-medium mb-2">{category.count}</p>
                <p className="text-blue-100 text-sm">{category.description}</p>
              </div>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search guides, pest identification, FAQs, or download materials..."
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Knowledge Base Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-200 mb-2">10,000+</div>
              <div className="text-blue-100">Farmers Educated</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-200 mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-200 mb-2">15+</div>
              <div className="text-blue-100">Years of Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}