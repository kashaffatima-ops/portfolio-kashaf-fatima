import { motion } from 'framer-motion'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Education from '@/sections/Education'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </motion.main>
  )
}
