import { useInView } from '../hooks/useInView'
import './Skills.css'

const categories = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GraphQL'],
  },
  {
    title: 'Backend',
    color: 'orange',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'DevOps & Cloud',
    color: 'green',
    skills: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux', 'Supabase'],
  },
  {
    title: 'Design',
    color: 'pink',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'UX Research', 'Motion Design', 'Accessibility'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section skills-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`skills-header ${inView ? 'visible' : ''} fade-up`}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A curated stack of modern tools I use to build exceptional digital products.
          </p>
        </div>

        <div className={`skills-grid ${inView ? 'visible' : ''}`}>
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`skill-card skill-card--${cat.color}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="skill-card-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
