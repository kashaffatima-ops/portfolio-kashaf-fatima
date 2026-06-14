import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import MouseGlow from '@/components/MouseGlow'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="app" className="relative min-h-screen bg-background overflow-x-hidden">
            <MouseGlow />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            <ScrollToTop />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#080D1A',
                  color: '#E2E8F0',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                },
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
