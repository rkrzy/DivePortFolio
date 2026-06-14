import { team } from '@/data/team.js'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          © {year} Team <span className="font-semibold text-accent">{team.name}</span>.{' '}
          {team.hackathon}
        </p>

        <ul className="flex flex-wrap gap-4">
          {team.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
