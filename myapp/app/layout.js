import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/client/Navbar/Navbar'
import Footer from '@/components/client/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-screen'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}