import { Award, Users, Truck, HeadphonesIcon, Shield, TrendingUp } from 'lucide-react'
import { advantages, companyStats } from '@/data/aboutContent'

export default function WhyDifferent() {

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600 group-hover:bg-green-200",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-200",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-200",
      red: "bg-red-100 text-red-600 group-hover:bg-red-200",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-green-600">Fedo Agencies</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the agricultural solutions industry through our commitment to excellence, innovation, and farmer success. Here's what makes us different.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${getColorClasses(advantage.color)}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-green-100 text-lg">Numbers that speak to our commitment and success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}