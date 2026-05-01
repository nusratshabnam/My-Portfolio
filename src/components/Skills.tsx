const skillGroups = [
  {
    name: 'Core Stack',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    isCore: true,
  },
  {
    name: 'WordPress',
    skills: ['WordPress', 'WooCommerce', 'Elementor', 'Divi', 'ACF', 'Custom Themes', 'Plugin Development'],
    isCore: false,
  },
  {
    name: 'Tools & Platforms',
    skills: ['Figma', 'Shopify', 'Git', 'SEO', 'Responsive Design'],
    isCore: false,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-section px-6 bg-bg-primary">
      <div className="max-w-content mx-auto">
        <div className="reveal mb-16">
          <span className="text-tag text-accent-secondary uppercase tracking-wider mb-4 block">
            Skills
          </span>
          <h2 className="font-serif text-section text-accent-primary">
            What I work with
          </h2>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.name} className="reveal" style={{ transitionDelay: `${groupIndex * 100}ms` }}>
              <h3 className="text-caption text-text-secondary uppercase tracking-wider mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full transition-colors cursor-default ${
                      group.isCore
                        ? 'bg-accent-primary text-bg-primary font-semibold'
                        : 'bg-bg-alt text-text-primary hover:bg-accent-secondary/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills Note */}
          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <div className="p-6 bg-bg-alt rounded-xl border-l-4 border-accent-secondary/50">
              <p className="text-text-secondary">
                <span className="font-medium text-accent-primary">I'm also good at explaining things clearly</span>
                {' '}— which comes in handy when mentoring or collaborating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
