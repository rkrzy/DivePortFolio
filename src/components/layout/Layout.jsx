import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer.jsx'
import { Header } from '@/components/layout/Header.jsx'

export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
