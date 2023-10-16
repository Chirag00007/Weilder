import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weilders',
  description: 'The tech solution provider Company',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}  
        </body>
    </html>
  )
}
