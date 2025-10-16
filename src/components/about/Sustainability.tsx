'use client'

import { sustainabilityCommitments } from '@/data/aboutContent'
import { Leaf, Globe } from 'lucide-react'

export default function Sustainability() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainability Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that sustainable agriculture is the key to feeding the world while protecting our planet. 
            Our commitment to environmental stewardship guides every aspect of our operations and product offerings.
          </p>
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sustainabilityCommitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg border-2 border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Commitment Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {commitment.title}
                  </h3>
                </div>

                {/* Commitment Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            )
          })}
        </div>

        {/* Environmental Impact Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Environmental Promise
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Fedo Agencies Limited, we recognize that the health of our planet is directly linked 
                to the success of agriculture. That's why we're committed to promoting sustainable farming 
                practices that protect the environment while ensuring food security for future generations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Eco-friendly Products:</strong> We prioritize products that minimize environmental impact
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Farmer Education:</strong> Training programs on sustainable farming practices
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Research Investment:</strong> Supporting development of sustainable agricultural solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Sustainable Future
                </h4>
                <p className="text-gray-700">
                  Working together for a greener, more sustainable agricultural sector that benefits 
                  farmers, consumers, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Us in Building a Sustainable Future
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Together, we can create an agricultural system that feeds the world while protecting 
              our planet for future generations. Partner with us in promoting sustainable farming practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">Sustainable Products</span>
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">Eco-friendly Practices</span>
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">Environmental Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}