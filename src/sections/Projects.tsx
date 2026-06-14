import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiBarChart2, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '@/data/portfolioData'

type Project = typeof projects[0]

// ── Orbital planet ring that floats behind the active project card ──
function OrbitalSystem({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Sun / core glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 rounded-full"
        style={{ background: `radial-gradient(circle, ${color}30 0%, transparent 70%)` }}
      />

      {/* Orbit ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{ width: 260, height: 260, border: `1px solid ${color}18` }}
      >
        {/* Planet on ring 1 */}
        <div
          className="absolute w-3 h-3 rounded-full top-[-6px] left-1/2 -translate-x-1/2"
          style={{ background: color, boxShadow: `0 0 10px ${color}60` }}
        />
      </motion.div>

      {/* Orbit ring 2 — reverse */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{ width: 380, height: 380, border: `1px dashed ${color}10` }}
      >
        {/* Planet on ring 2 */}
        <div
          className="absolute w-2 h-2 rounded-full top-[-4px] left-1/2 -translate-x-1/2"
          style={{ background: `${color}80`, boxShadow: `0 0 6px ${color}40` }}
        />
      </motion.div>

      {/* Orbit ring 3 — slower */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{ width: 520, height: 520, border: `1px solid ${color}08` }}
      >
        <div
          className="absolute w-1.5 h-1.5 rounded-full bottom-[-3px] left-1/2 -translate-x-1/2"
          style={{ background: `${color}50` }}
        />
      </motion.div>
    </div>
  )
}

// ── Detail Modal ──
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const color = project.categoryColor

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', damping: 22 }}
        className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        style={{ borderColor: `${color}25` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header band */}
        <div className="p-6 border-b border-white/[0.04]" style={{ background: `${color}08` }}>
          <div className="flex items-start justify-between">
            <div>
              <span
                className="text-xs font-mono px-2 py-1 rounded-full mb-3 inline-block"
                style={{ background: `${color}18`, color }}
              >
                {project.category}
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-2">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-text-secondary leading-relaxed">{project.description}</p>

          {/* Metrics */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
              <FiBarChart2 style={{ color }} /> Key Metrics
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 rounded-xl text-center"
                  style={{ background: `${color}0C`, border: `1px solid ${color}18` }}
                >
                  <div className="text-xl font-bold font-display" style={{ color }}>{metric.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
              <FiCheck style={{ color }} /> Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg"
                  style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all"
            style={{ background: `${color}14`, border: `1px solid ${color}30`, color }}
          >
            <FiGithub size={18} /> View on GitHub <FiExternalLink size={14} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Main Projects Section ──
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [showModal, setShowModal] = useState(false)

  const categories = ['All', 'Manual Testing & Defect Analysis', 'Test Design & QA Documentation', 'Automation Testing & Code Quality']

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  const goNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % filtered.length)
  }

  const goPrev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }

  const currentProject = filtered[currentIndex]
  const color = currentProject?.categoryColor ?? '#2563EB'

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(circle, ${color}06 0%, transparent 70%)` }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">My Work</span>
          <h2 className="section-title mt-2">QA Projects</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-4" />
          <p className="section-subtitle mt-4">
            Real-world QA projects showcasing testing expertise, automation skills, and quality engineering practices.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-blue-900/60 text-blue-300 border border-blue-700/60'
                  : 'glass border border-white/[0.06] text-text-secondary hover:text-white hover:border-blue-800/40'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="text-text-muted font-mono text-xs uppercase tracking-widest">Project</span>
          <span className="text-blue-400 font-display font-bold text-lg">{currentIndex + 1}</span>
          <span className="text-text-muted font-mono text-xs">/</span>
          <span className="text-text-muted font-mono text-sm">{filtered.length}</span>
        </motion.div>

        {/* Main card carousel */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          {/* Orbital system behind card */}
          <OrbitalSystem color={color} />

          <AnimatePresence custom={direction} mode="wait">
            {currentProject && (
              <motion.div
                key={currentProject.id + activeFilter}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 w-full max-w-2xl mx-auto"
              >
                <div
                  className="glass-card overflow-hidden cursor-pointer group"
                  style={{ borderColor: `${color}22` }}
                  onClick={() => setShowModal(true)}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-0.5 w-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
                  />

                  {/* Card body */}
                  <div className="p-8">
                    {/* Category + featured */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ background: `${color}14`, color }}
                      >
                        {currentProject.category}
                      </span>
                      {currentProject.featured && (
                        <span
                          className="text-xs font-mono px-2 py-0.5 border rounded-full"
                          style={{ borderColor: `${color}30`, color: `${color}`, background: `${color}0C` }}
                        >
                          FEATURED
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {currentProject.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                      {currentProject.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {currentProject.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center py-2.5 rounded-xl"
                          style={{ background: `${color}0A`, border: `1px solid ${color}15` }}
                        >
                          <div className="text-base font-bold" style={{ color }}>{m.value}</div>
                          <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg"
                          style={{ background: `${color}0C`, color }}
                        >
                          {tech}
                        </span>
                      ))}
                      {currentProject.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-text-muted">
                          +{currentProject.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                      <button
                        className="text-sm font-medium transition-colors"
                        style={{ color }}
                        onClick={(e) => { e.stopPropagation(); setShowModal(true) }}
                      >
                        View Details →
                      </button>
                      <motion.a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-blue-700/40 text-text-secondary hover:text-blue-300 transition-all"
                      >
                        <FiGithub size={13} /> GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goPrev}
            disabled={filtered.length <= 1}
            className="w-12 h-12 rounded-full glass border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-blue-700/40 transition-all disabled:opacity-30"
          >
            <FiChevronLeft size={20} />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {filtered.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 'right' : 'left')
                  setCurrentIndex(i)
                }}
                animate={{
                  width: i === currentIndex ? 24 : 8,
                  background: i === currentIndex ? color : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goNext}
            disabled={filtered.length <= 1}
            className="w-12 h-12 rounded-full glass border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-blue-700/40 transition-all disabled:opacity-30"
          >
            <FiChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {showModal && currentProject && (
        <ProjectModal project={currentProject} onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}
