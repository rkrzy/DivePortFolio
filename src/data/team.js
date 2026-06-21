import { taeseong } from '@/data/members/taeseong.js'
import { junsik } from '@/data/members/junsik.js'
import { giyoung } from '@/data/members/giyoung.js'
import { hoyoung } from '@/data/members/hoyoung.js'

export const team = {
  name: '컴퓨터가 멈췄ㅇ',
  headline: '컴퓨터는 멈춰도, 아이디어는 멈추지 않는 팀입니다.',
  description:
    '각자 다른 강점을 가진 4명이 문제 정의부터 구현, 발표까지 함께 움직이며\n최선의 결과물을 만듭니다.',
  hackathon: 'Hackathon Portfolio',
  project: '4명의 역할과 프로젝트 경험을 담은 팀 포트폴리오',
  email: 'wnstlr9891@example.com',
  links: [
    { label: 'Team GitHub', href: 'https://github.com' },
    { label: 'Team Notion', href: 'https://notion.so' },
  ],
}

export const members = [junsik, giyoung, taeseong, hoyoung]
