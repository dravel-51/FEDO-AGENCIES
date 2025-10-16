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
    { name: 'About Us', href: '/about', disabled: true },
    {
      name: 'Products',
      href: '/products',
      disabled: true,
      dropdown: [
        { name: 'Insecticides', href: '/products#insecticides' },
        { name: 'Fungicides', href: '/products#fungicides' },
        { name: 'Herbicides', href: '/products#herbicides' },
        { name: 'Fertilizers', href: '/products#fertilizers' },
        { name: 'All Products', href: '/products' },
      ]
    },
    { name: 'Contact', href: '/contact', disabled: true },
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
                <div>
                  <span className="text-[#22c55e] font-bold text-xl">Fedo</span>
                  <span className="text-gray-700 font-medium text-sm block leading-none">AGENCIES</span>
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

                  {/* Dropdown Menu - Only show for enabled items */}
                  {!item.disabled && item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <div
                          key={dropdownItem.name}
                          className="block px-4 py-2 text-gray-400 cursor-not-allowed text-sm"
                        >
                          {dropdownItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="bg-gray-400 text-white px-6 py-2 rounded-md font-medium text-sm cursor-not-allowed">
                020 825461
              </div>
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
                    {item.dropdown && item.disabled && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <div
                            key={dropdownItem.name}
                            className="block text-gray-400 py-1 text-sm cursor-not-allowed"
                          >
                            {dropdownItem.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-gray-400 text-white px-6 py-3 rounded-md font-medium w-full text-center block cursor-not-allowed">
                    Call 020 825461
                  </div>
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