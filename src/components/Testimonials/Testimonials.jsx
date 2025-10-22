import React, { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="fade-up" aria-labelledby="testimonials-heading">
      <div className="section-head">
        <div>
          <h2 id="testimonials-heading">Testimonials</h2>
          <p className="muted">What clients say</p>
        </div>
      </div>

      <div className="carousel-container">
        <div 
          className="carousel" 
          id="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial" 
              aria-live={index === currentSlide ? 'polite' : 'off'}
              aria-hidden={index !== currentSlide}
            >
              <div className="t-avatar">{testimonial.initials}</div>
              <div className="t-card">
                <strong>{testimonial.name} — {testimonial.position}</strong>
                <p className="muted">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="filter-btn" onClick={prevSlide} aria-label="Previous testimonial">
            Prev
          </button>
          <button className="filter-btn" onClick={nextSlide} aria-label="Next testimonial">
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials