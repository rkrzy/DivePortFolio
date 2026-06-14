# Team Dive Portfolio

React + Vite + JavaScript 기반 **해커톤 팀 포트폴리오** 프로젝트입니다. 한 페이지에서 팀 소개와 4명의 프로필을 모두 보여줍니다.

## 기술 스택

- React 19
- Vite 8
- JavaScript (JSX)
- React Router
- Tailwind CSS 4
- ESLint + Prettier

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 으로 접속합니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm run format` | Prettier 포맷팅 |

## 프로젝트 구조

```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout
│   ├── team/        # 팀 소개와 4명 프로필 카드
│   └── ui/          # Button, SectionTitle
├── data/
│   ├── team.js      # 팀 정보 + 4명 프로필 파일 연결
│   └── members/     # 개인별 프로필 입력 파일
│       ├── junsik.js
│       ├── minji.js
│       ├── hyunwoo.js
│       └── soyeon.js
├── pages/
│   └── HomePage.jsx # 팀 소개 + 4명 프로필
├── App.jsx
├── main.jsx
└── index.css
public/members/      # 프로필 사진 (SVG 또는 jpg/png로 교체 가능)
```

## 콘텐츠 수정

- 팀 소개: `src/data/team.js`
- 김준식 프로필: `src/data/members/junsik.js`
- 이민지 프로필: `src/data/members/minji.js`
- 박현우 프로필: `src/data/members/hyunwoo.js`
- 최소연 프로필: `src/data/members/soyeon.js`
- 프로필 사진: `public/members/`에 실제 사진을 넣고 각 파일의 `avatar` 경로 수정

## 라우팅

| 경로 | 설명 |
| --- | --- |
| `/` | 팀 소개 + 4명 프로필을 모두 보여주는 단일 페이지 |

## 개인 프로필 입력 예시

```js
export const junsik = {
  name: '김준식',
  projectRole: 'Frontend Developer',
  intro: '간단한 자기소개',
  avatar: '/members/junsik.svg',
  links: [{ label: 'GitHub', href: 'https://github.com' }],
  featuredProjects: [
    {
      title: '대표 프로젝트',
      description: '프로젝트 설명',
      href: 'https://github.com',
    },
  ],
}
```

## 환경 변수

`.env.example`을 참고해 `.env` 파일을 생성할 수 있습니다.

```bash
cp .env.example .env
```
