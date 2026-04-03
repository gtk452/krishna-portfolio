import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'Senior Analyst — Frontend Engineer',
    company: 'Valuelabs (Client: Pearson)',
    period: 'Aug 2024 – Present',
    desc: 'Contributing to large-scale education platforms (Workspace & Learnspace) for Pearson. Implemented a Micro-Frontend Architecture where features are built and managed as independent plugins, enabling scalability and parallel team development. Built reusable UI with Styled Components, integrated WebSockets for real-time interactions, and ensured WCAG accessibility compliance.',
    tags: ['React', 'Svelte', 'Next.js', 'Micro-Frontend', 'WebSockets', 'WCAG'],
    color: '#a855f7',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Coforge',
    period: 'Feb 2022 – Aug 2024',
    desc: 'Worked as a React Developer in the Supply Chain domain. Built data-driven dashboards and workflows improving operational visibility and analytics. Developed rich UIs with React 16+, JavaScript ES6, HTML5, and CSS3. Deployed and managed applications on Microsoft Azure, ensuring scalability and secure cloud hosting.',
    tags: ['React', 'Node.js', 'Microsoft Azure', 'Dashboard', 'Supply Chain'],
    color: '#06b6d4',
  },
  {
    role: 'Application Development Senior Analyst',
    company: 'Accenture',
    period: 'Aug 2018 – Feb 2022',
    desc: 'Designed and developed responsive web applications using React and Angular (2+) for complex enterprise requirements. Improved performance and scalability across 5+ applications. Built secure solutions integrating Node.js, MongoDB, and REST APIs. Ensured cross-browser compatibility and maintained brand consistency for global enterprise clients.',
    tags: ['React', 'Angular', 'Node.js', 'MongoDB', 'REST APIs'],
    color: '#ec4899',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="tag">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            7+ years delivering enterprise frontends across education, supply chain, and technology.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="timeline__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline__dot" style={{ background: exp.color }}>
                <div className="timeline__dot-inner" />
              </div>
              <div className="card timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <span className="timeline__company" style={{ color: exp.color }}>
                      {exp.company}
                    </span>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p className="timeline__desc">{exp.desc}</p>
                <div className="timeline__tags">
                  {exp.tags.map(t => (
                    <span key={t} className="timeline__tag" style={{ borderColor: exp.color, color: exp.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="timeline__line" />
        </div>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="education-title">Education & Certifications</h3>
          <div className="education-grid">
            <div className="card edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <h4 className="edu-degree">B.E. in Computer Science</h4>
                <p className="edu-school">Gitam University</p>
                <span className="edu-year">2014 – 2018</span>
              </div>
            </div>
            <div className="card edu-card">
              <div className="edu-icon">☁️</div>
              <div>
                <h4 className="edu-degree">Microsoft Azure Fundamentals</h4>
                <p className="edu-school">AZ-900 Certification</p>
                <span className="edu-year">Level 1</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
