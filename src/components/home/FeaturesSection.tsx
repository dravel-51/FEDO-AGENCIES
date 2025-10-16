const FeaturesSection = () => {

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            WHY CHOOSE US?
          </h2>
          
          {/* Orange Diamond Separator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-orange-500 max-w-24"></div>
            <div className="mx-4">
              <div className="w-4 h-4 bg-orange-500 transform rotate-45"></div>
            </div>
            <div className="flex-1 h-px bg-orange-500 max-w-24"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-orange-500 font-medium">Fedo Agencies</span> is Kenya's trusted partner in agricultural excellence, specializing in premium crop protection solutions, livestock health products, and comprehensive farming support services. We empower farmers across Kenya with innovative, sustainable agricultural solutions that enhance productivity, protect investments, and drive farming success. Our commitment to quality, expertise, and farmer-focused service has made us a leading name in Kenya's agricultural sector.
            </p>
          </div>
        </div>



        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-white/80">Years Serving Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/80">Agricultural Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-white/80">Farmers Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80">Counties Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection