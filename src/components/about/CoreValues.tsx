'use client'

import { coreValues } from '@/data/aboutContent'

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Fedo Agencies Limited, our values guide everything we do. They form the foundation of our commitment to excellence and define how we serve our customers and community.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-orange-500 text-white px-8 py-3 rounded-full text-2xl font-bold tracking-wider">
              <span>G</span>
              <span>R</span>
              <span>O</span>
              <span>W</span>
              <span>T</span>
              <span>H</span>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon
            const colorClasses = {
              green: 'from-green-500 to-green-600 border-green-200',
              blue: 'from-blue-500 to-blue-600 border-blue-200',
              orange: 'from-orange-500 to-orange-600 border-orange-200',
              purple: 'from-purple-500 to-purple-600 border-purple-200',
              indigo: 'from-indigo-500 to-indigo-600 border-indigo-200',
              red: 'from-red-500 to-red-600 border-red-200'
            }

            return (
              <div
                key={value.letter}
                className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Card Header with Letter */}
                <div className={`bg-gradient-to-r ${colorClasses[value.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[value.color as keyof typeof colorClasses].split(' ')[1]} p-6 text-center`}>
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">
                      {value.letter}
                    </span>
                  </div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`h-1 bg-gradient-to-r ${colorClasses[value.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[value.color as keyof typeof colorClasses].split(' ')[1]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Growing Together
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              These values aren&apos;t just words on a wall – they&apos;re the principles that drive our daily operations, 
              guide our decision-making, and shape our relationships with customers, partners, and communities. 
              When you choose Fedo Agencies Limited, you&apos;re partnering with a company that truly lives its values.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}