"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faAddressCard, faBriefcase , faStarHalfStroke, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import  Link  from 'next/link'
import { usePathname , useRouter } from 'next/navigation'


const navbar = () => {

  const pathname = usePathname() //Wrok like params name in react
  const router = useRouter() // Use like history.push()  ==> onClick={() => router.push('/dashboard')}

  return (
    <>
        <nav className='nav_bar'>
            <div className="logo">
              <Link href={"/"}>Weilders</Link>
            </div>

            <div className="nav_list">
              <Link className={pathname === "/about" ? 'glow' : ''} href={'/about'}>About</Link>
              <Link className={pathname === "/services" ? 'glow' : ''}  href={"/services"}>Services</Link>
              <Link className={pathname === "/reviews" ? 'glow' : ''}  href={"/reviews"}>Reviews</Link>
              <Link className={pathname === "/articles" ? 'glow' : ''}  href={"/articles"}>Articles</Link>
            </div>

           

            <div className="nav_right">
              <Link  className='contact_btn' href={'/contact'}>Contact</Link>
              <Link  className='login_btn' href={'/login'}> <FontAwesomeIcon  icon={faRightToBracket} /> </Link>
            </div>
            

        </nav>

        
        <div className="bottom_nav_list">
              <Link className={pathname === "/about" ? 'glow' : ''}  href={"/about"}><FontAwesomeIcon style={{margin : "3px auto"}} icon={faAddressCard} />About</Link>
              <Link className={pathname === "/services" ? 'glow' : ''}  href={"/services"}><FontAwesomeIcon style={{margin : "3px auto"}} icon={faBriefcase} />Services</Link>
              <Link className={pathname === "/reviews" ? 'glow' : ''}  href={"/reviews"}><FontAwesomeIcon style={{margin : "3px auto"}} icon={faStarHalfStroke} />Reviews</Link>
              <Link className={pathname === "/articles" ? 'glow' : ''}  href={"/articles"}> <FontAwesomeIcon style={{margin : "3px auto"}} icon={faNewspaper} /> Articles</Link>
            </div>
    </>
  )
}

export default navbar