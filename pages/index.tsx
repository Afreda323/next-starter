import React from 'react'
import Head from 'next/head'
import '../styles/index.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 shadow-md rounded bg-white mt-6">
        <h1 className="text-purple-500 font-sans text-xl">
          Welcome to Next.js!
        </h1>
      </div>
    </div>
  )
}

export default Home
