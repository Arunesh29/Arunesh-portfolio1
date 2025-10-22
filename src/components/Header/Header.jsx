import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    document.getElementById(targetId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <nav className="nav">
          {/* Logo */}
          <a 
            href="#home" 
            className="logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="logo-icon">AR</div>
            <span>Arunesh</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header