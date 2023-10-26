"use client"

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faAddressCard, faBriefcase, faStarHalfStroke, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'



const navbar = () => {

  const pathname = usePathname() //Wrok like params name in react
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 170) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  // navbox open 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const { data: session } = useSession()


  return (
    <>
      <nav className={`nav_bar bg-primary ${scrolled ? 'fixed blurry ' : ''}`}>
        <div className="logo">
          <Link style={{ fontSize: "30px!important" }} className='text-[49px]' href={"/"}>Weilders</Link>
        </div>

        <div className="nav_list">
          <Link className={pathname === "/about" ? 'glow' : ''} href={'/about'}>About</Link>
          <Link className={pathname === "/services" ? 'glow' : ''} href={"/services"}>Services</Link>
          <Link className={pathname === "/threads" ? 'glow' : ''} href={"/threads"}>Threads</Link>
          <Link className={pathname === "/articles" ? 'glow' : ''} href={"/articles"}>Articles</Link>
        </div>



        <div className="nav_right">
          <Link className='contact_btn' href={'/contact'}>Contact</Link>

          {session?.user ?
            <>
              <div ref={ref} className="w-[40px] h-[40px] rounded-full flex align-center justify-center cursor-pointer relative " onClick={toggleMenu}>
                <img src={session.user.image} alt={session.user.name} className='w-[40px] h-[40px] rounded-full' />
              </div>

            </>
            :
            <Link className='login_btn' href={'/auth'}> Login </Link>
          }

        </div>

      </nav>
      <div className="bottom_nav_list blurry ">
        <Link className={pathname === "/about" ? 'glow' : ''} href={"/about"}><FontAwesomeIcon style={{ margin: "3px auto" }} icon={faAddressCard} />About</Link>
        <Link className={pathname === "/services" ? 'glow' : ''} href={"/services"}><FontAwesomeIcon style={{ margin: "3px auto" }} icon={faBriefcase} />Services</Link>
        <Link className={pathname === "/threads" ? 'glow' : ''} href={"/threads"}><FontAwesomeIcon style={{ margin: "3px auto" }} icon={faStarHalfStroke} />Reviews</Link>
        <Link className={pathname === "/articles" ? 'glow' : ''} href={"/articles"}> <FontAwesomeIcon style={{ margin: "3px auto" }} icon={faNewspaper} /> Articles</Link>
      </div>

      {
        session?.user && (isOpen && (
          <div  style={{ zIndex: '8', overflow: 'hidden' }} className=" blurry fixed  mt-2 top-[52px] right-[15px] rounded-lg shadow-lg w-[150px]">
            <Link
              href="/profile"
              className="block px-4 py-2  text-[13px] text-white hover:bg-gray-500"
            >
              Profile
            </Link>
            <Link
              href="/createThread"
              className="block px-4 py-2  text-[13px] text-white hover:bg-gray-500"
            >
              Create Thread
            </Link>
            <button
              onClick={() => signOut('google')}
              className="block w-full text-start text-[13px] px-4 py-2 text-white bg-red-600 hover:bg-red-700 "
            >
              Logout
            </button>
          </div>)
        )
      }

    </>
  )
}

export default navbar