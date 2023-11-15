import Link from 'next/link'
import React from 'react'
import LoadingAnimation from '@/components/LoadingAnimation'
import "@/app/globals.css";

const error = () => {

    function handleCLick(){
        window.location.replace('/');
    }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-700 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-full round inline-block hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={handleCLick}
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  )
}

export default error