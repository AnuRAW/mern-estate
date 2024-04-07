import { useState } from "react";
import { Link } from "react-router-dom"

function SignUp() {
  const [formData,setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(formData)
    const res = await fetch('/api/auth/signup',
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    });
    const data =await res.json();
    console.log(data)
   }
   console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7 '>Sign Up</h1>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password'onChange={handleChange} />
        <button type='submit' className='bg-blue-600 hover:bg-blue-800 transition duration-200 text-white font-bold py-2 border rounded-lg uppercase'>Signup</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to={"/signin"} />
        <span className="text-red-500 cursor-pointer font-bold hover:text-red-600">Sign-in</span>
      </div>
    </div>
  )
}

export default SignUp