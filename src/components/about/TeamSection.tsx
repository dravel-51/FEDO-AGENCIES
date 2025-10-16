import { GraduationCap, Users, Headphones, Truck } from 'lucide-react'

export default function TeamSection() {
  const teamCategories = [
    {
      icon: GraduationCap,
      title: "Qualified Agronomists",
      description: "Our team of certified agronomists brings years of experience in crop science, pest management, and sustainable farming practices.",
      members: "12+ Experts",
      color: "green"
    },
    {
      icon: Users,
      title: "Technical Staff",
      description: "Skilled technical professionals who provide product training, application guidance, and on-field support to our customers.",
      members: "8+ Specialists",
      color: "blue"
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description: "Dedicated customer service representatives committed to providing excellent support and addressing all your inquiries promptly.",
      members: "6+ Representatives",
      color: "purple"
    },
    {
      icon: Truck,
      title: "Logistics Team",
      description: "Efficient logistics and delivery team ensuring timely and safe transportation of products across Kenya.",
      members: "10+ Staff",
      color: "orange"
    }
  ]

  const leadership = [
    {
      name: "Dr. James Mwangi",
      position: "Chief Executive Officer",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20African%20business%20executive%20in%20suit%20agricultural%20background&image_size=square",
      description: "Over 20 years of experience in agricultural business development and strategic leadership."
    },
    {
      name: "Dr. Sarah Wanjiku",
      position: "Head of Agronomy",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20African%20female%20agronomist%20in%20field%20setting&image_size=square",
      description: "PhD in Plant Pathology with expertise in crop protection and integrated pest management."
    },
    {
      name: "Peter Kimani",
      position: "Operations Manager",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20African%20operations%20manager%20in%20warehouse%20setting&image_size=square",
      description: "15 years of experience in supply chain management and agricultural product distribution."
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-green-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of professionals is dedicated to providing you with the best agricultural solutions and support.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h4>
                <p className="text-green-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Categories */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Departments</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teamCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(category.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{category.title}</h4>
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {category.members}
                        </span>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate professionals who share our commitment to agricultural excellence and farmer success.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}