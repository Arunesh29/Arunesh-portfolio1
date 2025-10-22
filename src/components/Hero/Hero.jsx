import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    
    <section id="home" className="hero">
      
      <div className="hero-background">
        <div className="hero-glow"></div>
      </div>
      
      <div className="wrap">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-main">
            <br>
      </br>
      <br>
      </br>
            <div className="hero-badge">
              
              <span>👋 Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              Arunesh 
            </h1>
            
            <h2 className="hero-subtitle">
              Frontend Developer & UI/UX Designer
            </h2>
            
            <p className="hero-description">
              I create exceptional digital experiences that blend beautiful design 
              with seamless functionality. Specializing in modern web technologies 
              and user-centered design principles.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Stats */}
         
        </div>
      </div>
    </section>
  )
}

export default Hero