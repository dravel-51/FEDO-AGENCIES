'use client'

import { partnerships } from '@/data/aboutContent'
import { Users2, Building2, Users, Heart } from 'lucide-react'

export default function PartnersAssociations() {
  const categoryConfig = {
    industry: {
      title: 'Industry Associations',
      description: 'Professional organizations that set industry standards and best practices',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    strategic: {
      title: 'Strategic Partners',
      description: 'Global partners providing cutting-edge solutions and technologies',
      icon: Users2,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    community: {
      title: 'Community Partners',
      description: 'Local organizations focused on agricultural development and empowerment',
      icon: Heart,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partners &amp; Associations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our success is built on strong partnerships and active participation in industry associations. 
            These relationships enable us to stay at the forefront of agricultural innovation and maintain 
            the highest standards of service delivery.
          </p>
        </div>

        {/* Partnership Categories */}
        <div className="space-y-16">
          {Object.entries(partnerships).map(([categoryKey, partners]) => {
            const config = categoryConfig[categoryKey as keyof typeof categoryConfig]
            const IconComponent = config.icon

            return (
              <div key={categoryKey} className="relative">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${config.bgColor} rounded-2xl p-8 mb-8`}>
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {config.title}
                      </h3>
                      <p className="text-gray-700">
                        {config.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                              {partner.name || (partner as any).fullName}
                            </h4>
                            {(partner as any).fullName && partner.name !== (partner as any).fullName && (
                              <p className="text-sm font-medium text-gray-500 mb-2">
                                {(partner as any).fullName}
                              </p>
                            )}
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {partner.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`h-1 bg-gradient-to-r ${config.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stronger Together
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Our extensive network of partnerships and associations ensures that we remain connected 
                to the latest developments in agriculture, maintain access to cutting-edge technologies, 
                and continue to serve our customers with the best possible solutions.
              </p>
            </div>

            {/* Partnership Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {partnerships.industry.length}+
                </h4>
                <p className="text-gray-600">Industry Associations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {partnerships.strategic.length}+
                </h4>
                <p className="text-gray-600">Strategic Partners</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {partnerships.community.length}+
                </h4>
                <p className="text-gray-600">Community Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}