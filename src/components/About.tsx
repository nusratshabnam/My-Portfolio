export default function About() {
  return (
    <section id="about" className="py-section px-6 bg-bg-alt">
      <div className="max-w-prose mx-auto">
        <div className="reveal">
          <span className="text-tag text-accent-secondary uppercase tracking-wider mb-4 block">
            About
          </span>
          <h2 className="font-serif text-section text-accent-primary mb-8">
            The story so far
          </h2>
        </div>

        <div className="space-y-6 text-body text-text-primary">
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-lg leading-relaxed">
              I started building websites because I wanted to understand how things worked behind the screen.
              That curiosity turned into a passion — and now I'm deep in the world of WordPress, JavaScript,
              and turning Figma files into real, working sites that people actually use.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <p className="leading-relaxed">
              Right now, I'm finishing my Computer Science degree while taking on freelance projects through
              Fiverr and Upwork. I love the variety — one week I'm building a custom WordPress theme for a
              coffee shop, the next I'm solving a tricky WooCommerce checkout flow for a retail brand.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <p className="leading-relaxed">
              I care about clean code, good typography, and the feeling you get when a website just
              <em className="font-serif italic"> works</em>. I think the best websites are the ones where
              you don't notice the design — you just enjoy the experience.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <p className="leading-relaxed">
              When I'm not coding, you'll probably find me with a cup of something warm, tinkering with a
              side project or diving into a new tutorial. I'm also passionate about teaching — breaking
              down complex concepts into something anyone can understand.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '500ms' }}>
            <div className="flex items-center gap-3 pt-4">
              <span className="w-8 h-0.5 bg-accent-secondary" />
              <p className="text-text-secondary text-caption">
                Based in Bangladesh. Currently open to freelance projects and interesting collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
