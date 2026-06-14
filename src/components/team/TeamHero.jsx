import { team } from '@/data/team.js'

export function TeamHero() {
  return (
    <section id="team" className="relative overflow-hidden border-b border-border/80 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <div className="pointer-events-none absolute top-12 right-0 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 left-1/2 h-32 w-32 rounded-full bg-amber/25 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {team.hackathon}
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-6xl">
            Team{' '}
            <span className="bg-gradient-to-r from-accent via-sky to-violet bg-clip-text text-transparent">
              {team.name}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {team.headline}
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted" style={{ whiteSpace: 'pre-wrap' }}>
            {team.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#profiles"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              팀원 프로필 보기
            </a>        
          </div>
        </div>

        <div className="glass-card soft-noise relative rounded-[2rem] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-coral" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-accent" />
          </div>

          <div className="rounded-3xl bg-slate-950 p-5 text-sm text-slate-100 shadow-2xl">
            <p className="text-sky">$ npm run hackathon</p>
            <p className="mt-3 text-slate-300">
              컴퓨터 상태: <span className="text-coral">멈췄ㅇ...</span>
            </p>
            <p className="mt-1 text-slate-300">
              팀 상태: <span className="text-accent">아이디어 빌드 중</span>
            </p>
            <p className="mt-1 text-slate-300">
              결과물: <span className="text-amber">프로필 + 프로젝트 준비 완료</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
