'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Bell, TrendingUp, Users } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  const benefits = [
    {
      icon: Bell,
      title: 'Weekly Updates',
      description: 'Get the latest agricultural news and insights delivered to your inbox'
    },
    {
      icon: TrendingUp,
      title: 'Market Reports',
      description: 'Stay informed about crop prices and market trends'
    },
    {
      icon: Users,
      title: 'Expert Tips',
      description: 'Receive exclusive farming tips from our agricultural experts'
    }
  ]

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Thank you for subscribing to our newsletter. You&apos;ll receive your first update within the next few days.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Agricultural Insights
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join over 15,000 farmers and agricultural professionals who receive our weekly newsletter with the latest farming tips, market updates, and industry news.
              </p>

              {/* Benefits */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <IconComponent className="h-6 w-6 text-green-200" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-green-100">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600">
                  Get weekly updates delivered straight to your inbox
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                    I agree to receive marketing emails and understand I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Join our community of farmers</p>
                  <div className="flex justify-center items-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15K+</div>
                      <div className="text-xs text-gray-500">Subscribers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">5★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
