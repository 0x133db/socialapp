'use-client'

import React from 'react'
import Link from 'next/dist/client/link'
import { signIn } from 'next-auth/react';

const Login = () => {

    const handleProviderLogin = async (provider) => {
        console.log('Doing SignIn');
        signIn(provider, { redirect: true, callbackUrl: 'http://localhost:3000/home' })
        console.log('Doing nothing');
    }

    return (
        <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
            <div className="content text-3xl text-center md:text-left">
                <h1 className="text-5xl text-blue-500 font-bold">Facebook</h1>
                <p>Connect with friends and the world around you on Facebook.</p>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-t-lg">
                    <input type="text" placeholder="Username" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <input type="text" placeholder="Password" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                    <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
                    <hr />
                </form>
                <div className='shadow-lg w-80 p-4 flex flex-col bg-white rounded-b-lg'>
                    <button className="w-full bg-green-400 mt-1 mb-4 text-white p-3 rounded-lg font-semibold text-lg" onClick={() => handleProviderLogin('facebook')}>Login with Facebook</button>
                </div>
                <p className="text-center text-sm my-4">
                    Don't have an account? Create one<Link href="/signup"><span className="font-semibold text-center w-full cursor-pointer text-blue-600"> here</span></Link>.
                </p>
            </div>
        </div>
    )
}

export default Login