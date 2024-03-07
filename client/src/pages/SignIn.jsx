import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const dispatch =useDispatch();
  const navigete = useNavigate();
  const [formData,setFormData] = useState({});

  const isLoading = useSelector((state)=>state.user.loading);


  // keep tracking the form value inputs
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  // handling form submit event
  const handleSubmit = async(e)=>{
    dispatch(signInStart());
    // prventig the form to submit
    e.preventDefault();
    const res = await fetch('/api/auth/sign-in',{
      method:"POST",
      headers:{
        "Content-Type":'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json(); 
    if(data?.success === true){
      toast.success(data.message);
      dispatch(signInSuccess(data.userData));
      // navigate to sign in page
      navigete('/');
    }
    else{
      dispatch(signInFailure());
      toast.error(data.message);
    }
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type="email" placeholder='Email' 
        className='border p-3 rounded-lg '
        id='email'
        required
        onChange={handleChange}
        />
        <input type="password" placeholder='Password' 
        className='border p-3 rounded-lg '
        id='password'
        required
        onChange={handleChange}
        />
      <button disabled={isLoading}  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85 cursor-pointer '>
        {isLoading ? "Loading..." : "Continue"}
      </button>
      <OAuth/>
      </form>

      <div className="flex  gap-2 mt-5">
        <h1>Don't have an account?</h1>
        <Link to={'/sign-up'}>
          <span className='font-semibold text-blue-700 hover:underline'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn