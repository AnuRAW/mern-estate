import {GoogleAuthProvider,getAuth,signInWithPopup }  from '@firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { SignInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
const dispatch = useDispatch();
const navigate = useNavigate();
const handleGoogleClick = async()=>{
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app) ;
    const result = await signInWithPopup(auth,provider);
    const res = await fetch('/api/auth/google',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({name:result.user.displayName,
        email:result.user.email,
        photo:result.user.photoURL})
    })
    const data = await res.json();
    
    dispatch(SignInSuccess(data))
    navigate('/');
  } catch (error) {
    console.log("Couldn't sign with google",error)
  }
}
  return (
    <button className=' bg-rose-600  text-white hover:bg-rose-800 transition duration-200  font-bold py-2 border rounded-lg uppercase' onClick={handleGoogleClick} type='button' >Continue With Google</button>
  )
}

