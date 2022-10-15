import Image from 'next/image'
import React from 'react';
import {FiUsers} from 'react-icons/fi'
import SidebarItem from './SidebarItem';
import {MdOutlineGroups, MdOutlineOndemandVideo, MdPhotoCameraBack, MdOutlineExpandMore} from 'react-icons/md';
import {BsShopWindow} from 'react-icons/bs';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
    const {data: session } =  useSession()
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image src={session?.user.image} height={50} width={50} className='rounded-full cursor-pointer '/>
        <p className='hidden sm:inline-flex font-medium'>{session?.user.name.split(' ')[0]}</p>
        </div>
        <SidebarItem Icon={FiUsers} value='Friends'/>
        <SidebarItem Icon={MdOutlineGroups} value='Groups'/>
        <SidebarItem Icon={BsShopWindow} value='Marketplace'/>
        <SidebarItem Icon={MdOutlineOndemandVideo} value='Videos'/>
        <SidebarItem Icon={MdPhotoCameraBack} value='Memories'/>
        <SidebarItem Icon={MdOutlineExpandMore} value='See More'/>
    </div>
  )
}

export default Sidebar