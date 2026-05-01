import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-section px-6 bg-bg-alt">
      <div className="max-w-prose mx-auto text-center">
        <div className="reveal">
          <span className="text-tag text-accent-secondary uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="font-serif text-section text-accent-primary mb-6">
            Let's build something together
          </h2>
          <p className="text-body text-text-secondary mb-12">
            Whether you have a project in mind, want to chat about WordPress, or just want to say hello —
            my inbox is always open.
          </p>
        </div>

        {/* Email CTA */}
        <div className="reveal mb-12" style={{ transitionDelay: '100ms' }}>
          <a
            href="mailto:nusratshabnam@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-bg-primary font-medium rounded-full hover:bg-accent-primary/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail size={20} />
            Say hello
          </a>
        </div>

        {/* Social Links */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transitionDelay: '200ms' }}>
          <a
            href="https://www.linkedin.com/in/nusrat-jahan-shabnam-7a3b921b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
          >
            <Linkedin size={20} className="transition-transform group-hover:translate-x-1" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/nusratshabnam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
          >
            <Github size={20} className="transition-transform group-hover:translate-x-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
