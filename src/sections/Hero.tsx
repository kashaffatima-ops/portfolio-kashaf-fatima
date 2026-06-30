import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '@/data/portfolioData'

// Soft floating particle — deep blue palette only
function Particle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'rgba(59, 130, 246, 0.7)',
        filter: 'blur(0.5px)',
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.05, 0.25, 0.05],
      }}
      transition={{
        duration: 7 + delay * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

// Slow-moving concentric ring (like planet orbits)
function OrbitRing({ size, duration, reverse = false }: { size: number; duration: number; reverse?: boolean }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        border: '1px solid rgba(37, 99, 235, 0.08)',
        top: '50%',
        left: '50%',
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
    >
      {/* Small dot orbiting the ring */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{
          background: 'rgba(59, 130, 246, 0.5)',
          top: -3,
          left: '50%',
          marginLeft: -3,
          boxShadow: '0 0 6px rgba(59, 130, 246, 0.4)',
        }}
      />
    </motion.div>
  )
}

// Floating tech label node — clean, minimal
function TechNode({ x, y, delay, label }: { x: string; y: string; delay: number; label: string }) {
  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -14, 0], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <div
          className="absolute inset-0 rounded-lg"
          style={{ border: '1px solid rgba(37, 99, 235, 0.2)', background: 'rgba(37, 99, 235, 0.04)' }}
        />
        <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: 'rgba(96, 165, 250, 0.5)' }}>
          {label}
        </span>
      </div>
    </motion.div>
  )
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
}))

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep dark background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #03050F 0%, #060B1A 50%, #03050F 100%)' }} />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Subtle central glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.5) 0%, transparent 70%)' }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Orbital rings centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrbitRing size={420} duration={40} />
        <OrbitRing size={620} duration={60} reverse />
        <OrbitRing size={820} duration={80} />
      </div>

      {/* Floating tech nodes — corners only */}
      <TechNode x="5%" y="20%" delay={0} label="QA" />
      <TechNode x="88%" y="15%" delay={1} label="CI" />
      <TechNode x="7%" y="72%" delay={2} label="API" />
      <TechNode x="84%" y="68%" delay={0.5} label="E2E" />
      <TechNode x="48%" y="5%" delay={1.5} label="BVA" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-4 leading-tight"
        >
          <span className="text-white">Kashaf </span>
          <span className="gradient-text text-glow">Fatima</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-secondary mb-6 h-12 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={personalInfo.roles.flatMap((role) => [role, 2200])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => handleScroll('projects')}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(30, 58, 138, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 bg-[#1E3A8A] text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 border border-blue-800/60 hover:bg-[#1e40af]"
          >
            <span>View Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => handleScroll('contact')}
            whileHover={{ scale: 1.04, borderColor: 'rgba(30, 58, 138, 0.7)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 border border-blue-900/40 text-blue-300 font-semibold rounded-xl hover:bg-blue-950/40 hover:border-blue-800/60 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { href: personalInfo.github, icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: <FiMail size={20} />, label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl glass border border-white/[0.06] flex items-center justify-center text-text-secondary hover:text-blue-400 hover:border-blue-800/40 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-14"
        >
          {[
            { value: '5+', label: 'QA Projects' },
            { value: '47+', label: 'Test Cases' },
            { value: '3.42', label: 'CGPA' },
            { value: 'AWS', label: 'Certified' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-blue-400 transition-colors"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
