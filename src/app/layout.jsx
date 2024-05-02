import './globals.css'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'


const inter= Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'procuregrids ',
  description: 'A website for my ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}
      
      >
     
        
        
        {children}
       <Footer/>
        
        </body>
    </html>
  )
}
