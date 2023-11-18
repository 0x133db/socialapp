import React from 'react'
import "@/app/globals.css";
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"
import HeaderIcon from './HeaderIcon'
import JointIcon from '@/public/joint.png'
import UserAvatar from '@/public/user.png'
import Link from 'next/dist/client/link';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    PlayIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PLayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

const Header = () => {
    const { data: session, status } = useSession();
    console.log('#################################################### \n data:')
    console.log(session)
    console.log('####################################################')



    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/*Left*/}
            <div className='flex items-center'>
                {/*<Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />*/}
                <div className=' h-10 w-10 relative mr-2 rounded-full justify-center items-center bg-blue-400 bg-opacity-0'>
                    <Link href="/home">
                        <Image src= {JointIcon} className=' cursor-pointer absolute right-1 bottom-1' width={34} height={34} layout="fixed" />
                    </Link>
                </div>
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className=' hidden sm:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder='Search' />
                </div>
            </div>
            {/*Center*/}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/*Right*/}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/*Profile Picture*/}
                <Image 
                    onClick={signOut}
                    className='rounded-full cursor-pointer'
                    src={UserAvatar}
                    width={40}
                    height={40}
                    layout='fixed'
                >

                </Image>
                <p className='hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            </div>
        </div>
    )
}

export default Header