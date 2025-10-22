import { Target, Eye, Heart, Lightbulb } from 'lucide-react'
import { companyInfo } from '@/data/aboutContent'

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission &amp; Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission and vision statements define our purpose and aspirations, guiding us toward a future where agriculture thrives sustainably.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* Mission & Vision Impact */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Driving Agricultural Excellence
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Our mission and vision are not just statements – they are the driving force behind every decision we make, 
              every product we offer, and every relationship we build. Together, they guide us toward creating a more 
              prosperous and sustainable agricultural future for Kenya.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Purpose-Driven</h4>
                <p className="text-sm text-gray-600">Every action aligned with our mission</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Future-Focused</h4>
                <p className="text-sm text-gray-600">Working toward our vision every day</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact-Oriented</h4>
                <p className="text-sm text-gray-600">Creating meaningful change in agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}