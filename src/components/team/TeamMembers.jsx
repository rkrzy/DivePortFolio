import { members } from '@/data/team.js'
import { MemberCard } from '@/components/team/MemberCard.jsx'

export function TeamMembers() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Members
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            팀원을 선택해 프로필을 확인하세요
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            각 팀원의 역할, 프로젝트 경험, 기술 스택을 개별 페이지에서 볼 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-12">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
