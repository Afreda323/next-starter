import React, { FC } from 'react'
import Head from 'next/head'
import '../styles/index.css'
import Nav from '../components/nav'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="p-4 shadow-md rounded bg-white mt-6">
        <h1 className="text-purple-500 font-sans text-xl">
          Welcome to Next.js!
        </h1>
      </div>
    </div>
  )
}

export default Home
