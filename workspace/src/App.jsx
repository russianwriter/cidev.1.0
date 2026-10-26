import { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import LogoCloud from './components/sections/LogoCloud'
import Manifesto from './components/sections/Manifesto'
import ServicesGrid from './components/sections/ServicesGrid'
import ProcessTimeline from './components/sections/ProcessTimeline'
import CaseStudies from './components/sections/CaseStudies'
import StatsSection from './components/sections/StatsSection'
import TechStack from './components/sections/TechStack'
import TestimonialsCarousel from './components/sections/TestimonialsCarousel'
import CTASection from './components/sections/CTASection'

const Portfolio = lazy(() => import('./pages/Portfolio'))

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
          <Hero />
          <Manifesto />
          <LogoCloud />
          <ServicesGrid />
          <ProcessTimeline />
          <CaseStudies />
          <StatsSection />
          <TechStack />
          <TestimonialsCarousel />
          <CTASection />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-canvas font-body text-fg-soft">
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portfolio"
              element={
                <Suspense fallback={null}>
                  <Portfolio />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
