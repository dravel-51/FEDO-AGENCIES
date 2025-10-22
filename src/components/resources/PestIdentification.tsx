'use client'

import { useState } from 'react'
import { Search, Filter, Eye, AlertTriangle, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function PestIdentification() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Pests', count: 200 },
    { id: 'insects', name: 'Insects', count: 120 },
    { id: 'diseases', name: 'Diseases', count: 50 },
    { id: 'weeds', name: 'Weeds', count: 30 }
  ]

  const pests = [
    {
      id: 1,
      name: 'Fall Armyworm',
      category: 'insects',
      scientificName: 'Spodoptera frugiperda',
      crops: ['Maize', 'Sorghum', 'Rice'],
      severity: 'High',
      description: 'Highly destructive pest that feeds on leaves, creating characteristic "window pane" damage.',
      symptoms: ['Irregular holes in leaves', 'Frass (droppings) in leaf whorls', 'Damaged growing points'],
      control: ['Bt-based insecticides', 'Pheromone traps', 'Biological control agents'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=fall%20armyworm%20pest%20identification%20maize%20damage%20agricultural&image_size=square'
    },
    {
      id: 2,
      name: 'Late Blight',
      category: 'diseases',
      scientificName: 'Phytophthora infestans',
      crops: ['Tomatoes', 'Potatoes'],
      severity: 'High',
      description: 'Fungal disease causing rapid plant death and fruit rot, especially in humid conditions.',
      symptoms: ['Dark water-soaked lesions', 'White fungal growth', 'Rapid plant collapse'],
      control: ['Copper-based fungicides', 'Resistant varieties', 'Proper spacing'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=late%20blight%20disease%20tomato%20plant%20fungal%20infection%20agricultural&image_size=square'
    },
    {
      id: 3,
      name: 'Aphids',
      category: 'insects',
      scientificName: 'Aphis spp.',
      crops: ['Vegetables', 'Cereals', 'Legumes'],
      severity: 'Medium',
      description: 'Small soft-bodied insects that suck plant sap and transmit viral diseases.',
      symptoms: ['Curled leaves', 'Sticky honeydew', 'Stunted growth', 'Yellowing'],
      control: ['Systemic insecticides', 'Beneficial insects', 'Reflective mulches'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=aphids%20pest%20identification%20plant%20damage%20agricultural%20insects&image_size=square'
    },
    {
      id: 4,
      name: 'Striga (Witchweed)',
      category: 'weeds',
      scientificName: 'Striga hermonthica',
      crops: ['Maize', 'Sorghum', 'Millet'],
      severity: 'High',
      description: 'Parasitic weed that attaches to crop roots and severely reduces yields.',
      symptoms: ['Stunted crop growth', 'Purple flowering weeds', 'Reduced grain filling'],
      control: ['Resistant varieties', 'Crop rotation', 'Herbicide seed treatment'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=striga%20witchweed%20parasitic%20weed%20maize%20field%20agricultural&image_size=square'
    },
    {
      id: 5,
      name: 'Whiteflies',
      category: 'insects',
      scientificName: 'Bemisia tabaci',
      crops: ['Tomatoes', 'Beans', 'Cotton'],
      severity: 'Medium',
      description: 'Small white flying insects that feed on plant sap and transmit viruses.',
      symptoms: ['Yellowing leaves', 'Sooty mold', 'Reduced vigor', 'Virus symptoms'],
      control: ['Yellow sticky traps', 'Systemic insecticides', 'Biological control'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=whiteflies%20pest%20identification%20tomato%20plant%20agricultural%20insects&image_size=square'
    },
    {
      id: 6,
      name: 'Black Rot',
      category: 'diseases',
      scientificName: 'Xanthomonas campestris',
      crops: ['Cabbage', 'Cauliflower', 'Broccoli'],
      severity: 'High',
      description: 'Bacterial disease causing V-shaped lesions and blackened veins in brassica crops.',
      symptoms: ['V-shaped yellow lesions', 'Black veins', 'Wilting', 'Head rot'],
      control: ['Copper bactericides', 'Crop rotation', 'Resistant varieties'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=black%20rot%20disease%20cabbage%20bacterial%20infection%20agricultural&image_size=square'
    }
  ]

  const filteredPests = pests.filter(pest => {
    const matchesCategory = selectedCategory === 'all' || pest.category === selectedCategory
    const matchesSearch = pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pest.crops.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'High': return AlertTriangle
      case 'Medium': return Eye
      case 'Low': return Shield
      default: return Eye
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pest Identification Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quickly identify and learn how to control common pests, diseases, and weeds affecting crops in Kenya.
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
                  placeholder="Search by pest name, scientific name, or affected crop..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredPests.length} of {pests.length} pests
          </p>
        </div>

        {/* Pest Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPests.map((pest) => {
            const SeverityIcon = getSeverityIcon(pest.severity)
            return (
              <div key={pest.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={pest.image}
                  alt={pest.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{pest.name}</h3>
                      <p className="text-sm text-gray-500 italic">{pest.scientificName}</p>
                    </div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(pest.severity)}`}>
                      <SeverityIcon className="h-3 w-3 mr-1" />
                      {pest.severity}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{pest.description}</p>

                  {/* Affected Crops */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Affected Crops:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pest.crops.map((crop, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Symptoms:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pest.symptoms.slice(0, 2).map((symptom, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Control Methods */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Control Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pest.control.slice(0, 2).map((method, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors font-medium">
                    View Full Details
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Zap className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-red-900 mb-4">Emergency Pest Outbreak?</h3>
          <p className="text-red-700 mb-6">
            Contact our emergency response team for immediate assistance with severe pest outbreaks.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Call Emergency Line: +254 700 123 456
          </button>
        </div>
      </div>
    </section>
  )
}
