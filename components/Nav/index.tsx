import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="bg-indigo-500 px-2 shadow sm:shadow-md rounded-sm flex justify-between items-center">
    <Link href="/">
      <a className="transition-fast py-4 px-2 font-hairline inline-block text-white hover:text-indigo-200">
        Next.js
      </a>
    </Link>
    <ul className="flex">
      <li>
        <Link href="/">
          <a className="transition-fast text-sm py-4 px-2 font-hairline inline-block text-white hover:text-indigo-200">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/other">
          <a className="transition-fast text-sm py-4 px-2 font-hairline inline-block text-white hover:text-indigo-200">
            Other
          </a>
        </Link>
      </li>
      <li>
        <Link href="/error">
          <a className="text-sm py-4 px-2 font-hairline inline-block text-white hover:text-indigo-200">
            Error
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
