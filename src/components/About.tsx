import { useInView } from '../hooks/useInView'
import './About.css'

const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '30+', label: 'Projects delivered' },
  { value: '15+', label: 'Happy clients' },
  { value: '99%', label: 'Client satisfaction' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section about-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`about-grid ${inView ? 'visible' : ''}`}>
          <div className="about-image-col">
            <div className="about-img-wrap">
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nirina — Developer"
                className="about-img"
              />
              <div className="about-img-badge">
                <span className="badge-number">4+</span>
                <span className="badge-text">Years<br/>Experience</span>
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <span className="section-label">About me</span>
            <h2 className="section-title">
              Building products that<br />
              <span className="gradient-text">people love to use</span>
            </h2>
            <p className="about-para">
              I'm a full-stack developer with a passion for clean code and thoughtful
              design. I specialize in React, Node.js, and cloud architecture — delivering
              fast, scalable, and visually polished applications.
            </p>
            <p className="about-para">
              When I'm not coding, you'll find me exploring design systems, contributing
              to open source, or experimenting with new web technologies.
            </p>

            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary about-btn" data-hover>
              Let's work together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
