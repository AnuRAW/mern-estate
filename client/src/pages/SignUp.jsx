import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7 '>Sign Up</h1>
      <form className="flex flex-col gap-y-5">
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id='email' />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' />
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