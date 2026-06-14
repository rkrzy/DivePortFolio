# Team Dive Portfolio

React + Vite + JavaScript 기반 **해커톤 팀 포트폴리오** 프로젝트입니다. 메인 페이지에서 4명의 팀원을 소개하고, 클릭 시 개별 프로필 페이지로 이동합니다.

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
│   ├── sections/    # 개인 프로필 섹션 (Hero, About, Projects, Skills, Contact)
│   ├── team/        # 팀 메인 페이지 컴포넌트 (TeamHero, MemberCard)
│   └── ui/          # Button, SectionTitle
├── data/
│   └── team.js      # 팀 정보 + 4명 팀원 데이터
├── hooks/
├── pages/
│   ├── HomePage.jsx           # 팀원 4명 카드 목록
│   └── MemberProfilePage.jsx  # /member/:memberId 개인 프로필
├── App.jsx
├── main.jsx
└── index.css
public/members/      # 프로필 사진 (SVG 또는 jpg/png로 교체 가능)
```

## 콘텐츠 수정

- `src/data/team.js` — 팀명, 해커톤명, 4명 팀원 정보 수정
- `public/members/` — 실제 프로필 사진으로 교체 (`avatar` 경로와 파일명 맞추기)

## 라우팅

| 경로 | 설명 |
| --- | --- |
| `/` | 팀 메인 — 4명 카드 목록 |
| `/member/junsik` | 김준식 개인 프로필 (id는 `team.js`의 `id` 값) |

## 환경 변수

`.env.example`을 참고해 `.env` 파일을 생성할 수 있습니다.

```bash
cp .env.example .env
```
