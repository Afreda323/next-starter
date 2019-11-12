import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="bg-white p-2 shadow sm:shadow-md rounded-sm">
    <ul className="flex">
      <li>
        <Link href="/">
          <a className="p-2 font-hairline inline-block text-indigo-500 hover:text-indigo-300">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/other">
          <a className="p-2 font-hairline inline-block text-indigo-500 hover:text-indigo-300">
            Other Page
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
