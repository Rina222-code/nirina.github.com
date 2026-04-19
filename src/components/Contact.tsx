import { useState } from 'react'
import { Send, Mail, MapPin, Clock } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { supabase } from '../lib/supabase'
import './Contact.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('contact_messages').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`contact-grid ${inView ? 'visible' : ''}`}>
          <div className="contact-info fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let's build something<br />
              <span className="gradient-text">amazing together</span>
            </h2>
            <p className="contact-desc">
              Have a project in mind or just want to chat? I'm always open
              to discussing new opportunities and creative ideas.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">hello@nirina.dev</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Paris, France</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="contact-item-label">Response time</div>
                  <div className="contact-item-value">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col fade-up" style={{ transitionDelay: '150ms' }}>
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">
                  <Send size={28} />
                </div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')} data-hover>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'loading'}
                  data-hover
                >
                  {status === 'loading' ? (
                    <>
                      <span className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
