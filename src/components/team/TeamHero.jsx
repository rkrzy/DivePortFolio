import { team } from '@/data/team.js'

export function TeamHero() {
  return (
    <section id="team" className="relative overflow-hidden border-b border-border/80 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <span className="inline-flex items-center rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase shadow-sm">
          {team.hackathon}
        </span>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Team{' '}
          <span className="bg-gradient-to-r from-accent via-sky to-violet bg-clip-text text-transparent">
            {team.name}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {team.headline}
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {team.description}
        </p>

        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-border">
          <span className="text-muted">프로젝트</span>
          <span className="font-medium text-foreground">{team.project}</span>
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur">
            <p className="text-3xl font-bold text-accent">4</p>
            <p className="mt-2 text-sm text-muted">서로 다른 역할의 팀원</p>
          </div>
          <div className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur">
            <p className="text-3xl font-bold text-sky">1</p>
            <p className="mt-2 text-sm text-muted">하나의 해커톤 프로젝트</p>
          </div>
          <div className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur">
            <p className="text-3xl font-bold text-violet">MVP</p>
            <p className="mt-2 text-sm text-muted">빠른 검증과 실행 중심</p>
          </div>
        </div>
      </div>
    </section>
  )
}
