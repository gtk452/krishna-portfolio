import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayers, FiZap, FiShield } from 'react-icons/fi'

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '3', label: 'Global Companies' },
  { value: '5+', label: 'Domains Served' },
  { value: '1', label: 'Azure Certification' },
]

const traits = [
  { icon: <FiLayers />, title: 'Micro-Frontend Expert', desc: 'Architect scalable micro-frontend systems with independent plugin-based deployments.' },
  { icon: <FiCode />, title: 'Component-Driven Dev', desc: 'Building reusable, maintainable UI with React, Svelte, Next.js, and Styled Components.' },
  { icon: <FiZap />, title: 'Performance-First', desc: 'Obsessed with load time, responsiveness, and real-time experiences via WebSockets.' },
  { icon: <FiShield />, title: 'Accessibility (WCAG)', desc: 'Ensuring inclusive, screen-reader friendly UIs compliant with WCAG standards.' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A frontend engineer who loves building things that scale and delight users.
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              I'm <strong>G Tirumala Krishna</strong>, a Senior Frontend Engineer with 7+ years of
              experience building scalable, high-performance web applications for global enterprises.
            </p>
            <p>
              My work spans domains including <strong>education</strong> (Pearson),{' '}
              <strong>supply chain</strong> (Coforge), and <strong>enterprise software</strong>{' '}
              (Accenture). I specialize in{' '}
              <strong>React, Next.js, Svelte, and Angular</strong>, with deep expertise in
              micro-frontend architecture and real-time integrations.
            </p>
            <p>
              Outside of work, I enjoy exploring new frontend technologies, contributing to open-source,
              and solving challenging UI engineering problems. I hold a{' '}
              <strong>Microsoft Azure Fundamentals (AZ-900)</strong> certification.
            </p>
            <div className="about__actions">
              <a href="mailto:gtkrishna06@gmail.com" className="btn btn-primary">
                Contact Me
              </a>
              <a href="https://github.com/gtkrishna06" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about__traits"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                className="trait-card card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="trait-icon">{t.icon}</div>
                <div>
                  <h4 className="trait-title">{t.title}</h4>
                  <p className="trait-desc">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
