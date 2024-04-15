import { useSelector } from "react-redux"

function profile() {
  const  currentUser = useSelector(state=> state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
           <img src={currentUser.avatar} alt="Profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2" />
          <input type="text" placeholder="username" id="username" className="boarder p-3 rounded-lg"/>
          <input type="email" placeholder="email" id="email" className="boarder p-3 rounded-lg"/>
          <input type="text" placeholder="password" id="password" className="boarder p-3 rounded-lg"/>
          <button className="bg-slate-500 text-white rounded-lg cursor-pointer hover:opacity-95 disabled:opacity-87">Update Profile</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Signout</span>
      </div>
    </div>
  )
}

export default profile