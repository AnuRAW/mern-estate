import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/Oauth";



function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData)
      const res = await fetch('/api/auth/signup',
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      const data = await res.json();
      console.log(data)
      if (!data.success === false) {
        setLoading(false);
        setError(data.message)
        return;
      }
      setLoading(false)
      setError(null)
      
      navigate('/sign-in');
    }
    catch (error) {
      setLoading(false)
      setError(data.message)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7 '>Sign Up</h1>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id='email' onChange={handleChange} />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} type='submit' className='bg-blue-600 hover:bg-blue-800 transition duration-200 text-white font-bold py-2 border rounded-lg uppercase'>{loading ? 'Loading...' : 'Signup'}</button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to={"/sign-in"}>
          <span className="text-red-500 cursor-pointer font-bold hover:text-red-600">Sign-in</span>
        </Link>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}

export default SignUp