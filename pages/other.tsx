import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import '../styles/index.css'

const Other: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Other Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 sm:shadow-md shadow rounded bg-white mt-6">
        <h1 className="text-indigo-500 font-sans font-thin text-xl sm:text-3xl">
          Other Page
        </h1>
      </div>
    </div>
  )
}

Other.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return {}
}

export default Other
