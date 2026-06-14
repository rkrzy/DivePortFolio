import { Link } from 'react-router-dom'

export function MemberCard({ member, index }) {
  return (
    <Link
      to={`/member/${member.id}`}
      className="group relative flex flex-col items-center gap-6 rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:gap-10 sm:p-10"
      style={{
        boxShadow: `0 4px 24px -8px ${member.accent}30`,
      }}
    >
      <div
        className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl"
        style={{ backgroundColor: member.accent }}
      />

      <div className="relative shrink-0">
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

      <div className="relative min-w-0 flex-1 text-center sm:text-left">
        <p
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: member.accent }}
        >
          {member.role}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{member.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{member.shortIntro}</p>

        <span
          className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
          style={{ backgroundColor: member.accent }}
        >
          프로필 보기
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
