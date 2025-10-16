'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Eye, Download } from 'lucide-react'

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('insecticides')

  const products = {
    insecticides: [
      {
        id: 1,
        name: 'Thunder 15 OD',
        activeIngredient: 'Imidacloprid 15%',
        brand: 'Bayer',
        category: 'Systemic Insecticide',
        targetPests: 'Aphids, Whiteflies, Thrips',
        packSizes: ['100ml', '250ml', '500ml', '1L'],
        price: 'KSh 850',
        rating: 4.8,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20insecticide%20bottle%20Thunder%2015%20OD%20product%20packaging%20blue%20and%20white%20design&image_size=square'
      },
      {
        id: 2,
        name: 'Karate 2.5 EC',
        activeIngredient: 'Lambda-cyhalothrin 2.5%',
        brand: 'Syngenta',
        category: 'Contact Insecticide',
        targetPests: 'Bollworms, Cutworms, Armyworms',
        packSizes: ['100ml', '250ml', '500ml'],
        price: 'KSh 1,200',
        rating: 4.9,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20insecticide%20bottle%20Karate%20EC%20product%20packaging%20red%20and%20white%20design&image_size=square'
      },
      {
        id: 3,
        name: 'Actara 25 WG',
        activeIngredient: 'Thiamethoxam 25%',
        brand: 'Syngenta',
        category: 'Systemic Insecticide',
        targetPests: 'Aphids, Leafhoppers, Planthoppers',
        packSizes: ['50g', '100g', '250g'],
        price: 'KSh 950',
        rating: 4.7,
        inStock: false,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20insecticide%20packet%20Actara%20WG%20product%20packaging%20blue%20and%20yellow%20design&image_size=square'
      }
    ],
    fungicides: [
      {
        id: 4,
        name: 'Ridomil Gold 68 WP',
        activeIngredient: 'Metalaxyl-M + Mancozeb',
        brand: 'Syngenta',
        category: 'Systemic + Contact',
        targetDiseases: 'Late blight, Downy mildew',
        packSizes: ['100g', '250g', '500g', '1kg'],
        price: 'KSh 1,150',
        rating: 4.8,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20fungicide%20packet%20Ridomil%20Gold%20product%20packaging%20gold%20and%20green%20design&image_size=square'
      },
      {
        id: 5,
        name: 'Antracol 70 WP',
        activeIngredient: 'Propineb 70%',
        brand: 'Bayer',
        category: 'Contact Fungicide',
        targetDiseases: 'Blight, Rust, Scab',
        packSizes: ['100g', '500g', '1kg'],
        price: 'KSh 750',
        rating: 4.6,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20fungicide%20packet%20Antracol%20product%20packaging%20orange%20and%20white%20design&image_size=square'
      }
    ],
    herbicides: [
      {
        id: 6,
        name: 'Roundup 480 SL',
        activeIngredient: 'Glyphosate 48%',
        brand: 'Bayer',
        category: 'Non-selective Herbicide',
        targetWeeds: 'Annual & Perennial weeds',
        packSizes: ['250ml', '500ml', '1L', '5L'],
        price: 'KSh 680',
        rating: 4.9,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20herbicide%20bottle%20Roundup%20product%20packaging%20yellow%20and%20green%20design&image_size=square'
      },
      {
        id: 7,
        name: 'Dual Gold 960 EC',
        activeIngredient: 'S-metolachlor 96%',
        brand: 'Syngenta',
        category: 'Pre-emergence Herbicide',
        targetWeeds: 'Grass & Broadleaf weeds',
        packSizes: ['250ml', '500ml', '1L'],
        price: 'KSh 1,450',
        rating: 4.7,
        inStock: true,
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20agricultural%20herbicide%20bottle%20Dual%20Gold%20product%20packaging%20gold%20and%20black%20design&image_size=square'
      }
    ]
  }

  const tabs = [
    { id: 'insecticides', label: 'Insecticides', count: products.insecticides.length },
    { id: 'fungicides', label: 'Fungicides', count: products.fungicides.length },
    { id: 'herbicides', label: 'Herbicides', count: products.herbicides.length }
  ]

  const currentProducts = products[activeTab as keyof typeof products] || []

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our extensive collection of agricultural products with detailed specifications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-lg transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-600 border-transparent hover:text-green-600'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                    In Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>

                <p className="text-green-600 font-medium mb-2">{product.brand}</p>
                <p className="text-gray-600 text-sm mb-3">{product.activeIngredient}</p>
                <p className="text-gray-700 text-sm mb-3">{product.category}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Target:</p>
                  <p className="text-sm text-gray-600">
                    {(product as any).targetPests || (product as any).targetDiseases || (product as any).targetWeeds}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Pack Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.packSizes.map((size) => (
                      <span key={size} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        product.inStock 
                          ? 'bg-green-600 text-white hover:bg-orange-500' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 inline mr-1" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}
