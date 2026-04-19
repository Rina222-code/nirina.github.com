import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#top" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">nirina</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Nirina. Crafted with care.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social" data-hover aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social" data-hover aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social" data-hover aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
          <button className="back-to-top" onClick={scrollTop} data-hover aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
