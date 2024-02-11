import { Montserrat } from 'next/font/google'
import { NavBar, Footer } from '@/components'
import './globals.css'
import './index.css'

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