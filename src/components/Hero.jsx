import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiMail, FiArrowDown, FiLinkedin } from 'react-icons/fi'

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/gtkrishna06', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/gudla-tirumala-krishna-ab5a28116/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:gtkrishna06@gmail.com', label: 'Email' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__greeting">
            <span className="tag">👋 Open to opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__name">
            Hi, I'm <span className="gradient-text">Tirumala Krishna</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero__role">
            <span className="hero__role-prefix">I build </span>
            <TypeAnimation
              sequence={[
                'scalable React apps',
                2000,
                'micro-frontend systems',
                2000,
                'real-time WebSocket UIs',
                2000,
                'WCAG-accessible platforms',
                2000,
                'Next.js & Svelte apps',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__role-typed"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="hero__bio">
            Senior Frontend Engineer with <strong>7+ years</strong> of experience crafting
            high-performance, accessible web applications for global clients in education,
            supply chain, and healthcare.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <Link to="projects" smooth duration={600} offset={-70} className="btn btn-primary">
              View My Work
            </Link>
            <Link to="contact" smooth duration={600} offset={-70} className="btn btn-outline">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="hero__avatar-ring" />
          <div className="hero__avatar-ring hero__avatar-ring--2" />
          <div className="hero__avatar">
            <span>GTK</span>
          </div>
          <div className="hero__avatar-badge hero__avatar-badge--1">React</div>
          <div className="hero__avatar-badge hero__avatar-badge--2">Next.js</div>
          <div className="hero__avatar-badge hero__avatar-badge--3">Svelte</div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="about" smooth duration={600} offset={-70} className="scroll-hint">
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
