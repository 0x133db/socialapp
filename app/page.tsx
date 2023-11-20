'use client';

import { createContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { stringify } from 'querystring';
import { useState } from 'react';
import Login from '../components/Login'
import { signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth';

export default function Home() {
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

  const handleProviderLogin = async (provider: string) => {
    signIn(provider, { redirect: true, callbackUrl: 'http://localhost:3000/home' })
  }

  return (
    <Login />
  )
}


{/*

  

  */}