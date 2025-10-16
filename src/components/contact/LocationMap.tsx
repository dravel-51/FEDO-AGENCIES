import { MapPin, Navigation, Car, Bus, Plane } from 'lucide-react'

export default function LocationMap() {
  const directions = [
    {
      icon: Car,
      method: 'By Car',
      description: 'From Nairobi CBD, take Mombasa Road towards Industrial Area. Turn right at Enterprise Road, then left at Likoni Road.',
      duration: '15-20 minutes'
    },
    {
      icon: Bus,
      method: 'By Public Transport',
      description: 'Take matatu route 46 or 125 from CBD to Industrial Area. Alight at Enterprise Road stage.',
      duration: '25-30 minutes'
    },
    {
      icon: Plane,
      method: 'From Airport',
      description: 'From JKIA, take Airport North Road to Mombasa Road, then follow car directions above.',
      duration: '30-40 minutes'
    }
  ]

  const landmarks = [
    'Next to Kenya Bureau of Standards',
    'Opposite Industrial Area Prison',
    '200m from Enterprise Road junction',
    'Near Coca-Cola bottling plant'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us in the heart of Nairobi&apos;s Industrial Area, easily accessible from all parts of the city
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">Google Maps integration would be placed here</p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-orange-500 transition-colors">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Address</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Fedo Agencies Limited</p>
                <p>Enterprise Road, Off Mombasa Road</p>
                <p>Industrial Area</p>
                <p>P.O. Box 12345-00100</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Landmarks</h3>
              <ul className="space-y-2">
                {landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">How to Get Here</h3>
              {directions.map((direction, index) => {
                const IconComponent = direction.icon
                return (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg mr-4">
                      <IconComponent className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{direction.method}</h4>
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                          {direction.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{direction.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Parking and Accessibility */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Parking &amp; Facilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Free parking available on-site
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Wheelchair accessible entrance
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Product display showroom
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Customer waiting area
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What to Bring</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Valid ID for first-time visits
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Soil/plant samples for testing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Photos of pest/disease issues
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Farm size and crop details
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit Us?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Schedule an appointment with our experts or visit us during business hours. We&apos;re here to help you succeed in agriculture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                <Navigation className="h-5 w-5 inline mr-2" />
                Get Directions
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}