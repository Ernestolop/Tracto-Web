import { Dosis } from 'next/font/google'
import './globals.css'
import './index.css'
import { NavBar, Footer } from '@/components'

const dosis = Dosis({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dosis.className} body`}>
        <header className='header'>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}