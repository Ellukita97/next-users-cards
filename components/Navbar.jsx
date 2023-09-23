import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex gap-10 bg-gray-900 mb-10 p-3 justify-center  font-bold">
        <Link href="/">
            Home
        </Link>

        <ul>
            <li>
                <Link href="/about">
                    About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar