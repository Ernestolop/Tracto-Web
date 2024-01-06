import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
