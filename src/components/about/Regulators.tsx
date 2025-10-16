'use client'

import { regulators } from '@/data/aboutContent'
import { Scale, Shield, FileCheck, Eye } from 'lucide-react'

export default function Regulators() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Regulatory Oversight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our operations are governed by stringent regulatory frameworks that ensure the highest 
            standards of safety, quality, and environmental stewardship. We maintain full compliance 
            with all relevant authorities and industry standards.
          </p>
        </div>

        {/* Regulators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regulators.map((regulator, index) => {
            return (
              <div
                key={regulator.name}
                className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Regulator Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {regulator.name}
                  </h3>
                </div>

                {/* Regulator Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {regulator.fullName}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {regulator.description}
                  </p>
                </div>

                {/* Compliance Badge */}
                <div className="px-6 pb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Fully Compliant
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            )
          })}
        </div>

        {/* Compliance Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Regulatory Compliance
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                Our operations are subject to rigorous oversight by multiple regulatory authorities, 
                ensuring that every aspect of our business meets the highest standards for safety, 
                quality, and environmental responsibility. This comprehensive regulatory framework 
                provides assurance to our customers and stakeholders.
              </p>
              
              {/* Compliance Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Scale className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                  <p className="text-sm text-gray-600">Full adherence to all applicable laws and regulations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regular Audits</h4>
                  <p className="text-sm text-gray-600">Periodic inspections and compliance assessments</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <Eye className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Monitoring</h4>
                  <p className="text-sm text-gray-600">Ongoing compliance monitoring and reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}