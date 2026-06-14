import { members } from '@/data/team.js'
import { MemberCard } from '@/components/team/MemberCard.jsx'

export function TeamMembers() {
  return (
    <section id="profiles" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-3xl font-semibold tracking-widest text-accent uppercase">
            Profiles
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
