import { members } from '@/data/team.js'
import { MemberCard } from '@/components/team/MemberCard.jsx'

export function TeamMembers() {
  return (
    <section id="profiles" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Profiles
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            한 페이지에서 확인하는 4명의 프로필
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            각 카드에는 이름, 프로젝트 역할, 간단한 소개, 링크, 대표 프로젝트가 담겨 있습니다.
            개인 정보는 각자의 데이터 파일만 수정하면 됩니다.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
