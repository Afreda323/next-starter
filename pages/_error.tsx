import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  const is404 = statusCode && statusCode === 404
  return (
    <div className="p-6 sm:shadow-md shadow rounded bg-white mt-6 text-center">
      <img
        className="inline-block w-8/12 sm:w-4/12 m-auto mb-4"
        alt="Error"
        src={is404 ? '/static/img/not-found.svg' : '/static/img/bug.svg'}
      />
      <h3 className="text-3xl font-thin mt-4">{is404 ? '404' : 'Oops!'}</h3>
      <p className="font-thin mb-4">
        {is404
          ? 'The page you are looking for could not be found.'
          : 'Something went wrong while processing your request.'}
      </p>
      <Link href="/">
        <a className="transition-fast font-thin text-white hover:opacity-75 bg-indigo-500 rounded shadow px-4 py-2 hover:shadow-none">
          Go Home
        </a>
      </Link>
    </div>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
