import { SectionTitle } from '@/components/ui/SectionTitle.jsx'

const cardTints = ['bg-sky/8', 'bg-violet/8', 'bg-coral/8']

export function About({ member }) {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="About"
          title={`${member.name}을 소개합니다`}
          description="경험과 관심사를 바탕으로 문제를 정의하고 해결합니다."
          accent={member.accent}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {member.about.map((paragraph, index) => (
            <article
              key={paragraph}
              className={`rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-muted shadow-sm ${cardTints[index % cardTints.length]}`}
            >
              <span
                className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: member.accent }}
              >
                {index + 1}
              </span>
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
