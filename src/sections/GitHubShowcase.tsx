import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi'
import { projects, personalInfo } from '@/data/portfolioData'

export default function GitHubShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            Open Source
          </span>
          <h2 className="section-title mt-2">GitHub Showcase</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
          <p className="section-subtitle mt-4">
            Explore my QA projects and contributions on GitHub.
          </p>
        </motion.div>

        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center">
              <FiGithub size={36} className="text-white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-display font-bold text-white">kashaffatima-ops</h3>
              <p className="text-text-secondary text-sm mt-1">Software Quality Assurance Engineer · Islamabad, Pakistan</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                {[
                  { label: 'QA Projects', value: '5+' },
                  { label: 'Repos', value: '10+' },
                  { label: 'Languages', value: '6+' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg font-bold gradient-text">{s.value}</div>
                    <div className="text-xs text-text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-400 to-secondary-500 text-white font-semibold rounded-xl shadow-glow flex items-center gap-2"
            >
              <FiGithub size={16} />
              View Profile
              <FiExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>

        {/* Featured repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-5 group card-shine flex flex-col"
              style={{ borderColor: `${project.categoryColor}20` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <FiGitBranch size={18} style={{ color: project.categoryColor }} />
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <FiStar size={12} />
                    {project.metrics[0]?.value}
                  </span>
                </div>
              </div>

              {/* Repo name */}
              <h4 className="text-white font-semibold text-sm group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 flex-1 mb-3">
                {project.description}
              </p>

              {/* Languages */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded-full"
                    style={{ background: `${project.categoryColor}15`, color: project.categoryColor }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub contribution embed hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center"
        >
          <img
            src={`https://ghchart.rshah.org/7C3AED/kashaffatima-ops`}
            alt="GitHub Contribution Chart"
            className="mx-auto rounded-xl opacity-80 hover:opacity-100 transition-opacity max-w-full"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
