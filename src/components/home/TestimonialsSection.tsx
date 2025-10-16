'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Quote, TrendingUp, ArrowRight } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Samuel Kiprotich',
      title: 'Coffee Farmer, Kericho County',
      testimonial: 'Fedo Agencies transformed my coffee farm! Their premium fertilizers and expert guidance increased my yield by 40% this season. The technical support team visited my farm and provided personalized advice that made all the difference.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=kenyan%20coffee%20farmer%20middle%20aged%20man%20outdoor%20farm%20setting%20confident%20smile%20agricultural%20background&image_size=square',
      crop: 'Coffee',
      result: '40% yield increase'
    },
    {
      id: 2,
      name: 'Grace Wanjiku',
      title: 'Vegetable Farmer, Kiambu County',
      testimonial: 'The fungicides from Fedo saved my tomato crop from late blight disease. Their timely delivery and quality products helped me achieve the best harvest in 5 years. I now supply to major supermarkets in Nairobi!',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=kenyan%20female%20farmer%20tomato%20greenhouse%20professional%20agricultural%20setting%20confident%20smile&image_size=square',
      crop: 'Tomatoes',
      result: 'Best harvest in 5 years'
    },
    {
      id: 3,
      name: 'Peter Mwangi',
      title: 'Maize Farmer, Nakuru County',
      testimonial: 'Fedo\'s herbicides and pest control solutions helped me manage my 50-acre maize farm efficiently. Their training programs taught me sustainable farming practices that reduced costs by 30% while increasing productivity.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=kenyan%20male%20farmer%20maize%20field%20agricultural%20setting%20professional%20outdoor%20confident&image_size=square',
      crop: 'Maize',
      result: '30% cost reduction'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-start space-x-4">
            {/* Arrow Icon */}
            <div className="mt-2">
              <TrendingUp className="h-8 w-8 text-green-600 transform rotate-12" strokeWidth={3} />
            </div>
            
            {/* Title and Subtitle */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Farmer Success Stories:
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-green-600">
                Growing Together, Harvesting Success
              </p>
            </div>
          </div>

          {/* View All Button */}
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            <span>View all</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-green-800 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-400" fill="currentColor" />
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-base leading-relaxed mb-6">
                {testimonial.testimonial}
              </p>

              {/* Result Badge */}
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.result}
                </span>
                <span className="inline-block bg-green-700 text-green-200 text-xs font-medium px-3 py-1 rounded-full ml-2">
                  {testimonial.crop}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-green-200 text-xs">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Trusted by over 10,000+ farmers across Kenya
          </p>
          <div className="flex justify-center items-center space-x-8 text-green-600 font-semibold text-sm">
            <span>✓ 25+ Years Experience</span>
            <span>✓ Premium Quality Products</span>
            <span>✓ Expert Technical Support</span>
            <span>✓ Nationwide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection