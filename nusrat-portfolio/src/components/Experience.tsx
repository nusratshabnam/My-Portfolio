const experiences = [
  {
    title: 'Freelance WordPress Developer',
    company: 'Fiverr & Upwork',
    period: 'October 2024 – Present',
    location: 'Remote',
    highlights: [
      'Built responsive websites for diverse industries',
      'Customized WordPress themes for branding & functionality',
      'Implemented e-commerce solutions with WooCommerce',
      'Figma-to-pixel-perfect conversions',
      'SEO optimization and speed improvements',
    ],
    isCurrent: true,
  },
  {
    title: 'WordPress & Shopify Developer',
    company: 'Depictzo LLC',
    period: 'May 2025 – November 2025',
    location: 'Remote',
    highlights: [
      'Client project development for design agency',
      'Webflow-to-WordPress migrations',
      'Shopify store builds for various brands',
    ],
    isCurrent: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-section px-6 bg-bg-alt">
      <div className="max-w-content mx-auto">
        <div className="reveal mb-16">
          <span className="text-tag text-accent-secondary uppercase tracking-wider mb-4 block">
            Experience
          </span>
          <h2 className="font-serif text-section text-accent-primary">
            Where I've been
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`reveal relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent-secondary border-4 border-bg-alt z-10" />
                </div>

                {/* Content Card */}
                <div className="flex-1 md:max-w-md">
                  <div className="bg-bg-primary p-6 rounded-xl border-l-4 border-accent-secondary hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 bg-accent-secondary/20 text-accent-secondary text-tag rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-accent-primary">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary mb-1">{exp.company}</p>
                    <p className="text-caption text-text-secondary mb-4">
                      {exp.period} · {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-caption text-text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="hidden md:flex justify-center mt-12">
            <div className="w-3 h-3 rounded-full bg-text-secondary" />
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-16">
          <h3 className="font-serif text-subhead text-accent-primary mb-6">
            Education
          </h3>
          <div className="bg-bg-primary p-6 rounded-xl border-l-4 border-accent-secondary max-w-md">
            <h4 className="font-serif text-lg font-semibold text-accent-primary">
              B.Sc in Computer Science and Engineering
            </h4>
            <p className="text-text-secondary mb-1">Metropolitan University, Bangladesh</p>
            <p className="text-caption text-text-secondary">
              January 2023 – Present · CGPA: 3.65
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
