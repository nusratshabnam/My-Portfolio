import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Brewhaus',
    description:
      'A rich, artisan WordPress theme built for specialty coffee shops. No page builders, no bloat — just clean PHP templates, custom post types, and a design system that feels as warm as a good espresso.',
    tech: ['PHP', 'WordPress', 'Custom Post Types', 'WooCommerce'],
    github: 'https://github.com/nusratshabnam/brewhaus-theme',
    live: null,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
  },
  {
    name: 'Lumina',
    description:
      'A sleek, modern WooCommerce theme focused on conversion. Built for stores that want a premium look without sacrificing page speed. Every checkout step felt intuitive and low-friction.',
    tech: ['PHP', 'WordPress', 'WooCommerce', 'ACF'],
    github: 'https://github.com/nusratshabnam/lumina-theme',
    live: null,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    name: 'Smart Service Builder',
    description:
      'A custom WordPress plugin that lets businesses create dynamic service selection forms. Step-by-step wizards, real-time pricing, and a UI that doesn\'t make customers think.',
    tech: ['PHP', 'WordPress', 'JavaScript', 'ACF'],
    github: 'https://github.com/nusratshabnam/smart-service-builder',
    live: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
]

const moreProjects = [
  {
    name: 'Marketing Agency Website',
    company: 'Depictzo',
    description: 'Converted a Webflow reference design to WordPress with responsive layouts and lead-gen focus.',
    tech: ['WordPress', 'Responsive Design', 'SEO'],
  },
  {
    name: 'Business Growth Agency',
    company: 'StartUp BluePrint',
    description: 'Sleek 4-page Shopify store for a consultancy, with strong CTAs and intuitive navigation.',
    tech: ['Shopify', 'E-commerce', 'Responsive Design'],
  },
  {
    name: 'Rev Fest',
    company: 'Motorcycle Event',
    description: 'Dynamic event website with schedules, racing categories, and a media gallery that pops.',
    tech: ['WordPress', 'JavaScript', 'Responsive Design'],
  },
  {
    name: 'Oddysey Fragrance',
    company: 'E-commerce',
    description: 'Elegant Shopify store for a fragrance brand, focusing on premium product presentation.',
    tech: ['Shopify', 'E-commerce', 'Design'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-section px-6 bg-bg-primary">
      <div className="max-w-content mx-auto">
        <div className="reveal mb-16">
          <span className="text-tag text-accent-secondary uppercase tracking-wider mb-4 block">
            Selected Work
          </span>
          <h2 className="font-serif text-section text-accent-primary">
            Things I've built
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="reveal bg-bg-alt rounded-2xl overflow-hidden card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="project-image-wrapper h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-accent-primary mb-2">
                  {project.name}
                </h3>
                <p className="text-text-secondary text-caption mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-bg-primary rounded-full text-tag text-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects */}
        <div className="reveal">
          <h3 className="font-serif text-subhead text-accent-primary mb-6">
            Other projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {moreProjects.map((project, index) => (
              <div
                key={project.name}
                className="p-6 bg-bg-alt rounded-xl border-l-4 border-accent-secondary/30 hover:border-accent-secondary transition-colors"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-accent-primary">{project.name}</h4>
                  <span className="text-tag text-text-secondary">{project.company}</span>
                </div>
                <p className="text-caption text-text-secondary mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-bg-primary rounded text-tag text-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
