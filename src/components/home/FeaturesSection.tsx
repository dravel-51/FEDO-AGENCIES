import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Curved Background Container */}
      <div 
        className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/asset_cowshed.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          clipPath: 'ellipse(100% 100% at 50% 0%)'
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            clipPath: 'ellipse(100% 100% at 50% 0%)'
          }}
        ></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
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
            
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              <span className="text-orange-400 font-medium">Fedo Agencies</span> is Kenya's trusted partner in agricultural excellence, specializing in premium crop protection solutions, livestock health products, and comprehensive farming support services. We empower farmers across Kenya with innovative, sustainable agricultural solutions that enhance productivity, protect investments, and drive farming success.
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default FeaturesSection;