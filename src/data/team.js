import { taeseong } from '@/data/members/taeseong.js'
import { junsik } from '@/data/members/junsik.js'
import { giyoung } from '@/data/members/giyoung.js'
import { hoyoung } from '@/data/members/hoyoung.js'

export const team = {
  name: 'Dive',
  headline: '해커톤에서 빠르게 문제를 정의하고, 실행 가능한 프로덕트로 검증하는 팀입니다.',
  description:
    '각자 다른 강점을 가진 4명이 기획, 디자인, 프론트엔드, 백엔드를 함께 맡아 아이디어를 실제 서비스 형태로 구현합니다.',
  hackathon: '2026 Summer Hackathon',
  project: '함께 만드는 다음 프로젝트',
  email: 'dive-team@example.com',
  links: [
    { label: 'Team GitHub', href: 'https://github.com' },
    { label: 'Team Notion', href: 'https://notion.so' },
  ],
}

export const members = [junsik, giyoung, taeseong, hoyoung]
