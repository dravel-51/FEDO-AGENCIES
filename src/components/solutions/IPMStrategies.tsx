import { Target, Shield, Leaf, Users, Calendar, TrendingUp } from 'lucide-react'

export default function IPMStrategies() {
  const ipmPrinciples = [
    {
      icon: Target,
      title: 'Prevention',
      description: 'Focus on preventing pest problems before they occur through proper crop management',
      strategies: [
        'Crop rotation and diversification',
        'Resistant variety selection',
        'Proper field sanitation',
        'Optimal planting timing'
      ]
    },
    {
      icon: Shield,
      title: 'Monitoring',
      description: 'Regular field scouting and pest monitoring to make informed decisions',
      strategies: [
        'Weekly field inspections',
        'Pest threshold monitoring',
        'Weather-based disease forecasting',
        'Trap crop utilization'
      ]
    },
    {
      icon: Leaf,
      title: 'Biological Control',
      description: 'Utilize natural enemies and beneficial organisms for sustainable pest management',
      strategies: [
        'Beneficial insect conservation',
        'Biopesticide applications',
        'Companion planting',
        'Habitat manipulation'
      ]
    },
    {
      icon: Users,
      title: 'Cultural Practices',
      description: 'Implement farming practices that reduce pest pressure naturally',
      strategies: [
        'Proper spacing and pruning',
        'Water and nutrient management',
        'Mulching and cover crops',
        'Equipment sanitation'
      ]
    }
  ]

  const ipmPrograms = [
    {
      crop: 'Tomatoes',
      season: 'Year-round',
      keyPests: ['Late blight', 'Whiteflies', 'Aphids'],
      approach: 'Integrated approach combining resistant varieties, biological control, and targeted chemical applications',
      successRate: '92%',
      costReduction: '35%'
    },
    {
      crop: 'Maize',
      season: 'Long &amp; Short rains',
      keyPests: ['Fall armyworm', 'Stalk borer', 'Gray leaf spot'],
      approach: 'Push-pull technology combined with selective insecticides and disease-resistant varieties',
      successRate: '88%',
      costReduction: '40%'
    },
    {
      crop: 'Coffee',
      season: 'Year-round',
      keyPests: ['Coffee berry disease', 'Coffee berry borer', 'Leaf rust'],
      approach: 'Shade management, pruning, biological control agents, and strategic fungicide applications',
      successRate: '90%',
      costReduction: '30%'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrated Pest Management (IPM) Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable, cost-effective pest management that protects your crops while preserving the environment
          </p>
        </div>

        {/* IPM Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Four Pillars of IPM</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ipmPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 ml-4">{principle.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.strategies.map((strategy, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* IPM Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">IPM Success Programs</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {ipmPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{program.crop}</h4>
                  <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {program.season}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Key Challenges:</h5>
                  <div className="flex flex-wrap gap-2">
                    {program.keyPests.map((pest, idx) => (
                      <span key={idx} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                        {pest}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{program.approach}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{program.successRate}</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{program.costReduction}</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IPM Benefits */}
        <div className="bg-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose IPM with Fedo Agencies?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Increased Yields</h4>
              <p className="text-green-100">Average 25% increase in crop yields through comprehensive pest management</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Reduced Costs</h4>
              <p className="text-green-100">Up to 40% reduction in pesticide costs through targeted applications</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Environmental Safety</h4>
              <p className="text-green-100">Protect beneficial insects and maintain ecological balance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement IPM on Your Farm?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our IPM specialists will work with you to develop a customized integrated pest management program for your specific crops and conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              <Calendar className="h-5 w-5 inline mr-2" />
              Schedule IPM Consultation
            </button>
            <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Download IPM Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}