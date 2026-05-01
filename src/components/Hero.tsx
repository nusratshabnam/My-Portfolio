import { ArrowDown } from 'lucide-react'

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative grain-overlay">
      <div className="max-w-content mx-auto px-6 py-32 text-center relative z-10">
        {/* Name */}
        <h1
          className={`font-serif text-hero text-accent-primary mb-4 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Nusrat Jahan Shabnam
        </h1>

        {/* Role */}
        <p
          className={`text-subhead text-text-secondary mb-8 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Frontend Developer & WordPress Artisan
        </p>

        {/* Tagline */}
        <p
          className={`font-serif italic text-xl md:text-2xl text-text-secondary mb-12 max-w-prose mx-auto transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I build websites that feel as good as they look.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent-primary text-bg-primary font-medium rounded-full hover:bg-accent-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            See my work
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-accent-primary text-accent-primary font-medium rounded-full hover:bg-accent-primary hover:text-bg-primary transition-all duration-200"
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex flex-col items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors animate-bounce-subtle"
        >
          <span className="text-caption">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent-secondary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent-secondary/10 blur-3xl" />
    </section>
  )
}
