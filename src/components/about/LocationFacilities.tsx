import { MapPin, Building, Warehouse, Truck, Clock, Phone, Mail } from 'lucide-react'
import { companyInfo, contactIcons } from '@/data/aboutContent'

export default function LocationFacilities() {
  const facilities = [
    {
      icon: Building,
      title: "Head Office",
      description: "Modern office facilities with customer service center and technical consultation rooms.",
      color: "blue"
    },
    {
      icon: Warehouse,
      title: "Storage Warehouse",
      description: "Climate-controlled storage facilities ensuring product quality and proper inventory management.",
      color: "green"
    },
    {
      icon: Truck,
      title: "Distribution Center",
      description: "Strategic location for efficient distribution across Kenya with modern logistics capabilities.",
      color: "orange"
    }
  ]

  const serviceAreas = [
    "Nairobi County", "Kiambu County", "Machakos County", "Kajiado County",
    "Murang&apos;a County", "Nyeri County", "Kirinyaga County", "Embu County",
    "Meru County", "Tharaka-Nithi County", "Nakuru County", "Laikipia County",
    "Nyandarua County", "Kericho County", "Bomet County", "Narok County",
    "Kisii County", "Nyamira County", "Migori County", "Homa Bay County",
    "Kisumu County", "Siaya County", "Busia County", "Kakamega County",
    "Vihiga County", "Nandi County", "Uasin Gishu County", "Trans Nzoia County",
    "West Pokot County", "Elgeyo-Marakwet County", "Baringo County", "Samburu County",
    "Isiolo County", "Marsabit County", "Mandera County", "Wajir County",
    "Garissa County", "Tana River County", "Lamu County", "Kilifi County",
    "Mombasa County", "Kwale County", "Taita-Taveta County", "Makueni County",
    "Kitui County", "Mwingi County", "Tharaka-Nithi County"
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Location &amp; Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in Nairobi with modern facilities to serve you better across Kenya.
          </p>
        </div>

        {/* Location Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fedo Agencies Limited</h4>
                  <p className="text-gray-600">
                    {companyInfo.location.address}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{companyInfo.location.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Fax: {companyInfo.location.fax}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{companyInfo.location.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{companyInfo.location.workingHours.weekdays}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{companyInfo.location.workingHours.saturday}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Map</h3>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">{companyInfo.location.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Facilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(facility.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{facility.title}</h4>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Coverage Areas</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 mb-6 text-center">
              We proudly serve farmers and agricultural enterprises across multiple counties in Kenya:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-center font-medium">
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your area listed? Contact us to discuss delivery options.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}