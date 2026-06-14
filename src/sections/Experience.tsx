import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi'
import { experience } from '@/data/portfolioData'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            My Journey
          </span>
          <h2 className="section-title mt-2">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              className="timeline-line w-full h-full"
            />
          </div>

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 pl-12 md:pl-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.15, type: 'spring' }}
                      className="w-5 h-5 rounded-full border-2 border-primary-400 bg-background shadow-glow flex items-center justify-center"
                      style={{ borderColor: exp.color }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="glass-card p-6 card-shine relative overflow-hidden group"
                      style={{ borderColor: `${exp.color}20` }}
                    >
                      {/* Glow accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                      />

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
                            style={{ background: `${exp.color}20`, color: exp.color }}
                          >
                            {exp.type}
                          </span>
                          <h3 className="text-lg font-display font-bold text-white">{exp.title}</h3>
                          <p className="text-primary-400 font-medium text-sm mt-1 flex items-center gap-1">
                            <FiMapPin size={12} />
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-text-muted text-xs font-mono mb-4">
                        <FiCalendar size={12} />
                        {exp.duration}
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, j) => (
                          <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                            <FiChevronRight
                              size={14}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: exp.color }}
                            />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-full font-mono"
                            style={{ background: `${exp.color}15`, color: exp.color }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
