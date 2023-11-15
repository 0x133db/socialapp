import React from 'react'
import "@/app/globals.css";

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <div className="flex items-center space-x-4">
        <div className="dot fade1"></div>
        <div className="dot fade2"></div>
        <div className="dot fade3"></div>
      </div>
    </div>
  )
}

export default LoadingAnimation