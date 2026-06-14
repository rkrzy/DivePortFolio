import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button.jsx'
import { getMemberById, team } from '@/data/team.js'
import { useActiveSection } from '@/hooks/useActiveSection.js'

const memberNav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = memberNav.map((item) => item.id)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { memberId } = useParams()
  const location = useLocation()
  const isMemberPage = location.pathname.startsWith('/member/')
  const member = memberId ? getMemberById(memberId) : null
  const activeId = useActiveSection(isMemberPage ? sectionIds : [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-bold tracking-[0.15em] text-foreground uppercase"
          >
            Team <span className="text-accent">{team.name}</span>
          </Link>

          {isMemberPage && member ? (
            <Link
              to="/"
              className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline"
            >
              ← 팀으로
            </Link>
          ) : null}
        </div>

        {isMemberPage && member ? (
          <nav className="hidden items-center gap-1 md:flex" aria-label="프로필 섹션">
            {memberNav.map((item) => {
              const isActive = activeId === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:bg-surface-overlay hover:text-foreground'
                  }`}
                  style={isActive ? { backgroundColor: member.accent } : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        ) : (
          <p className="hidden rounded-full bg-surface-overlay px-4 py-1.5 text-xs font-semibold text-muted md:block">
            {team.hackathon}
          </p>
        )}

        <div className="hidden md:block">
          {isMemberPage && member ? (
            <Button
              href={`mailto:${member.email}`}
              variant="secondary"
              className="text-white"
              style={{ backgroundColor: member.accent, borderColor: member.accent }}
            >
              Contact
            </Button>
          ) : (
            <Button href={`mailto:${team.email}`} variant="secondary">
              Team Contact
            </Button>
          )}
        </div>

        {isMemberPage ? (
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="메뉴 열기"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="text-lg leading-none">{isOpen ? '×' : '≡'}</span>
          </button>
        ) : null}
      </div>

      {isOpen && isMemberPage && member ? (
        <nav
          id="mobile-nav"
          className="border-t border-border/80 bg-white px-4 py-4 md:hidden"
          aria-label="모바일 내비게이션"
        >
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-accent"
                onClick={() => setIsOpen(false)}
              >
                ← 팀으로 돌아가기
              </Link>
            </li>
            {memberNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground hover:bg-surface-overlay"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
