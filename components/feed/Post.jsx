import Image from 'next/image';
import React from 'react';
import {BsHandThumbsUp, BsShare} from 'react-icons/bs';
import {FaRegCommentAlt} from 'react-icons/fa'

const Post = () => {
    const date = new Date().toLocaleString()
  return (
    <div className='flex flex-col'>
        <div className="bg-white mt-6 rounded-md p-4">
            <div className="flex items-center space-x-2">
                <img className='round-full w-10 h-10' src='https://st.depositphotos.com/1008709/4676/i/950/depositphotos_46768767-stock-photo-hands-in-art-logo.jpg' />
                <div>
                    <p className='font-medium'>William Chandler</p>
                    <p className='text-xs text-gray-500'>{date}</p>
                </div>
            </div>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sint!</p>
        </div>
        <div className='relative h-60 md:h-96 bg-white '>
            <Image src={'https://images.pexels.com/photos/5720807/pexels-photo-5720807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} layout='fill' objectFit='cover'/>
        </div>
        <div className='flex items-center justify-center bg-white p-2'>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <BsHandThumbsUp className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <FaRegCommentAlt className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                <BsShare className='h-4'/>
                <p className='text-xs sm:text-base'>Share Link</p>
            </div>
        </div>
    </div>
  )
}

export default Post