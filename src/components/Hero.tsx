import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    const N = 60

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.alpha})`
        ctx.fill()
      })

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(56,189,248,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="top" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-content">
        <div className="hero-badge fade-up visible">
          <span className="badge-dot" />
          Available for work
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <br />
          <span className="hero-name">Nirina</span>
          <span className="hero-cursor-blink">_</span>
        </h1>

        <p className="hero-role">
          Full-Stack Developer <span className="role-sep">&amp;</span> UI Designer
        </p>

        <p className="hero-desc">
          I craft seamless digital experiences — from pixel-perfect interfaces
          to robust backend systems. Turning complex ideas into elegant solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary" data-hover>
            View my work
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-ghost" data-hover>
            Get in touch
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" data-hover aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" data-hover aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" data-hover aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <div className="scroll-wheel" />
      </a>
    </section>
  )
}
