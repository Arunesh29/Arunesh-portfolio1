import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-item')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('stagger-item')) {
            const index = Array.from(entry.target.parentElement.children).indexOf(entry.target)
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 100)
          } else {
            entry.target.classList.add('visible')
          }
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])
}