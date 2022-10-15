import Image from 'next/image'
import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {BiHome, BiFlag, BiVideo, BiMessageDetail, BiBell} from 'react-icons/bi';
import {IoGameControllerOutline} from 'react-icons/io5';
import {BsShopWindow} from 'react-icons/bs';
import {CgMenuGridO} from 'react-icons/cg'
import {MdOutlineExpandMore} from 'react-icons/md'
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
    const {data: session } = useSession()
  return (
    <div className='bg-white flex items-center p-3 shadow-md top-0 sticky z-50 h-16'>
        <div className="flex min-w-fit">
            <Image src='https://st.depositphotos.com/1008709/4676/i/950/depositphotos_46768767-stock-photo-hands-in-art-logo.jpg' height={50} width={50}/>
        </div>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
            <BsSearch />
            <input type='text' placeholder='search...' className='hidden lg:inline-flex bg-transparent focus:outline-none'/>
        </div>
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <BiHome className='mx-auto' size={25}/>
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <BiFlag className='mx-auto' size={25}/>
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <BiVideo className='mx-auto' size={25}/>
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <BsShopWindow className='mx-auto' size={25}/>
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <IoGameControllerOutline className='mx-auto' size={25}/>
                </div>
            </div>
        </div>
        <div className="flex item-center justify-end min-w-fit space-x-2">
            <Image src={session?.user.image} height={50} width={50} className='rounded-full cursor-pointer' onClick={signOut}/>
            <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs rounded-full'>{session?.user.name.split(' ')[0]}</p>
            <CgMenuGridO size={25} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />
            <BiMessageDetail size={25} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />
            <BiBell size={25} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />
            <MdOutlineExpandMore size={25} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />
        </div>
    </div>
  )
}

export default Header