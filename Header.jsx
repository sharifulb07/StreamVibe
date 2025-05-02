'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { MagnifyingGlassIcon, BellAlertIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import logo from '@/public/logo.svg'


const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/'
  },

  {
    id: 2,
    name: 'Movies & Shows',
    href: '/movies&shows'
  },
  {
    id: 3,
    name: 'Support',
    href: '/support'
  },
  {
    id: 4,
    name: 'Subscriptions',
    href: '/subscriptions'
  },

]

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isMobileOpen &&
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileOpen]);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
    const handleSize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [])

  const LogoSize = () => {
    if (windowWidth < 640) return { width: 116, height: 35 };
    if (windowWidth < 1024) return { width: 166, height: 50 };
    return { width: 199, height: 60 }
  }

  return (
    <header className="z-50 w-full sticky flex justify-between items-center px-[8%] py-[30px]">

      <Image
        src={logo}
        alt="Company Logo"

        className="object-contain" // Maintains aspect ratio
        sizes="(max-width: 199px) 166px, 116px"
        priority // Preload important logos
      />
      <nav className="hidden lg:flex items-center gap-[30px] p-[10px] ">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')

          return (
            <Link href={link.href} key={link.id} className={isActive ? 'text-white text-[18px] font-normal' : 'text-grey-shade-75 text-[18px] font-normal'}>
              {link.name}
            </Link>
          )
        })}

      </nav>
      <div className="hidden lg:flex items-center gap-[30px]">

        <MagnifyingGlassIcon className="size-6 cursor-pointer" color="white" />
        <BellAlertIcon className="size-6 cursor-pointer" color="white" />
      </div>

      {isMobileOpen ? (
        <XMarkIcon
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="size-6 text-white cursor-pointer flex  lg:hidden"

        />
      ) : (
        <Bars3Icon
          ref={buttonRef}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="size-6 cursor-pointer text-white flex lg:hidden"


        />
      )}

      {isMobileOpen && (
        <div ref={menuRef} className="absolute top-20 right-10 z-500 flex flex-col p-5 rounded-xl bg-orange-100  lg:hidden">
          <ul
            className={`list-none flex flex-col items-center gap-5 z-30 `}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`font-bold text-[20px] ${pathname == link.href ? "text-[#FD6F00]" : "text-text-color"
                    } transition-colors duration-200 ease-in-out`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}



    </header>
  )
}
