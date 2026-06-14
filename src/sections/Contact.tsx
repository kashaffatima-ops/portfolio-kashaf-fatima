import { useRef, useState, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
} from 'react-icons/fi'
import { personalInfo } from '@/data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }

    setSending(true)
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        // Demo mode - show success without sending
        await new Promise((r) => setTimeout(r, 1500))
        toast.success('Message received! (Configure EmailJS to enable email delivery)')
        setFormData({ name: '', email: '', subject: '', message: '' })
        return
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      toast.error('Failed to send message. Please try again or email directly.')
    } finally {
      setSending(false)
    }
  }

  const contactItems = [
    {
      icon: <FiMail size={18} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#7C3AED',
    },
    {
      icon: <FiMapPin size={18} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: '#06B6D4',
    },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn',
      value: 'kashaf-fatima',
      href: personalInfo.linkedin,
      color: '#818CF8',
    },
    {
      icon: <FiGithub size={18} />,
      label: 'GitHub',
      value: 'kashaffatima-ops',
      href: personalInfo.github,
      color: '#6366F1',
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-400/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm uppercase tracking-widest">
            Let's Connect
          </span>
          <h2 className="section-title mt-2">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mx-auto mt-4" />
          <p className="mt-6 text-xl md:text-2xl font-display font-semibold gradient-text">
            Open to collaborate and build quality software.
          </p>
          <p className="section-subtitle mt-3">
            Open to QA Engineer roles, internships, freelance projects, and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">Contact Information</h3>

            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 6 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card hover:border-primary-400/30 transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-mono">{item.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-mono">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <h3 className="text-xl font-display font-bold text-white mb-2">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="text-sm text-text-secondary mb-1.5 block">
                  Name <span className="text-primary-400">*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted text-sm focus:outline-none focus:border-primary-400/60 focus:bg-primary-400/5 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-text-secondary mb-1.5 block">
                  Email <span className="text-primary-400">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted text-sm focus:outline-none focus:border-primary-400/60 focus:bg-primary-400/5 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm text-text-secondary mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration / etc."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted text-sm focus:outline-none focus:border-primary-400/60 focus:bg-primary-400/5 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-text-secondary mb-1.5 block">
                  Message <span className="text-primary-400">*</span>
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-text-muted" size={16} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted text-sm focus:outline-none focus:border-primary-400/60 focus:bg-primary-400/5 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 168, 255, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-primary-400 to-secondary-500 text-white font-semibold rounded-xl shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
