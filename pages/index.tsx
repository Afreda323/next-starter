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
      <div className="p-4 sm:shadow-md shadow rounded bg-white mt-6">
        <h1 className="text-indigo-500 font-sans font-thin text-xl sm:text-3xl">
          Welcome to Next.js!
        </h1>
      </div>
    </div>
  )
}

export default Home
