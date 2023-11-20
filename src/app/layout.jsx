import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Rubik } from 'next/font/google'
import Link from "next/link";


const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'my folio-app',
  description: 'A website for my ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}
      
      >
      <Navbar/>
        
        
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
