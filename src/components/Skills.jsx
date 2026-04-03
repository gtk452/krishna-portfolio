import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiReact, SiNextdotjs, SiSvelte, SiAngular,
  SiJavascript, SiHtml5, SiCss, SiBootstrap,
  SiNodedotjs, SiMongodb, SiDocker, SiStyledcomponents,
  SiJest, SiSelenium, SiTypescript, SiWebpack, SiGit,
} from 'react-icons/si'

const skillCategories = [
  {
    name: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 88 },
      { name: 'Svelte', icon: <SiSvelte />, level: 82 },
      { name: 'Angular (2+)', icon: <SiAngular />, level: 80 },
    ],
  },
  {
    name: 'Core Web',
    color: '#06b6d4',
    skills: [
      { name: 'JavaScript ES6+', icon: <SiJavascript />, level: 95 },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS3 / Bootstrap', icon: <SiCss />, level: 90 },
      { name: 'Styled Components', icon: <SiStyledcomponents />, level: 88 },
    ],
  },
  {
    name: 'Backend & Cloud',
    color: '#ec4899',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      { name: 'Docker / CI-CD', icon: <SiDocker />, level: 72 },
      { name: 'Jest / Enzyme', icon: <SiJest />, level: 82 },
    ],
  },
]

const techCloud = [
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiSelenium />, name: 'Selenium' },
  { icon: <SiWebpack />, name: 'Webpack' },
  { icon: <SiGit />, name: 'Git / GitHub' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <SiDocker />, name: 'Azure AZ-900' },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="tag">Technical Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and frameworks I've used to build enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="card skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
            >
              <h3 className="skill-category__name" style={{ color: cat.color }}>
                {cat.name}
              </h3>
              <div className="skill-list">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__header">
                      <span className="skill-item__icon" style={{ color: cat.color }}>
                        {skill.icon}
                      </span>
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar__fill"
                        style={{ background: cat.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: ci * 0.15 + si * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tech-cloud"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="tech-cloud__label">Also familiar with</p>
          <div className="tech-cloud__items">
            {techCloud.map((t, i) => (
              <motion.div
                key={t.name}
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                {t.icon}
                <span>{t.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
