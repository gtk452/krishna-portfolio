import { Link } from 'react-scroll'
import { FiGithub, FiMail, FiHeart, FiLinkedin } from 'react-icons/fi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/gtkrishna06', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/gudla-tirumala-krishna-ab5a28116/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:gtkrishna06@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="hero" smooth duration={600} className="footer__logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">GTK</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <nav className="footer__nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-70}
              className="footer__nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map(s => (
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
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Designed & built with <FiHeart className="heart-icon" /> by{' '}
          <span className="gradient-text">G Tirumala Krishna</span> &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
