'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { name: 'Home', href: '/', disabled: false },
    { name: 'About Us', href: '/about', disabled: false },
    {
      name: 'Products',
      href: '/products',
      disabled: false,
      dropdown: [
        { name: 'Insecticides', href: '/products#insecticides' },
        { name: 'Fungicides', href: '/products#fungicides' },
        { name: 'Herbicides', href: '/products#herbicides' },
        { name: 'Fertilizers', href: '/products#fertilizers' },
        { name: 'All Products', href: '/products' },
      ]
    },
    { name: 'Contact', href: '/contact', disabled: false },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#1f4e3d] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>020 825461</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>North Airport Road, Embakasi, Nairobi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@fedoagencies.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.webp" 
                  alt="Fedo Agencies Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col transition-all duration-300 ease-in-out hover:scale-105 group">
                  <div className="relative">
                    <span className="text-transparent bg-gradient-to-r from-[#22c55e] to-[#16a34a] bg-clip-text font-extrabold text-2xl md:text-3xl tracking-tight drop-shadow-sm">
                      FEDO
                    </span>
                    <div className="absolute inset-0 text-[#22c55e] font-extrabold text-2xl md:text-3xl tracking-tight opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm">
                      FEDO
                    </div>
                  </div>
                  <div className="flex flex-col -mt-1">
                    <span className="text-slate-600 font-semibold text-xs md:text-sm tracking-[0.15em] leading-tight uppercase">
                      AGENCIES
                    </span>
                    <span className="text-slate-500 font-medium text-[10px] md:text-xs tracking-[0.2em] leading-tight uppercase -mt-0.5">
                      LTD
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => !item.disabled && item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.disabled ? (
                    <div className="flex items-center space-x-1 text-gray-400 font-medium text-sm cursor-not-allowed">
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown className="h-4 w-4" />}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#22c55e] font-medium transition-colors duration-200 text-sm"
                    >
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown className="h-4 w-4" />}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:text-[#22c55e] hover:bg-gray-50 text-sm transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:020825461"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2 rounded-md font-medium text-sm transition-colors duration-200"
              >
                020 825461
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#22c55e] hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.disabled ? (
                      <div className="block text-gray-400 font-medium py-2 cursor-not-allowed">
                        {item.name}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-[#22c55e] font-medium py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-600 hover:text-[#22c55e] py-1 text-sm transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <a 
                    href="tel:020825461"
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-md font-medium w-full text-center block transition-colors duration-200"
                  >
                    Call 020 825461
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header