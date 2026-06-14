export const team = {
  name: 'Dive',
  tagline: '아이디어를 빠르게 검증하고, 사용자 가치를 만드는 해커톤 팀입니다.',
  hackathon: '2026 Summer Hackathon',
  project: '함께 만드는 다음 프로젝트',
  email: 'dive-team@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Notion', href: 'https://notion.so' },
  ],
}

export const members = [
  {
    id: 'junsik',
    name: '김준식',
    role: 'Frontend Developer',
    shortIntro: 'React와 UI/UX에 강점이 있으며, 팀의 화면 경험을 책임집니다.',
    tagline: '사용자가 먼저 느끼는 경험부터 설계합니다.',
    avatar: '/members/junsik.svg',
    accent: '#0d9488',
    about: [
      'React와 JavaScript로 인터랙티브한 웹을 만듭니다.',
      '디자인 시스템과 컴포넌트 구조화에 관심이 많습니다.',
      '해커톤에서는 빠른 프로토타이핑과 폴리싱을 담당합니다.',
    ],
    email: 'junsik@example.com',
    location: 'Seoul, South Korea',
    socials: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Email', href: 'mailto:junsik@example.com' },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Hackathon Dashboard',
        description: '실시간 팀 진행 상황을 공유하는 대시보드. WebSocket 기반 상태 동기화.',
        tags: ['React', 'Vite', 'Tailwind CSS'],
        href: '#',
        repo: 'https://github.com',
      },
      {
        id: 'p2',
        title: 'Component Library',
        description: '재사용 가능한 UI 키트. 접근성과 반응형을 기본으로 설계했습니다.',
        tags: ['React', 'Storybook'],
        repo: 'https://github.com',
      },
    ],
    skills: [
      { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
      { category: 'Tools', items: ['Vite', 'Figma', 'Git', 'ESLint'] },
    ],
  },
  {
    id: 'minji',
    name: '이민지',
    role: 'Backend Developer',
    shortIntro: '안정적인 API와 데이터 설계로 팀의 기술 기반을 만듭니다.',
    tagline: '확장 가능한 구조로 빠르게, 그리고 견고하게.',
    avatar: '/members/minji.svg',
    accent: '#3b82f6',
    about: [
      'Node.js와 REST API 설계·구현 경험이 있습니다.',
      '데이터 모델링과 성능 최적화에 집중합니다.',
      '해커톤에서는 서버 아키텍처와 API 통합을 담당합니다.',
    ],
    email: 'minji@example.com',
    location: 'Seoul, South Korea',
    socials: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Email', href: 'mailto:minji@example.com' },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Auth Microservice',
        description: 'JWT 기반 인증 서비스. 역할 기반 접근 제어를 지원합니다.',
        tags: ['Node.js', 'Express', 'PostgreSQL'],
        repo: 'https://github.com',
      },
      {
        id: 'p2',
        title: 'Realtime API',
        description: '이벤트 스트리밍 API. 낮은 지연 시간으로 상태를 전달합니다.',
        tags: ['WebSocket', 'Redis'],
        repo: 'https://github.com',
      },
    ],
    skills: [
      { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'] },
      { category: 'Tools', items: ['Docker', 'Git', 'Postman'] },
    ],
  },
  {
    id: 'hyunwoo',
    name: '박현우',
    role: 'Full-stack Developer',
    shortIntro: '기획부터 배포까지 연결하며 팀의 실행 속도를 높입니다.',
    tagline: '아이디어와 구현 사이의 거리를 줄입니다.',
    avatar: '/members/hyunwoo.svg',
    accent: '#ec4899',
    about: [
      '프론트엔드와 백엔드를 모두 다루며 MVP를 빠르게 완성합니다.',
      'CI/CD와 배포 자동화에 익숙합니다.',
      '해커톤에서는 통합 개발과 데모 시연을 담당합니다.',
    ],
    email: 'hyunwoo@example.com',
    location: 'Busan, South Korea',
    socials: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Blog', href: 'https://example.com' },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Deploy Pipeline',
        description: 'GitHub Actions 기반 자동 배포 파이프라인. 프리뷰 환경을 제공합니다.',
        tags: ['GitHub Actions', 'Vercel', 'Docker'],
        repo: 'https://github.com',
      },
    ],
    skills: [
      { category: 'Full-stack', items: ['React', 'Node.js', 'TypeScript', 'SQL'] },
      { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD'] },
    ],
  },
  {
    id: 'soyeon',
    name: '최소연',
    role: 'Product Designer',
    shortIntro: '사용자 리서치와 비주얼 디자인으로 제품의 방향을 잡습니다.',
    tagline: '복잡한 문제를 단순하고 아름다운 경험으로.',
    avatar: '/members/soyeon.svg',
    accent: '#f59e0b',
    about: [
      'UX 리서치와 와이어프레임, 하이파이 프로토타입을 제작합니다.',
      '디자인 토큰과 일관된 브랜드 경험을 설계합니다.',
      '해커톤에서는 기획, UI 디자인, 사용자 테스트를 담당합니다.',
    ],
    email: 'soyeon@example.com',
    location: 'Seoul, South Korea',
    socials: [
      { label: 'Figma', href: 'https://figma.com' },
      { label: 'Email', href: 'mailto:soyeon@example.com' },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Design System',
        description: '컴포넌트, 컬러, 타이포그래피 가이드를 포함한 디자인 시스템.',
        tags: ['Figma', 'Design Tokens', 'a11y'],
        href: '#',
      },
      {
        id: 'p2',
        title: 'User Flow Research',
        description: '해커톤 아이디어 검증을 위한 사용자 인터뷰 및 플로우 설계.',
        tags: ['UX Research', 'Prototyping'],
      },
    ],
    skills: [
      { category: 'Design', items: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'] },
      { category: 'Research', items: ['User Interview', 'Usability Test', 'Persona'] },
    ],
  },
]

export function getMemberById(memberId) {
  return members.find((member) => member.id === memberId) ?? null
}
