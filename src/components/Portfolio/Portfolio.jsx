import React, { useState } from 'react'
import { projects } from '../../data/projects'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="portfolio">
      <div className="wrap">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="btn project-btn">View Project</button>
                    <button className="btn btn-secondary project-btn">Details</button>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.split(' • ').map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
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

export default Portfolio