import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactHero() {
  const quickContacts = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+254 20 2345678',
      subInfo: 'Mon-Fri 8AM-6PM',
      action: 'tel:+254202345678'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@fedoagencies.co.ke',
      subInfo: 'We reply within 2 hours',
      action: 'mailto:info@fedoagencies.co.ke'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Nairobi, Kenya',
      subInfo: 'Industrial Area',
      action: '#location'
    },
    {
      icon: Clock,
      title: 'Emergency',
      info: '+254 722 123456',
      subInfo: '24/7 Technical Support',
      action: 'tel:+254722123456'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-green-200">Touch</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to transform your farming with our agricultural solutions? Our team of experts is here to help you succeed. Contact us today for personalized advice and support.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickContacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={index}
                href={contact.action}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <IconComponent className="h-8 w-8 text-green-200" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-green-100 font-medium mb-1">{contact.info}</p>
                <p className="text-green-200 text-sm">{contact.subInfo}</p>
              </a>
            )
          })}
        </div>

        {/* Response Time Promise */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Response Promise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">&lt; 2 Hours</div>
              <div className="text-green-100">Email Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">&lt; 30 Min</div>
              <div className="text-green-100">Phone Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200 mb-2">24/7</div>
              <div className="text-green-100">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}