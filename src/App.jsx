import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout.jsx'
import { HomePage } from '@/pages/HomePage.jsx'
import { MemberProfilePage } from '@/pages/MemberProfilePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="member/:memberId" element={<MemberProfilePage />} />
      </Route>
    </Routes>
  )
}
