import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner container">
        <Link to="hero" smooth duration={600} className="navbar__logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">GTK</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                className="navbar__link"
                activeClass="navbar__link--active"
                spy
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/G_Tirumala_Krishna_Resume.pdf"
          download
          className="btn btn-outline navbar__resume"
        >
          <FiDownload /> Resume
        </a>

        <Link to="contact" smooth duration={600} className="btn btn-primary navbar__cta">
          Hire Me
        </Link>

        <button
          id="mobile-menu-btn"
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contact"
              smooth
              duration={600}
              className="btn btn-primary"
              style={{ marginTop: '1rem', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
