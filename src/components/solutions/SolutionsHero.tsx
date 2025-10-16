import { Wheat, Apple, Carrot, Coffee } from 'lucide-react'

export default function SolutionsHero() {
  const cropTypes = [
    { icon: Carrot, name: 'Vegetables', count: '25+ Crops' },
    { icon: Wheat, name: 'Cereals', count: '12+ Crops' },
    { icon: Apple, name: 'Fruits', count: '18+ Crops' },
    { icon: Coffee, name: 'Cash Crops', count: '8+ Crops' }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions by <span className="text-emerald-200">Crop</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Get targeted agricultural solutions designed specifically for your crops. Our expert recommendations ensure optimal protection and maximum yields for every crop type.
          </p>
        </div>

        {/* Crop Type Quick Navigation */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {cropTypes.map((crop, index) => {
            const IconComponent = crop.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <IconComponent className="h-8 w-8 text-emerald-200" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{crop.name}</h3>
                <p className="text-emerald-200">{crop.count}</p>
              </div>
            )
          })}
        </div>

        {/* Key Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Crop-Specific Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-200 mb-2">95%</div>
              <div className="text-emerald-100">Success Rate</div>
              <p className="text-sm text-emerald-200 mt-2">Proven effectiveness across all crop types</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-200 mb-2">30+</div>
              <div className="text-emerald-100">Years Experience</div>
              <p className="text-sm text-emerald-200 mt-2">Deep understanding of Kenyan agriculture</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-200 mb-2">24/7</div>
              <div className="text-emerald-100">Expert Support</div>
              <p className="text-sm text-emerald-200 mt-2">Always available when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}