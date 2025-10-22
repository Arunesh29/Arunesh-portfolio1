import React from 'react'
import { services } from '../../data/services'
import './Services.css'

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="section-header">
          <h2>What I Do</h2>
          <p className="section-subtitle">
            Comprehensive services to bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-tech">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services