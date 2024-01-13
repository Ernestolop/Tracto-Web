import { Inter } from 'next/font/google'
import './globals.css'
import './index.css'
import { NavBar, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <header className='header'>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}