import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────────────────────
// 🔧 SETUP REQUIRED — EmailJS (free, no backend needed)
//
//  1. Go to https://www.emailjs.com and create a free account
//  2. Add a Service → choose Gmail → connect gtkrishna06@gmail.com
//  3. Create an Email Template with these variables:
//       {{from_name}}  {{from_email}}  {{message}}
//     Set "To Email" in the template to: gtkrishna06@gmail.com
//  4. Go to Account → API Keys → copy your Public Key
//  5. Replace the three placeholder strings below:
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'AbCdEfGhIjKlMnOp'

const contactInfo = [
  { icon: <FiMail />,  label: 'Email',    value: 'gtkrishna06@gmail.com', href: 'mailto:gtkrishna06@gmail.com' },
  { icon: <FiPhone />, label: 'Phone',    value: '+91 8332893828',         href: 'tel:+918332893828' },
  { icon: <FiMapPin />,label: 'Location', value: 'India',                  href: null },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/gtkrishna06', label: 'GitHub' },
  { icon: <FiMail />,   href: 'mailto:gtkrishna06@gmail.com',   label: 'Email' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Oops! Something went wrong. Please email me directly at gtkrishna06@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="tag">Let's Talk</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or a role that's a great fit? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's build something great together</h3>
            <p className="contact__info-text">
              I'm currently open to full-time opportunities and exciting freelance projects.
              Whether you need a senior frontend engineer, a micro-frontend architect, or
              just want to chat about web tech — reach out!
            </p>

            <div className="contact__details">
              {contactInfo.map(item => (
                <div key={item.label} className="contact-detail">
                  <div className="contact-detail__icon">{item.icon}</div>
                  <div>
                    <span className="contact-detail__label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-detail__value contact-detail__value--link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-detail__value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            ref={formRef}
            className="contact__form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about the role or project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <motion.button
              id="submit-contact"
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={loading || sent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? (
                <>✅ Message Sent! Check your inbox.</>
              ) : loading ? (
                <><span className="spinner" /> Sending...</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
