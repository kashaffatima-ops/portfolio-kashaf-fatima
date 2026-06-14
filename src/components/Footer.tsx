import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
} from 'react-icons/fi'
import { personalInfo } from '@/data/portfolioData'

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    {
      href: personalInfo.github,
      icon: <FiGithub size={20} />,
      label: 'GitHub',
      color: '#60A5FA',
    },
    {
      href: personalInfo.linkedin,
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      color: '#3B82F6',
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: <FiMail size={20} />,
      label: 'Email',
      color: '#93C5FD',
    },
  ]

  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden">
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}
              >
                <span className="text-white font-bold text-sm font-mono">KF</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">QA Engineer</p>
                <p className="text-xs text-text-secondary font-mono">Portfolio</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest font-mono">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className="text-text-secondary hover:text-primary-400 transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons only */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest font-mono">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 text-text-secondary transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`
                    ;(e.currentTarget as HTMLElement).style.color = s.color
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${s.color}30`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                    ;(e.currentTarget as HTMLElement).style.color = '#94A3B8'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1.5 font-mono">
            Crafted with precision for quality engineering
          </p>
        </div>
      </div>
    </footer>
  )
}
