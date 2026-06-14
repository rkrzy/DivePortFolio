import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout.jsx'
import { HomePage } from '@/pages/HomePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
