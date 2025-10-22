import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Git & GitHub', level: 85 }
  ]

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="glass-card">
              <h3>My Journey</h3>
              <p>
                I'm a frontend developer, My passion lies in solving complex problems with elegant solutions 
                that provide exceptional user experiences. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
              
              <div className="about-highlights">
                <div className="highlight">
                  <div className="highlight-icon">🎯</div>
                  <div>
                    <h4>User-Focused</h4>
                    <p>Creating intuitive and engaging user experiences</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">⚡</div>
                  <div>
                    <h4>Performance</h4>
                    <p>Optimized solutions for fast loading times</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">🔧</div>
                  <div>
                    <h4>Clean Code</h4>
                    <p>Maintainable and scalable architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <div className="glass-card">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About