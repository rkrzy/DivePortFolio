import { SectionTitle } from '@/components/ui/SectionTitle.jsx'

export function Skills({ member }) {
  return (
    <section id="skills" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Skills"
          title="기술 스택"
          description="프로젝트에 활용해 온 기술들입니다."
          accent={member.accent}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {member.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: member.accent }}
              >
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border px-3 py-1.5 text-sm font-medium text-foreground"
                    style={{
                      borderColor: `${member.accent}40`,
                      backgroundColor: `${member.accent}12`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
