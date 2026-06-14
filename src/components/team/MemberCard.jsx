export function MemberCard({ member, index }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
      style={{
        boxShadow: `0 4px 24px -8px ${member.accent}30`,
      }}
    >
      <div
        className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl"
        style={{ backgroundColor: member.accent }}
      />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative shrink-0 self-center sm:self-start">
          <div
            className="absolute -inset-2 rounded-full opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70"
            style={{ backgroundColor: member.accent }}
          />
          <img
            src={member.avatar}
            alt={`${member.name} 프로필`}
            className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
            style={{
              boxShadow: `0 8px 32px ${member.accent}40`,
            }}
          />
          <span
            className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
            style={{ backgroundColor: member.accent }}
          >
            {index + 1}
          </span>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: member.accent }}
          >
            {member.projectRole}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{member.name}</h3>
          <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-muted">{member.intro}</p>
        </div>
      </div>

      <div className="mt-7">
        <p className="text-xs font-bold tracking-widest text-muted uppercase">Links</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {member.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-overlay"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-1 flex-col">
        <p className="text-xs font-bold tracking-widest text-muted uppercase">Projects</p>
        <div className="mt-3 grid flex-1 gap-3">
          {member.featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border p-4 transition-colors hover:bg-surface"
            >
              <h4 className="font-bold text-foreground">{project.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
