import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const  currentUser = useSelector(state=> state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between  item-center max-w-6xl max-auto p-3'>
       <Link to="/">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Anurag</span>
        <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form action="" className='bg-slate-100 pg-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...'  className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-4'>
         <Link to="/">
           <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
           </Link> 
          <Link to="/about">
           <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About us</li>
            </Link>
         <Link to="/profile">
          {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="Profile" />
          ) : (
           <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Sign in</li>
           
          )}
           </Link>
         <Link to="/"> 
         <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Contact</li>
         </Link>
        </ul>
        </div>
    </header>
  )
}
