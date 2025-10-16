'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail } from 'lucide-react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Questions', count: 50 },
    { id: 'products', name: 'Products', count: 15 },
    { id: 'application', name: 'Application', count: 12 },
    { id: 'safety', name: 'Safety', count: 8 },
    { id: 'ordering', name: 'Ordering', count: 10 },
    { id: 'technical', name: 'Technical', count: 5 }
  ]

  const faqs = [
    {
      id: 1,
      category: 'products',
      question: 'What types of agricultural products does Fedo Agencies offer?',
      answer: 'Fedo Agencies offers a comprehensive range of agricultural products including insecticides, fungicides, herbicides, fertilizers, seeds, and farm equipment. We stock products from leading international brands and provide solutions for all major crops grown in Kenya.'
    },
    {
      id: 2,
      category: 'application',
      question: 'How do I determine the correct application rate for pesticides?',
      answer: 'Application rates depend on several factors including crop type, pest pressure, growth stage, and product concentration. Always refer to the product label for specific rates. Our technical team can also provide personalized recommendations based on your specific situation. Contact us for a free consultation.'
    },
    {
      id: 3,
      category: 'safety',
      question: 'What safety precautions should I take when applying pesticides?',
      answer: 'Always wear appropriate Personal Protective Equipment (PPE) including gloves, masks, and protective clothing. Apply during calm weather conditions, avoid spraying during windy or rainy conditions. Keep children and livestock away from treated areas. Follow the pre-harvest interval (PHI) specified on the label.'
    },
    {
      id: 4,
      category: 'ordering',
      question: 'How can I place an order and what are the payment options?',
      answer: 'You can place orders through our website, by calling our sales team at +254 700 123 456, or by visiting our offices. We accept cash, mobile money (M-Pesa, Airtel Money), bank transfers, and credit terms for qualified customers. Minimum order quantities may apply for certain products.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'Do you provide technical support and training?',
      answer: 'Yes, we offer comprehensive technical support including on-farm consultations, training programs, soil testing services, and crop monitoring. Our team of agronomists provides expert advice on crop management, pest control strategies, and optimal product selection.'
    },
    {
      id: 6,
      category: 'products',
      question: 'How do I choose the right fertilizer for my crop?',
      answer: 'Fertilizer selection depends on crop type, soil conditions, growth stage, and nutrient requirements. We recommend conducting a soil test first to determine nutrient deficiencies. Our agronomists can help interpret soil test results and recommend the most suitable fertilizer program for your specific needs.'
    },
    {
      id: 7,
      category: 'application',
      question: 'When is the best time to apply fungicides?',
      answer: 'Fungicide timing depends on the disease pressure and crop growth stage. Preventive applications are most effective when applied before disease symptoms appear. For curative treatments, apply at the first sign of disease. Weather conditions, especially humidity and temperature, also influence timing decisions.'
    },
    {
      id: 8,
      category: 'safety',
      question: 'How should I store agricultural chemicals safely?',
      answer: 'Store chemicals in their original containers in a cool, dry, well-ventilated area away from direct sunlight. Keep them locked and away from children, food, and animal feed. Maintain proper inventory records and check expiry dates regularly. Never store chemicals in food or drink containers.'
    },
    {
      id: 9,
      category: 'ordering',
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide delivery services across Kenya. Delivery charges vary based on location and order size. Free delivery is available for orders above KES 50,000 within Nairobi and surrounding areas. For remote locations, we work with reliable logistics partners to ensure safe product delivery.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'What should I do if my crops show signs of pesticide resistance?',
      answer: 'If you suspect pesticide resistance, stop using the current product immediately and contact our technical team. We can recommend alternative products with different modes of action. Implementing resistance management strategies including product rotation, tank mixing, and integrated pest management is crucial for long-term effectiveness.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and agricultural practices.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No FAQs found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our expert team is here to help. Contact us for personalized assistance with your agricultural needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-blue-100 text-sm mb-3">Speak with our experts</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                +254 700 123 456
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-blue-100 text-sm mb-3">Get detailed answers</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                support@fedoagencies.co.ke
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-blue-100 text-sm mb-3">Instant assistance</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}