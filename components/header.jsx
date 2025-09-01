import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
        <nav className="container px-0 h-16 flex items-center justify-between">
        <Link href="/">
            <Image
                src="/logo.png"
                alt="Logo"
                width={65}
                height={65}
                className="h-[66px] w-[66px] object-contain"
            />
        </Link>
        </nav>
        </header>
  )
}

export default Header