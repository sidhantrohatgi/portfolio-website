"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm shadow-md" : "bg-navy"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="#home"
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors flex items-center"
          >
            <span className="font-heading">Sidhant Rohatgi</span>
            <span className="cat-icon ml-2 w-5 h-5 opacity-70"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8 mr-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-white transition-colors font-medium link-underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-navy font-medium rounded-lg hover:bg-lightblue transition-all duration-300 flex items-center text-sm"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-200 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-light shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

