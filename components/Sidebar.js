import React from 'react'
import { useSession, signOut } from "next-auth/react"
import SidebarRow from '@/components/SidebarRow'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid'
import UserAvatar from '@/public/user.png'

const Sidebar = () => {
    const { data: session, status } = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px] '>
            <SidebarRow src={UserAvatar} title={session.user.name}/>
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See more"/>
        </div>
    )
}

export default Sidebar