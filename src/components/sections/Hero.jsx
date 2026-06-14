import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button.jsx'

export function Hero({ member }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${member.accent}25` }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          ← 팀으로 돌아가기
        </Link>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-3 rounded-full opacity-50 blur-xl"
              style={{ backgroundColor: member.accent }}
            />
            <img
              src={member.avatar}
              alt={`${member.name} 프로필`}
              className="relative h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl sm:h-40 sm:w-40"
              style={{ boxShadow: `0 12px 40px ${member.accent}35` }}
            />
          </div>

          <div className="text-center sm:text-left">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
              style={{ backgroundColor: member.accent }}
            >
              {member.role}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {member.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{member.tagline}</p>
            <p className="mt-3 text-sm text-muted">{member.location}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
          <Button
            href="#projects"
            className="text-white"
            style={{ backgroundColor: member.accent }}
          >
            프로젝트 보기
          </Button>
          <Button href={`mailto:${member.email}`} variant="secondary">
            연락하기
          </Button>
        </div>
      </div>
    </section>
  )
}
