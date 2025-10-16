import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

const ProductsOverview = () => {
  const products = [
    {
      id: 1,
      title: 'AlphaGo 200SC',
      image: '/products/alphago.png',
      href: '/products/insecticides',
      specifications: [
        { label: 'Type', value: 'Broad-spectrum insecticide with enhanced contact and stomach toxicity activity' },
        { label: 'Targets', value: 'Aphids, Whiteflies, Bean pod borers, Bollworms, Cabbage looper, Caterpillar, Diamondback moth, Fall armyworm, False codling moth, Red banded caterpillar, Red Spidermites, Sawflies, Thrips, Tuta Absoluta' },
        { label: 'Best for', value: 'Edible crops, Ornamentals' },
        { label: 'Packs', value: '1L, 100 ml, 25 ml, 250 ml, 50 ml' },
        { label: 'Contains', value: 'Imidacloprid 200 g/L' },
        { label: 'Rate', value: '100-125ml per Ha in 1000 L of water (2.5-3ml per 20L)' }
      ]
    },
    {
      id: 2,
      title: 'Diazole',
      image: '/products/diazole.png',
      href: '/products/herbicides',
      specifications: [
        { label: 'Type', value: 'Herbicide - Selective' },
        { label: 'Targets', value: 'Annual Broadleaf, Grass Weeds' },
        { label: 'Best for', value: 'Maize, Sweet corn and baby corn - as Pre-emergence and early post-emergence, Sugarcane - as Early post emergence' },
        { label: 'Packs', value: '1L, 20 L, 5 L' },
        { label: 'Contains', value: 'Acetochlor 340 g/l, Atrazine 200 g/l, Mesotrione 40 g/l' },
        { label: 'Rate', value: '2.5L per Hectare (250ml per 20L of water)' }
      ]
    },
    {
      id: 3,
      title: 'Ratfire Powder',
      image: '/products/ratfire powder.png',
      href: '/products/insecticides',
      specifications: [
        { label: 'Type', value: 'Insecticide' },
        { label: 'Targets', value: 'Leafminers, Red Spidermites, Root-knot nematode, Thrips' },
        { label: 'Best for', value: 'Edible crops, Ornamentals' },
        { label: 'Packs', value: '10 ml, 100 ml, 25 ml, 250 ml, 50 ml' },
        { label: 'Contains', value: 'Abamectin 50 g/L' },
        { label: 'Rate', value: '3 ml per 20 liter of water' }
      ]
    },
    {
      id: 4,
      title: 'Faida Milking Jelly',
      image: '/products/faida milking jelly.png',
      href: '/products/insecticides',
      specifications: [
        { label: 'Type', value: 'Insecticide' },
        { label: 'Targets', value: 'Bean pod borers, Bollworms, Caterpillar, Diamondback moth, Fall armyworm, Red Spidermites, Stalk borers, Thrips, Tuta Absoluta' },
        { label: 'Best for', value: 'Edible crops, Ornamentals' },
        { label: 'Packs', value: '10 ml, 100 ml, 25 ml, 250 ml, 50 ml' },
        { label: 'Contains', value: 'Emamectin benzoate 19 g/L' },
        { label: 'Rate', value: '15-20ml per Ha in 1000 L of water (0.3-0.4ml per 20L)' }
      ]
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-2">
            Our Top products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="flex">
                {/* Product Image Section */}
                <div className="w-1/3 bg-gray-50 flex items-center justify-center p-6">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {product.title}
                  </h3>

                  {/* Specifications List */}
                  <div className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">{spec.label}:</span>
                          <span className="text-gray-600 ml-1">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <Link 
                      href={product.href}
                      className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Help Choosing the Right Products?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our agricultural experts are here to help you select the best products for your specific crops and farming conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
              View All Products
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 font-medium rounded-lg transition-colors duration-200">
              Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview