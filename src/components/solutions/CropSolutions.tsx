'use client'

import { useState } from 'react'
import { Calendar, Target, Shield, Zap } from 'lucide-react'

export default function CropSolutions() {
  const [selectedCrop, setSelectedCrop] = useState('tomatoes')

  const cropSolutions = {
    tomatoes: {
      name: 'Tomatoes',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20tomato%20plants%20growing%20in%20greenhouse%20with%20red%20ripe%20tomatoes%20agricultural%20farming&image_size=landscape_4_3',
      growthStages: [
        {
          stage: 'Seedling (0-4 weeks)',
          icon: Target,
          recommendations: [
            { type: 'Fungicide', product: 'Ridomil Gold 68 WP', purpose: 'Damping-off prevention' },
            { type: 'Fertilizer', product: 'NPK 23:23:0', purpose: 'Root development' }
          ]
        },
        {
          stage: 'Vegetative (4-8 weeks)',
          icon: Shield,
          recommendations: [
            { type: 'Insecticide', product: 'Thunder 15 OD', purpose: 'Aphid control' },
            { type: 'Fertilizer', product: 'CAN 26%', purpose: 'Vegetative growth' }
          ]
        },
        {
          stage: 'Flowering (8-12 weeks)',
          icon: Zap,
          recommendations: [
            { type: 'Fungicide', product: 'Antracol 70 WP', purpose: 'Blight prevention' },
            { type: 'Fertilizer', product: 'NPK 15:15:15', purpose: 'Flower formation' }
          ]
        },
        {
          stage: 'Fruiting (12+ weeks)',
          icon: Calendar,
          recommendations: [
            { type: 'Insecticide', product: 'Karate 2.5 EC', purpose: 'Fruit fly control' },
            { type: 'Fertilizer', product: 'Potassium Sulphate', purpose: 'Fruit quality' }
          ]
        }
      ],
      commonPests: [
        { name: 'Aphids', severity: 'High', solution: 'Thunder 15 OD' },
        { name: 'Whiteflies', severity: 'High', solution: 'Actara 25 WG' },
        { name: 'Thrips', severity: 'Medium', solution: 'Karate 2.5 EC' },
        { name: 'Cutworms', severity: 'Medium', solution: 'Bulldock 25 EC' }
      ],
      commonDiseases: [
        { name: 'Late Blight', severity: 'High', solution: 'Ridomil Gold 68 WP' },
        { name: 'Early Blight', severity: 'High', solution: 'Antracol 70 WP' },
        { name: 'Bacterial Wilt', severity: 'Medium', solution: 'Copper Oxychloride' },
        { name: 'Fusarium Wilt', severity: 'Medium', solution: 'Soil sterilization' }
      ]
    },
    maize: {
      name: 'Maize',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20maize%20corn%20field%20with%20tall%20green%20plants%20and%20golden%20corn%20cobs%20agricultural%20farming&image_size=landscape_4_3',
      growthStages: [
        {
          stage: 'Germination (0-2 weeks)',
          icon: Target,
          recommendations: [
            { type: 'Insecticide', product: 'Cruiser 350 FS', purpose: 'Seed treatment' },
            { type: 'Fertilizer', product: 'DAP 18:46:0', purpose: 'Root establishment' }
          ]
        },
        {
          stage: 'Vegetative (2-8 weeks)',
          icon: Shield,
          recommendations: [
            { type: 'Herbicide', product: 'Dual Gold 960 EC', purpose: 'Weed control' },
            { type: 'Fertilizer', product: 'CAN 26%', purpose: 'Vegetative growth' }
          ]
        },
        {
          stage: 'Tasseling (8-10 weeks)',
          icon: Zap,
          recommendations: [
            { type: 'Insecticide', product: 'Karate 2.5 EC', purpose: 'Stalk borer control' },
            { type: 'Fertilizer', product: 'NPK 15:15:15', purpose: 'Tassel formation' }
          ]
        },
        {
          stage: 'Grain Filling (10+ weeks)',
          icon: Calendar,
          recommendations: [
            { type: 'Fungicide', product: 'Tilt 250 EC', purpose: 'Ear rot prevention' },
            { type: 'Fertilizer', product: 'Potassium Chloride', purpose: 'Grain quality' }
          ]
        }
      ],
      commonPests: [
        { name: 'Fall Armyworm', severity: 'High', solution: 'Karate 2.5 EC' },
        { name: 'Stalk Borer', severity: 'High', solution: 'Thunder 15 OD' },
        { name: 'Aphids', severity: 'Medium', solution: 'Actara 25 WG' },
        { name: 'Cutworms', severity: 'Medium', solution: 'Bulldock 25 EC' }
      ],
      commonDiseases: [
        { name: 'Maize Streak Virus', severity: 'High', solution: 'Vector control' },
        { name: 'Gray Leaf Spot', severity: 'High', solution: 'Tilt 250 EC' },
        { name: 'Common Rust', severity: 'Medium', solution: 'Antracol 70 WP' },
        { name: 'Ear Rot', severity: 'Medium', solution: 'Proper drying' }
      ]
    }
  }

  const crops = [
    { id: 'tomatoes', name: 'Tomatoes', category: 'Vegetables' },
    { id: 'maize', name: 'Maize', category: 'Cereals' }
  ]

  const currentCrop = cropSolutions[selectedCrop as keyof typeof cropSolutions]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Crop Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection programs tailored to each growth stage of your crops
          </p>
        </div>

        {/* Crop Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(crop.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCrop === crop.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {crop.name}
              <span className="ml-2 text-sm opacity-75">({crop.category})</span>
            </button>
          ))}
        </div>

        {/* Crop Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header with Image */}
          <div className="relative h-64 bg-gradient-to-r from-green-600 to-emerald-600">
            <img
              src={currentCrop.image}
              alt={currentCrop.name}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">{currentCrop.name} Protection Program</h3>
            </div>
          </div>

          <div className="p-8">
            {/* Growth Stages */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Growth Stage Recommendations</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentCrop.growthStages.map((stage, index) => {
                  const IconComponent = stage.icon
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                        <h5 className="font-bold text-gray-900 ml-3">{stage.stage}</h5>
                      </div>
                      <div className="space-y-3">
                        {stage.recommendations.map((rec, idx) => (
                          <div key={idx} className="bg-white p-3 rounded-lg border">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-900">{rec.type}</span>
                              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                                {rec.product}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">{rec.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Pest and Disease Management */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Common Pests */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Common Pests &amp; Control</h4>
                <div className="space-y-3">
                  {currentCrop.commonPests.map((pest, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-gray-900">{pest.name}</h5>
                        <p className="text-sm text-gray-600">Solution: {pest.solution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(pest.severity)}`}>
                        {pest.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Diseases */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Common Diseases &amp; Control</h4>
                <div className="space-y-3">
                  {currentCrop.commonDiseases.map((disease, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-gray-900">{disease.name}</h5>
                        <p className="text-sm text-gray-600">Solution: {disease.solution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(disease.severity)}`}>
                        {disease.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors mr-4">
                Get Custom {currentCrop.name} Program
              </button>
              <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Download {currentCrop.name} Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
