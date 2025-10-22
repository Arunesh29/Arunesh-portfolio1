import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App