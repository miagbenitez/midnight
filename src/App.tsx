import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import TechStack from './components/TechStack'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
