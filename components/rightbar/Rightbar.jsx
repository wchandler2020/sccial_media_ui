import React from 'react';
import {RiVideoAddFill} from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import {MdOutlineExpandMore} from 'react-icons/md'
import { RiMoreLine } from 'react-icons/ri';
import Contacts from './Contacts';

const Rightbar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiMoreLine />
                </div>
            </div>
        </div>
        
        <Contacts src='https://images.pexels.com/photos/13937077/pexels-photo-13937077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Sandra Anderson' status='online'/>
        <Contacts src='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Kevin Atwell' status='offline'/>
        <Contacts src='https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Dana Shapiro' status='offline'/>
        <Contacts src='https://images.pexels.com/photos/5889715/pexels-photo-5889715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Nathan Abrams' status='online'/>
    </div>
  )
}

export default Rightbar