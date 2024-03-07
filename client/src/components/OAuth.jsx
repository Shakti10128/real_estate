import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from '@firebase/auth'
import { app } from '../firebase'
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';



const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async()=>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);
    
            const result = await signInWithPopup(auth,provider);

            const res = await fetch("/api/auth/google",{
              method:"POST",
              headers:{
                'Content-Type':"application/json"
              },
              body: JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
            })
            })

            const data = await res.json();
            dispatch(signInSuccess(data));
            console.log(data)
            navigate('/');
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }
  return (
    // by default button type is submit, change it into button, want to prevent form submition
    <button
    onClick={handleGoogleClick}
    type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-85'>
        Continue with google
    </button>
  )
}

export default OAuth