import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Contact']

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">nirina</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="navbar-link">
              {l}
            </a>
          ))}
          <a href="#contact" className="navbar-cta" data-hover>
            Hire me
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={() => setOpen(false)}
        >
          Hire me
        </a>
      </div>
    </header>
  )
}
