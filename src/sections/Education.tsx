import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, certifications } from '@/data/portfolioData'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            Academic Background
          </span>
          <h2 className="section-title mt-2">Education & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-8 relative overflow-hidden card-shine h-full"
              style={{ borderColor: 'rgba(124, 58, 237, 0.2)' }}
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400" />

              {/* University badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400/20 to-secondary-500/20 border border-primary-400/30 flex items-center justify-center">
                  <span className="font-mono font-bold text-primary-400 text-xs tracking-widest">FAST</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">{education.degree}</h3>
                  <p className="text-primary-400 text-sm mt-1 font-medium">{education.university}</p>
                  <p className="text-text-muted text-xs">{education.location}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary-400/10 border border-primary-400/20 text-center flex flex-col justify-center items-center">
                  <div className="text-lg font-display font-bold gradient-text leading-tight">
                    Silver Medalist
                  </div>
                  <div className="text-xs text-text-secondary mt-1">Academic Honor</div>
                </div>
                <div className="p-4 rounded-xl bg-accent-400/10 border border-accent-400/20 text-center flex flex-col justify-center items-center">
                  <div className="text-2xl font-display font-bold text-accent-400">
                    2022–26
                  </div>
                  <div className="text-xs text-text-secondary mt-1">Duration</div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Academic Highlights</h4>
                <ul className="space-y-2">
                  {education.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary-400 mt-0.5 flex-shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-white font-display font-bold text-lg mb-2">
              Certifications & Honors
            </h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="glass-card p-5 flex items-center gap-4 card-shine group"
                style={{ borderColor: `${cert.color}25` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <span
                    className="font-mono font-black text-xs tracking-widest"
                    style={{ color: cert.color }}
                  >
                    {cert.badge}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                  <p className="text-text-secondary text-xs mt-0.5">{cert.issuer}</p>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full mt-1 inline-block"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.year}
                  </span>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 group-hover:animate-pulse"
                  style={{ background: cert.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
