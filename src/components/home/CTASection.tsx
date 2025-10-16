import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Main CTA */}
        <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-700 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
            {/* Content Side */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to Transform Your Farm?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Join thousands of successful farmers who trust Fedo Agencies for their 
                  agricultural needs. Get expert advice, quality products, and reliable support.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">Free consultation with our agronomists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">Customized product recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/90">Nationwide delivery and support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link 
                  href="/products"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-orange-400 text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-400 hover:border-green-600"
                >
                  <span>Browse Products</span>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/cta.webp"
                  alt="Fedo Agencies agricultural success story"
                  width={500}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="card-modern text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Speak directly with our agricultural experts
            </p>
            <div className="space-y-2">
              <div className="font-medium text-gray-900">+254 700 123 456</div>
              <div className="text-sm text-gray-600">Mon - Fri, 8AM - 6PM</div>
            </div>
          </div>

          <div className="card-modern text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Get detailed information and quotes
            </p>
            <div className="space-y-2">
              <div className="font-medium text-gray-900">info@fedoagencies.co.ke</div>
              <div className="text-sm text-gray-600">Response within 24 hours</div>
            </div>
          </div>

          <div className="card-modern text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-600 mb-4">
              Come to our offices for personalized service
            </p>
            <div className="space-y-2">
              <div className="font-medium text-gray-900">Nairobi, Kenya</div>
              <div className="text-sm text-gray-600">Multiple locations</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Have Questions About Our Products?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team of agricultural experts is here to help you choose the right solutions 
            for your specific farming needs and conditions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection