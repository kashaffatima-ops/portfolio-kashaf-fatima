import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiZap, FiCpu, FiLayers, FiServer, FiUsers,
} from 'react-icons/fi'
import { skillCategories } from '@/data/portfolioData'

const iconMap: Record<string, React.ReactNode> = {
  testing: <FiZap size={22} />,
  automation: <FiCpu size={22} />,
  code: <FiCode size={22} />,
  dev: <FiLayers size={22} />,
  devops: <FiServer size={22} />,
  professional: <FiUsers size={22} />,
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            What I Know
          </span>
          <h2 className="section-title mt-2">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
          <p className="section-subtitle mt-4">
            Comprehensive expertise spanning QA methodologies, automation tools, and modern technologies.
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 group cursor-default card-shine relative overflow-hidden"
              style={{ borderColor: `${category.color}20` }}
            >
              {/* Top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${category.color}20`, color: category.color }}
                >
                  {iconMap[category.icon]}
                </div>
                <h3 className="font-display font-bold text-white text-sm">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 + j * 0.03 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 cursor-default"
                    style={{
                      background: `${category.color}10`,
                      color: category.color,
                      borderColor: `${category.color}25`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill count badge */}
              <div
                className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ background: `${category.color}15`, color: category.color }}
              >
                {category.skills.length}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Testing Methods', value: '11+', color: '#7C3AED' },
            { label: 'Languages', value: '8+', color: '#06B6D4' },
            { label: 'QA Tools', value: '4+', color: '#818CF8' },
            { label: 'Platforms', value: '5+', color: '#6366F1' },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card p-4 text-center"
              style={{ borderColor: `${item.color}20` }}
            >
              <div className="text-3xl font-display font-bold" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-text-secondary text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
