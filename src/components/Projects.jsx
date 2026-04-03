import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiSvelte, SiAngular, SiNodedotjs, SiMongodb, SiDocker, SiStyledcomponents } from 'react-icons/si'

const allProjects = [
  {
    id: 1,
    title: 'EduShell — Micro-Frontend Platform',
    desc: 'A large-scale education platform with plugin-based micro-frontend architecture. Each feature is an independently deployed module, enabling parallel development across teams — inspired by work at Pearson.',
    tags: ['React', 'Next.js', 'Micro-Frontend'],
    icons: [<SiReact />, <SiNextdotjs />, <SiStyledcomponents />],
    category: 'Education',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
  {
    id: 2,
    title: 'SvelteLearn — LMS Dashboard',
    desc: 'An interactive Learning Management System built with Svelte and Node.js. Features real-time progress tracking, WebSocket-powered live notifications, and WCAG-compliant UI components.',
    tags: ['Svelte', 'Node.js', 'WebSockets'],
    icons: [<SiSvelte />, <SiNodedotjs />],
    category: 'Education',
    gradient: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
  {
    id: 3,
    title: 'SupplyFlow Analytics Dashboard',
    desc: 'A data-driven supply chain analytics dashboard built with React and integrated with Azure. Provides real-time visibility into logistics, inventory, and operational workflows for enterprise teams.',
    tags: ['React', 'Node.js', 'Azure'],
    icons: [<SiReact />, <SiNodedotjs />, <SiDocker />],
    category: 'Supply Chain',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
  {
    id: 4,
    title: 'CloudTrack — Azure Deployment Manager',
    desc: 'A DevOps-friendly application for managing Azure deployments, monitoring cloud resources, and setting up auto-scaling alerts. Built with React and the Azure SDK.',
    tags: ['React', 'Azure', 'Node.js'],
    icons: [<SiReact />, <SiDocker />, <SiNodedotjs />],
    category: 'Supply Chain',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
  {
    id: 5,
    title: 'AccessiUI — WCAG Component Library',
    desc: 'A custom React component library built with full WCAG 2.1 accessibility compliance. Includes keyboard navigation, ARIA labels, screen reader support, and color contrast checks.',
    tags: ['React', 'Styled Components', 'WCAG'],
    icons: [<SiReact />, <SiStyledcomponents />],
    category: 'Open Source',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
  {
    id: 6,
    title: 'EnterprisePro — Angular ERP UI',
    desc: 'A full-featured ERP front-end built with Angular (2+) for an enterprise client at Accenture. Handles complex form workflows, data tables, dynamic theming, and REST API integrations.',
    tags: ['Angular', 'MongoDB', 'REST APIs'],
    icons: [<SiAngular />, <SiMongodb />],
    category: 'Open Source',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
    github: 'https://github.com/gtk452',
    live: '#',
  },
]

const filters = ['All', 'Education', 'Supply Chain', 'Open Source']

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of enterprise apps, open-source tools, and domain-specific solutions I've built.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map(f => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(' ', '-')}`}
              className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div
                  className="project-card__banner"
                  style={{ background: project.gradient }}
                >
                  <div className="project-card__icons">
                    {project.icons.map((icon, idx) => (
                      <span key={idx} className="project-icon">{icon}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card__body">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.desc}</p>

                  <div className="project-card__tags">
                    {project.tags.map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary">
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
