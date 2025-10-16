import { Phone, Mail, MapPin, Clock, MessageCircle, Globe, Users, Award } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+254 20 2345678',
      secondary: '+254 722 123456 (Mobile)',
      description: 'Call us during business hours for immediate assistance',
      action: 'tel:+254202345678'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@fedoagencies.co.ke',
      secondary: 'support@fedoagencies.co.ke',
      description: 'Send us an email and we&apos;ll respond within 2 hours',
      action: 'mailto:info@fedoagencies.co.ke'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+254 722 123456',
      secondary: 'Available 24/7',
      description: 'Quick support via WhatsApp for urgent matters',
      action: 'https://wa.me/254722123456'
    },
    {
      icon: Globe,
      title: 'Website',
      primary: 'www.fedoagencies.co.ke',
      secondary: 'Online catalog &amp; resources',
      description: 'Browse our complete product catalog and resources',
      action: 'https://www.fedoagencies.co.ke'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Support', hours: '24/7 via WhatsApp' }
  ]

  const departments = [
    {
      name: 'Sales Department',
      contact: 'sales@fedoagencies.co.ke',
      phone: '+254 20 2345679',
      description: 'Product inquiries, quotes, and orders'
    },
    {
      name: 'Technical Support',
      contact: 'technical@fedoagencies.co.ke',
      phone: '+254 20 2345680',
      description: 'Application guidance and problem solving'
    },
    {
      name: 'Customer Service',
      contact: 'service@fedoagencies.co.ke',
      phone: '+254 20 2345681',
      description: 'General support and account management'
    },
    {
      name: 'Training &amp; Consultation',
      contact: 'training@fedoagencies.co.ke',
      phone: '+254 20 2345682',
      description: 'Educational programs and expert consultation'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Multiple ways to reach our team of agricultural experts
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <a
                key={index}
                href={method.action}
                className="block bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-green-600 font-medium">{method.primary}</p>
                    <p className="text-gray-600 text-sm">{method.secondary}</p>
                    <p className="text-gray-500 text-sm mt-2">{method.description}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Office Hours */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-12">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
          </div>
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700">{schedule.day}</span>
                <span className="font-medium text-gray-900">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Department Contacts</h3>
          </div>
          <div className="space-y-4">
            {departments.map((dept, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{dept.name}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📧 {dept.contact}</p>
                  <p>📞 {dept.phone}</p>
                  <p className="text-gray-500">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="bg-green-600 rounded-xl p-6 text-white text-center">
          <Award className="h-12 w-12 text-green-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Service Promise</h3>
          <p className="text-green-100 mb-4">
            We&apos;re committed to providing exceptional service and support to help you succeed in agriculture.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-200">100%</div>
              <div className="text-green-100 text-sm">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-200">15+</div>
              <div className="text-green-100 text-sm">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Phone className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-semibold text-red-800">Emergency Agricultural Support</h4>
          </div>
          <p className="text-red-700 text-sm mb-2">
            For urgent pest outbreaks or crop emergencies outside business hours:
          </p>
          <p className="text-red-800 font-medium">📱 WhatsApp: +254 722 123456</p>
          <p className="text-red-600 text-sm">Available 24/7 for critical agricultural emergencies</p>
        </div>
      </div>
    </section>
  )
}