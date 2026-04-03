import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiCheckCircle, FiXCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_f0x3d19'
const EMAILJS_TEMPLATE_ID = 'template_h866wim'
const EMAILJS_PUBLIC_KEY  = 'KQlc6vKFm3tQP_8HT'

const contactInfo = [
  { icon: <FiMail />,   label: 'Email',    value: 'gtkrishna06@gmail.com', href: 'mailto:gtkrishna06@gmail.com' },
  { icon: <FiPhone />,  label: 'Phone',    value: '+91 8332893828',        href: 'tel:+918332893828' },
  { icon: <FiMapPin />, label: 'Location', value: 'India',                 href: null },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/gtk452', label: 'GitHub' },
  { icon: <FiMail />,   href: 'mailto:gtkrishna06@gmail.com',   label: 'Email'  },
]

/* ─── Toast Notification ─── */
function Toast({ type, message, onClose }) {
  return (
    <motion.div
      className={`toast toast--${type}`}
      initial={{ opacity: 0, y: -60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0,   scale: 1   }}
      exit={{    opacity: 0, y: -60, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <span className="toast__icon">
        {type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
      </span>
      <span className="toast__message">{message}</span>
      <button className="toast__close" onClick={onClose} aria-label="Close">✕</button>
    </motion.div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef(null)

  const [form, setForm]   = useState({ from_name: '', from_email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success'|'error', message }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ from_name: '', from_email: '', message: '' })
      showToast('success', '🎉 Your message was sent successfully! I\'ll get back to you soon.')
      setTimeout(() => setSent(false), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      showToast('error', 'Oops! Something went wrong. Please email me at gtkrishna06@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Toast Portal ── */}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

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
              {/* Success overlay */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    className="form-success-overlay"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="form-success-icon">✅</div>
                    <h3 className="form-success-title">Message Sent!</h3>
                    <p className="form-success-text">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  disabled={sent}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  disabled={sent}
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
                  disabled={sent}
                />
              </div>

              <motion.button
                id="submit-contact"
                type="submit"
                className={`btn contact__submit ${sent ? 'btn-success' : 'btn-primary'}`}
                disabled={loading || sent}
                whileHover={!sent && !loading ? { scale: 1.02 } : {}}
                whileTap={!sent && !loading ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  <><FiCheckCircle /> Submitted — Thank you!</>
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
    </>
  )
}
