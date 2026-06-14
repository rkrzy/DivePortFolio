import { members, team } from '@/data/team.js'

const roleColors = members.map((m) => m.accent)

export function TeamHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/80 py-24 sm:py-32">
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
          {team.tagline}
        </p>

        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-border">
          <span className="text-muted">프로젝트</span>
          <span className="font-medium text-foreground">{team.project}</span>
        </p>

        <ul className="mt-12 flex flex-wrap gap-3">
          {members.map((member, i) => (
            <li
              key={member.id}
              className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-md"
              style={{ backgroundColor: roleColors[i] }}
            >
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
