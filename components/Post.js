import React from 'react'
import Image from 'next/image'
import UserAvatar from '@/public/user.png'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({ name, message, email, postImage, image, timestamp }) => {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <Image src={UserAvatar} className='rounded-full' width={40} height={40} alt='' layout='fixed'/>
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>
                            {timestamp}
                        </p>
                    </div>
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            {postImage && (
                <div className='relative h-56 md:96 bg-white'>
                    <Image src={postImage} objectFit='cover' layout='fill' />
                </div>
            )}
            {/*Footer of Post*/}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2x hover:text-blue-500'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none'>
                <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon rounded-none rounded-br-2xl'>
                <ShareIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post