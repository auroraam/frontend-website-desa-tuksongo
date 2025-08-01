'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const icons = [
    { icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
    { icon: 'fa-brands fa-tiktok', url: 'https://tiktok.com' },
    { icon: 'fa-solid fa-envelope', url: 'mailto:example@gmail.com' },
    { icon: 'fa-solid fa-globe', url: 'https://yourwebsite.com' },
  ];

  let bgColorClass = 'oren-foot'; // default
  if (pathname.includes('/wisata')) bgColorClass = 'biru-foot';
  else if (pathname.includes('/umkm')) bgColorClass = 'ijo-foot';
  else if (pathname.includes('/kesehatan')) bgColorClass = 'coklat-foot';

  return (
    <div>
      <div className={`w-full pt-10 pb-2 px-8 md:px-16 ${bgColorClass} justify-items-center`}>
        <p className='text-white font-semibold text-2xl text-shadow-black text-shadow-md/30' data-aos='fade-up'>Didukung Oleh:</p>
        <div className='flex flex-row gap-5 items-center' data-aos='fade-up'>
          <Image src="/sponsor.png" alt="" width={600} height={100}/>
        </div>
        <div className="w-[95%] h-[2px] bg-white my-4 mx-auto opacity-60" />
        <div className='flex flex-row gap-2'>
          {icons.map((icon, i) => (
            <a
              key={i}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white rounded-full item-center justify-center justify-items-center p-2 hover:bg-white/30 transition"
            >
              <i className={`${icon.icon} text-white text-2xl`}></i>
            </a>
          ))}
        </div>
        <p className='text-center text-sm md:text-lg xl:text-xl text-white p-2'>© 2025 Leksana Borobudur - KKN PPM UGM. All Rights Reserved.</p>
      </div>
    </div>
  )
}
