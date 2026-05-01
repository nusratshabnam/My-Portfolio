import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 px-6 bg-accent-primary text-bg-primary">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-caption">
          &copy; {new Date().getFullYear()} Nusrat Jahan Shabnam
        </p>
        <p className="text-caption text-bg-primary/70">
          Built with coffee and curiosity
        </p>
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-caption text-bg-primary/70 hover:text-bg-primary transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
