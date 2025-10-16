import { Building2, MapPin, Phone, Mail, TrendingUp, Users, Award, Target } from 'lucide-react'
import { companyInfo, companyStats } from '@/data/aboutContent'

export default function CompanyIntro() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">{companyInfo.name}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {companyInfo.tagline}
          </p>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Welcome to Fedo Agencies Limited</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {companyInfo.welcomeMessage}
            </p>
            <p>
              {companyInfo.description}
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {companyStats.map((stat, index) => {
            const Icon = stat.icon
            const gradientColors = [
              "from-green-500 to-green-600",
              "from-blue-500 to-blue-600", 
              "from-orange-500 to-orange-600",
              "from-purple-500 to-purple-600"
            ]
            
            return (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradientColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Fedo Agencies Limited is a leading Kenyan company specializing in importing, manufacturing, and distributing top-tier agricultural products. With years of experience in the agricultural input sector, we have established ourselves as the premier agricultural input supplier in Kenya.
              </p>
              <p>
                Our legacy is built on trust, quality, and unwavering commitment to helping farmers achieve greater yields and sustainable agricultural practices. We understand that agriculture is the backbone of Kenya's economy and the livelihood of millions of families.
              </p>
              <p>
                From small-scale farmers to large commercial operations, we serve diverse agricultural needs with products that are proven, reliable, and results-driven.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20agricultural%20company%20building%20with%20green%20landscaping%20and%20professional%20signage%20in%20Kenya%20with%20farmers%20and%20agricultural%20products&image_size=landscape_4_3"
              alt="Fedo Agencies Building"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company Profile</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
              <p className="text-gray-600">Agricultural Solutions &amp; Crop Protection</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">{companyInfo.location.address}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">{companyInfo.location.phone}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">{companyInfo.location.email}</p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Growing Together
            </h3>
            <p className="text-lg max-w-4xl mx-auto">
              {companyInfo.closingMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}