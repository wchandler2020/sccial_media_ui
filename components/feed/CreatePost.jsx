import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import {BiVideo} from 'react-icons/bi'
import {BsEmojiSmile} from 'react-icons/bs'

import {MdOutlineInsertPhoto} from 'react-icons/md'
import { RiDeleteBin7Line } from 'react-icons/ri';

const CreatePost = () => {
    const SOCIAL_APP_ENDPOINT = '';
    const {data: session} = useSession()
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [postedImage, setPostedImage] = useState(null);

    const clickHandler = ()=> {
        hiddenFileInput.current.click();
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setPostedImage(e.target.result);
            }
        }
    }

    const deleteImage = () => {
        setPostedImage(null)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(inputRef.current.value)return;
        const formData = new FormData();

        formData.append('file', postedImage);
        formData.append('post', inputRef.current.value)
        formData.append('name', session?.user.name);
        formData.append('email', session?.user.email);
        formData.append('profilePic', session?.user.image);

        axios.post(SOCIAL_APP_ENDPOINT, formData, {
            headers: {Accept: 'application/json'},
        }).then((response) => {
             inputRef.current.value = '';
             deleteImage();
        }).catch(error => console.error(error))

    }
  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
        <div className="flex p-4 space-x-2 items-center">
            <Image src={session?.user.image} height={50} width={50} className='rounded-full cursor-pointer'/>
            <form className='flex flex-1'>
                <input type="text"  placeholder={`${session?.user.name.split(' ')[0]}, what's on your mind? `} className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4' ref={inputRef}/>
                <button hidden onClick={submitHandler}></button>
            </form>
        </div>
        {postedImage && (
            <div className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transistion duration-150 cursor-pointer'>
                <img src={postedImage} className='h-10 object-contain'/>
                <RiDeleteBin7Line className='h-8 hover:text-red-500' onClick={deleteImage}/>
            </div>
        )}
        <div className="flex justify-evenly py-2">
            <div className='flex p-1 items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded hover:cursor-pointer'>
                <BiVideo size={20} className='text-red-500'/>
                <p className='font-semibold text-gray-600'>Live Video</p>
            </div>
            <div onClick={clickHandler} className='flex p-1 items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded hover:cursor-pointer'>
                <MdOutlineInsertPhoto size={20} className='text-green-500' />
                <p className='font-semibold text-gray-600'>Photos/Video</p>
                <input type="file" hidden accept='image/*' ref={hiddenFileInput} onChange={addImageToPost}/>
            </div>
            <div className='flex p-1 items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded hover:cursor-pointer'>
                <BsEmojiSmile size={20} className='text-yellow-500'/>
                <p className='font-semibold text-gray-600'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost