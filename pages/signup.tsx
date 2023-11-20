import React from 'react'
import "@/app/globals.css";
const signup = () => {
    return (
        <div className="h-screen mx-auto flex flex-col justify-center items-center bg-gray-200">
            <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-xl">
                <input type="text" placeholder="Username" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <input type="text" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Create Account</button>
            </form>
        </div>
    )
}

export default signup