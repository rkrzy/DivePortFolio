import { Navigate, useParams } from 'react-router-dom'
import { About } from '@/components/sections/About.jsx'
import { Contact } from '@/components/sections/Contact.jsx'
import { Hero } from '@/components/sections/Hero.jsx'
import { Projects } from '@/components/sections/Projects.jsx'
import { Skills } from '@/components/sections/Skills.jsx'
import { getMemberById } from '@/data/team.js'

export function MemberProfilePage() {
  const { memberId } = useParams()
  const member = getMemberById(memberId)

  if (!member) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Hero member={member} />
      <About member={member} />
      <Projects member={member} />
      <Skills member={member} />
      <Contact member={member} />
    </>
  )
}
