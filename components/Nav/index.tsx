import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="bg-white p-2 shadow rounded-sm">
    <ul className="flex">
      <li className="p-2 text-blue-500 hover:text-blue-300 ">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="p-2 text-blue-500 hover:text-blue-300 ">
        <Link href="/other">
          <a>Other Page</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
