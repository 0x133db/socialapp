import React from 'react'
import "@/app/globals.css";
import Link from 'next/link';

const Signup = async() => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
      {/* Signup Form */}
      <form className="space-y-4">
        {/* Username Input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {/* Email Input */}
                {/*
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>*/}
        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
      {/* Additional Links */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500">
              Log in here
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup