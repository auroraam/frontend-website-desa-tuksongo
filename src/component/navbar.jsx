'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Poppins, Berkshire_Swash } from 'next/font/google'
import { useState } from 'react'

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins"
});

const berkshireFont = Berkshire_Swash({
    subsets: ["latin"],
    weight: "400",
});

export default function Navbar() {
  const router = useRouter()
  const currentPath = router.pathname
  const linkClass = (path) =>
    `relative transition-colors duration-300 ${
      currentPath === path ? `text-white after:absolute after:-bottom-1 after:left-0 after:h-[5px] after:w-full after:rounded-full ${afterBgColorClass}` : 'text-white'
    } hover:text-shadow-lg/40 hover:text-shadow-black`
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Destinasi Wisata', href: '/wisata' },
    { label: 'UMKM', href: '/umkm' },
    { label: 'Kesehatan', href: '/kesehatan' },
  ]

  let bgColorClass = 'oren-bg'; // default
  if (currentPath.includes('/wisata')) bgColorClass = 'biru-bg';
  else if (currentPath.includes('/umkm')) bgColorClass = 'ijo-bg';
  else if (currentPath.includes('/kesehatan')) bgColorClass = 'coklat-bg';

  let afterBgColorClass = 'after:bg-[var(--oren)]'; // default
  if (currentPath.includes('/wisata')) afterBgColorClass = 'after:bg-[var(--biru)]';
  else if (currentPath.includes('/umkm')) afterBgColorClass = 'after:bg-[var(--ijo)]';
  else if (currentPath.includes('/kesehatan')) afterBgColorClass = 'after:bg-[var(--coklat)]';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${bgColorClass} flex items-center justify-between`}>
      {/* Logo */}
      <div className="flex items-center">
        <div className='p-2'>
            <Image src="/logo.png" alt="Logo" width={75} height={75} />
        </div>
        <h1 className={`text-white ${berkshireFont.className} text-base sm:text-lg text-shadow-black text-shadow-lg/30`}>
          LEKSANA BOROBUDUR
        </h1>
      </div>

      <div className='flex md:hidden items-center pr-4'>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl text-white`}></i>
        </button>
      </div>

      {/* Navigation */}
      <div className='md:flex xl:gap-10 hidden px-5 gap-5 items-center relative text-white font-semibold font-poppins font-medium text-sm sm:text-base'>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </div>

      {menuOpen && (
        <div className={`absolute top-full mt-2 right-0 ${bgColorClass} rounded-md shadow-lg px-4 py-2 w-48 z-50`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkClass(item.href)} block py-1 border-b border-white/20`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
