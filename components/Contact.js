import React from 'react'
import Image from 'next/image'

const Contact = ({ src, name }) => {
    const fake_status = Math.random() < 0.5;
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <div className='h-12 w-12 bg-blue-800 rounded-full relative'>
            <Image
                    className='rounded-full'
                    objectFit='cover'
                    src={src}
                    layout='fill'
                />
            </div>
            <p>{name}</p>
            <div className={`absolute bottom-2 left-7 h-3 w-3 rounded-full ${fake_status ? 'bg-green-400 animate-bounce' : 'bg-gray-400'}`}></div>
        </div>
    )
}

export default Contact
