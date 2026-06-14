import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button.jsx'
import { team } from '@/data/team.js'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">
          Team <span className="text-accent">{team.name}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="페이지 섹션">
          <a
            href="#team"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-overlay hover:text-foreground"
          >
            Team
          </a>
          <a
            href="#profiles"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-overlay hover:text-foreground"
          >
            Profiles
          </a>
        </nav>

        <Button href={`mailto:${team.email}`} variant="secondary">
          Team Contact
        </Button>
      </div>
    </header>
  )
}
