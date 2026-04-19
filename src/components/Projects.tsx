import { ExternalLink, Github } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Projects.css'

const projects = [
  {
    title: 'Flo — Finance Dashboard',
    description: 'A real-time financial analytics platform with interactive charts, budget tracking, and AI-powered insights for personal finance management.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'Pulse — Social Platform',
    description: 'A modern social platform focused on developer communities — with live code sharing, discussions, and collaborative coding sessions.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'WebSockets', 'Redis', 'AWS'],
    featured: false,
  },
  {
    title: 'Craft — E-commerce',
    description: 'A boutique e-commerce experience for artisan goods, featuring 3D product previews, seamless checkout, and inventory management.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Stripe', 'Three.js', 'Supabase'],
    featured: false,
  },
  {
    title: 'Atlas — Travel App',
    description: 'An intelligent travel companion app that curates personalized itineraries, local recommendations, and real-time weather integration.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Maps API', 'Python', 'ML'],
    featured: false,
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section projects-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`projects-header fade-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of work that showcases my range across design, engineering, and product.
          </p>
        </div>

        <div className={`projects-list ${inView ? 'visible' : ''}`}>
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`project-card ${p.featured ? 'project-card--featured' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} className="project-img" loading="lazy" />
                <div className="project-img-overlay" />
                <div className="project-actions">
                  <button className="project-action" data-hover aria-label="View on GitHub">
                    <Github size={17} />
                  </button>
                  <button className="project-action" data-hover aria-label="Live demo">
                    <ExternalLink size={17} />
                  </button>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
