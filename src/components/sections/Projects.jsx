import { SectionTitle } from '@/components/ui/SectionTitle.jsx'

export function Projects({ member }) {
  return (
    <section
      id="projects"
      className="border-y border-border/80 py-20 sm:py-28"
      style={{ backgroundColor: `${member.accent}08` }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Projects"
          title="주요 프로젝트"
          description="실제로 만들고 배운 경험이 담긴 작업들입니다."
          accent={member.accent}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {member.projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: member.accent }}
              />
              <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: `${member.accent}cc` }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 text-sm font-semibold">
                {project.href ? (
                  <a href={project.href} style={{ color: member.accent }}>
                    Live →
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-foreground"
                  >
                    GitHub →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
