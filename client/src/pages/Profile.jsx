import React from 'react'
import {useSelector} from 'react-redux'
import { LuImagePlus } from "react-icons/lu";
import { useRef } from 'react';

const Profile = () => {
  // using useRef we will keep track the file 
  const fileRef = useRef(null);
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className='p-3 max-w-lg m-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-2'>
        {/* we dont want to use input file to select the image */}
        <input type="file" ref={fileRef} className='hidden' accept='image/*'/>
       <div className="relative flex items-center justify-center">
       <img src={currentUser.avatar} alt="profile" 
        className='relative w-24 h-24 rounded-full object-cover self-center cursor-pointer mt-2'
        />
        {/* we want to click on icon to upload the image that's why we are using useRef, using this we will call the click funtion to open the fileMenu */}
        <LuImagePlus className='absolute z-10 text-white text-2xl bottom-1 bg-black w-20 rounded-bl-full rounded-br-full bg-opacity-40 cursor-pointer'
        type='file'
        onClick={()=> fileRef.current.click()}
        />
       </div>

        <input type="text" placeholder='Username' id='username' defaultValue={currentUser?.username} required
        className='border p-3 rounded-lg'
        />
        <input type="email" placeholder='Email' id='email' defaultValue={currentUser?.email} required
        className='border p-3 rounded-lg'
        />
        <input type="password" placeholder='Password' id='password' required
        className='border p-3 rounded-lg'
        />

        <button className='bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-95 cursor-pointer'>
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer font-semibold'>Delete account</span>
        <span className='text-red-700 cursor-pointer font-semibold'>Log Out</span>
      </div>
    </div>
  )
}

export default Profile