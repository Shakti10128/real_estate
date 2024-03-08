import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className='p-3 max-w-lg m-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-2'>
        <img src={currentUser.avatar} alt="profile" 
        className='w-24 h-24 rounded-full object-cover self-center cursor-pointer mt-2'
        />

        <input type="text" placeholder='Username' id='username' 
        className='border p-3 rounded-lg'
        />
        <input type="email" placeholder='Email' id='email' 
        className='border p-3 rounded-lg'
        />
        <input type="password" placeholder='Password' id='password' 
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