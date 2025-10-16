import { Bug, Shield, Leaf, Zap, Wrench, Droplets } from 'lucide-react'

export default function ProductCategories() {
  const categories = [
    {
      icon: Bug,
      title: 'Insecticides',
      description: 'Effective pest control solutions for all crop types',
      products: '45+ Products',
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Fungicides',
      description: 'Disease prevention and treatment for healthy crops',
      products: '38+ Products',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Herbicides',
      description: 'Weed control solutions for clean fields',
      products: '32+ Products',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Fertilizers',
      description: 'Nutrient solutions for optimal plant growth',
      products: '28+ Products',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Droplets,
      title: 'Adjuvants',
      description: 'Enhance the effectiveness of your applications',
      products: '15+ Products',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Wrench,
      title: 'Equipment',
      description: 'Professional application and farming equipment',
      products: '25+ Products',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      iconColor: 'text-gray-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of agricultural solutions organized by category
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${category.color}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${category.iconColor}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.products}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  View Products →
                </button>
              </div>
            )
          })}
        </div>

        {/* Featured Brands */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Bayer', 'Syngenta', 'BASF', 'Corteva', 'FMC', 'UPL'].map((brand) => (
              <div key={brand} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-gray-600 font-medium">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}