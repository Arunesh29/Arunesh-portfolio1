import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I will get back to you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@devis.dev',
      link: 'mailto:hello@devis.dev'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Hanoi, Vietnam',
      link: null
    },
    {
      icon: '💼',
      title: 'Availability',
      value: 'Open for new projects',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="glass-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="contact-link">{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Dribbble</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className="submit-message">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact