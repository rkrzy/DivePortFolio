import { Button } from '@/components/ui/Button.jsx'
import { SectionTitle } from '@/components/ui/SectionTitle.jsx'

export function Contact({ member }) {
  return (
    <section
      id="contact"
      className="border-t border-border/80 py-20 sm:py-28"
      style={{
        background: `linear-gradient(135deg, ${member.accent}12, rgba(56,189,248,0.1), rgba(167,139,250,0.1))`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="함께 일하고 싶으시다면"
          description="프로젝트 제안, 협업, 채용 관련 문의를 환영합니다."
          accent={member.accent}
        />

        <div className="rounded-3xl border border-border bg-white p-8 shadow-lg sm:p-10">
          <p className="text-sm font-medium text-muted">이메일</p>
          <a
            href={`mailto:${member.email}`}
            className="mt-2 block text-2xl font-bold text-foreground transition-colors hover:opacity-80"
            style={{ color: member.accent }}
          >
            {member.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={`mailto:${member.email}`}
              className="text-white"
              style={{ backgroundColor: member.accent }}
            >
              메일 보내기
            </Button>
            {member.socials.map((social) => (
              <Button key={social.label} href={social.href} variant="secondary">
                {social.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
