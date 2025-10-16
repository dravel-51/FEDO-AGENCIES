import { Users, BookOpen, Headphones, Truck, TestTube, Calendar } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'Technical Consultation',
      description: 'Expert agronomist consultation for crop protection strategies and pest management solutions.',
      features: ['One-on-one consultation', 'Field visits', 'Customized recommendations', 'Follow-up support'],
      price: 'Free with purchase'
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Comprehensive training on proper application techniques, safety protocols, and best practices.',
      features: ['Group training sessions', 'Hands-on demonstrations', 'Certification programs', 'Digital resources'],
      price: 'KSh 2,500/person'
    },
    {
      icon: TestTube,
      title: 'Soil &amp; Water Testing',
      description: 'Professional analysis of soil nutrients and water quality to optimize your farming inputs.',
      features: ['Nutrient analysis', 'pH testing', 'Contamination screening', 'Detailed reports'],
      price: 'KSh 1,500/sample'
    },
    {
      icon: Truck,
      title: 'Delivery Services',
      description: 'Reliable delivery of products directly to your farm with flexible scheduling options.',
      features: ['Same-day delivery', 'Bulk order discounts', 'Scheduled deliveries', 'GPS tracking'],
      price: 'Free for orders &gt; KSh 10,000'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for urgent pest and disease management issues.',
      features: ['Phone support', 'WhatsApp assistance', 'Emergency response', 'Multilingual support'],
      price: 'Included with all products'
    },
    {
      icon: Calendar,
      title: 'Crop Monitoring',
      description: 'Regular field monitoring and advisory services throughout your growing season.',
      features: ['Weekly field visits', 'Growth stage monitoring', 'Pest scouting', 'Spray scheduling'],
      price: 'KSh 5,000/acre/season'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond products, we provide comprehensive agricultural services to ensure your farming success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What&apos;s Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-orange-500 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Guarantee */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Service Guarantee</h3>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            We stand behind every product and service we provide. If you&apos;re not completely satisfied with our agricultural solutions, we&apos;ll work with you to make it right.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">100%</div>
              <div className="text-green-100">Quality Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">24/7</div>
              <div className="text-green-100">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Solutions?</h3>
          <p className="text-gray-600 mb-6">
            Contact our team of experts to discuss your specific agricultural needs and get personalized recommendations.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors mr-4">
            Contact Our Experts
          </button>
          <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
            Download Service Catalog
          </button>
        </div>
      </div>
    </section>
  )
}
