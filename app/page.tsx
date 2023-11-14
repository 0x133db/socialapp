'use client';

import { createContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { stringify } from 'querystring';
import { useState } from 'react';

export default function  Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<number | null>(null); // Updated state

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const loginResponse = await fetch('http://127.0.0.1:5000/api/csen/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      setResponseStatus(loginResponse.status); // Store the response status
      console.log(loginMessage);
      const data = await loginResponse.json();

      if (loginResponse.ok) {
        setLoginMessage('Login successful!');
      } else {
        setLoginMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      //console.error('Error during login:', error.toString());
      setLoginMessage('An error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Collaborative Social Editing Network</h2>
        
        {/* Authentication Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="username"
              id="email"
              name="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        
        {/* Additional Links */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Login Message */}
        {loginMessage && (
          <div className={`mt-4 ${responseStatus === 200 ? 'text-green-600' : 'text-red-600'}`}>
            {loginMessage}
          </div>
        )}
      </div>
    </div>
  );
};


