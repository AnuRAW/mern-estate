import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch , useSelector}  from 'react-redux'
import { SignInStart , SignInSuccess , SignInFailure } from "../redux/user/userSlice";


export default function SignIn() {
  const [formData, setFormData] = useState({})
const{ loading , error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     dispatch(SignInStart());
      const res = await fetch('/api/auth/signin',
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        dispatch(SignInFailure(data.message));
        return;
      }
    dispatch(SignInSuccess(data))
      navigate('/');
    }
    catch (error) {
      dispatch(SignInFailure(error.message));
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7 '>Sign In</h1>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id='email' onChange={handleChange} />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} type='submit' className='bg-blue-600 hover:bg-blue-800 transition duration-200 text-white font-bold py-2 border rounded-lg uppercase'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>don't Have an account ?</p>
        <Link to={"/sign-up"} >
          <span className="text-red-500 cursor-pointer font-bold hover:text-red-600">Sign-up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

