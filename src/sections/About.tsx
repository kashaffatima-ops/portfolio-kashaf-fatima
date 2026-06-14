import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiTarget, FiZap, FiAward } from 'react-icons/fi'
import { personalInfo } from '@/data/portfolioData'

const highlights = [
  {
    icon: <FiTarget size={24} />,
    title: 'QA First Mindset',
    desc: 'Deep focus on quality, precision, and delivering reliable software through rigorous testing.',
    color: '#7C3AED',
  },
  {
    icon: <FiCode size={24} />,
    title: 'Technical Depth',
    desc: 'Proficient in Cypress, JUnit, Jira, and comprehensive test automation methodologies.',
    color: '#06B6D4',
  },
  {
    icon: <FiZap size={24} />,
    title: 'Fast Learner',
    desc: 'Quickly adapts to new tools, frameworks, and testing environments with a growth mindset.',
    color: '#818CF8',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Academic Excellence',
    desc: "Dean's List honoree and Silver Medal recipient with a CGPA of 3.37/4.00 at FAST NUCES.",
    color: '#6366F1',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            Get to Know Me
          </span>
          <h2 className="section-title mt-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Profile card */}
            <div className="glass-card p-8 relative overflow-hidden card-shine">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-400/10 to-transparent rounded-bl-3xl" />

              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-4xl font-bold text-white shadow-glow">
                    KF
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-1.5 rounded-3xl border border-dashed border-primary-400/30"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-primary-400 font-mono text-sm">{personalInfo.title}</p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                {personalInfo.summary.split('\n\n').map((para, i) => (
                  <p key={i} className="text-text-secondary text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Info tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  'Islamabad, Pakistan',
                  'FAST NUCES',
                  'AWS Certified',
                  '3.37 CGPA',
                ].map((tag) => (
                  <span key={tag} className="tech-badge text-xs">{tag}</span>
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass-card p-4 border border-primary-400/20"
            >
              <div className="text-2xl font-bold gradient-text">3.37</div>
              <div className="text-xs text-text-secondary">CGPA / 4.00</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -left-6 glass-card p-4 border border-accent-400/20"
            >
              <div className="text-2xl font-bold gradient-text">47+</div>
              <div className="text-xs text-text-secondary">Test Cases</div>
            </motion.div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 group cursor-default card-shine"
                style={{ borderColor: `${h.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${h.color}15`, color: h.color }}
                >
                  {h.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{h.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
