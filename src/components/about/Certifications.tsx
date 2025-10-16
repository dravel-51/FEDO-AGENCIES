'use client'

import { certifications } from '@/data/aboutContent'
import { Award } from 'lucide-react'

export default function Certifications() {
  const categoryColors = {
    regulatory: 'from-blue-500 to-blue-600 border-blue-200',
    quality: 'from-green-500 to-green-600 border-green-200',
    workplace: 'from-purple-500 to-purple-600 border-purple-200',
    environmental: 'from-emerald-500 to-emerald-600 border-emerald-200'
  }

  const categoryLabels = {
    regulatory: 'Regulatory Compliance',
    quality: 'Quality Management',
    workplace: 'Workplace Excellence',
    environmental: 'Environmental Standards'
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We're Certified!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications demonstrate our unwavering commitment to quality, safety, and excellence. 
            These credentials ensure that every product and service we provide meets the highest industry standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            const colorClass = categoryColors[cert.category]
            
            return (
              <div
                key={cert.name}
                className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Certification Header */}
                <div className={`bg-gradient-to-r ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} p-6 text-center relative`}>
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-white">
                      {categoryLabels[cert.category]}
                    </span>
                  </div>
                </div>

                {/* Certification Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {cert.fullName}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`h-1 bg-gradient-to-r ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            )
          })}
        </div>

        {/* Trust Message */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 border border-green-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Farmers, Certified by Authorities
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our comprehensive certifications reflect our dedication to maintaining the highest standards 
              in everything we do. From regulatory compliance to environmental responsibility, we ensure 
              that our operations meet and exceed industry requirements, giving you confidence in every 
              product and service we provide.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <span
                  key={key}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors].split(' ')[0]} ${categoryColors[key as keyof typeof categoryColors].split(' ')[1]}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}