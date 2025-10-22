import React from 'react'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <button 
      className={`scroll-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTop