import { Montserrat } from 'next/font/google'
import './globals.css'
import './index.css'
import { NavBar, Footer } from '@/components'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} body`}>
        <header className='header'>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}