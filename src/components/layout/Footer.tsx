'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const siteMapLinks = [
    { name: 'Homepage', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources & News', href: '/resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Portal', href: '/portal' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Services', href: '/terms' },
    { name: 'Lawyer\'s Corners', href: '/legal' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      className="bg-[#1f4e3d] text-white relative"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15v-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/logo.webp" 
                  alt="Fedo Agencies Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-8 object-contain" 
                />
                <span className="text-2xl font-bold">FEDO AGENCIES</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Providing innovative agricultural solutions and quality products to enhance 
                farming productivity and sustainable agriculture practices.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Site Map */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Site Map</h4>
              <ul className="space-y-3">
                {siteMapLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Back to Top Button */}
              <div className="mt-8">
                <button 
                  onClick={scrollToTop}
                  className="bg-green-600 hover:bg-orange-500 text-white px-4 py-2 rounded transition-colors duration-300 flex items-center space-x-2"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>BACK TO TOP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="text-gray-300 text-sm">
              Copyright © 2024, Fedo Agencies Limited. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer