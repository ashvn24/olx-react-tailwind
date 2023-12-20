import React, { useContext } from 'react'
import olx from "../Assets/olx.png";
import { useNavigate } from 'react-router-dom';
import { firebaseContext } from '../Context/FirebaseContext';


function Navbar() {

  const nav = useNavigate()
  const {user,signout} = useContext(firebaseContext)

  return (
    
    <div >
      <nav className="bg-blue-950 p-2 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={olx} alt="Logo" className="h-10 w-14 mr-2 cursor-pointer" onClick={()=>nav('/')}/>
          
        </div>

        {/* Search bar in the middle */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-2/3 ml-48 p-2 rounded-md  text-white focus:outline-none"
          />
        </div>

        {/* Login and Sell buttons on the right */}
        <div className="flex items-center">
         {user?<span className='text-white mr-4 cursor-pointer' onClick={()=>nav('/profile')}>{user.displayName}</span> : <button className="text-white mr-4" onClick={()=>nav('/login')} >Login</button>}
         {user && <button className="text-white mr-4 bg-yellow-500 px-4 py-2 rounded-md font-bold" onClick={()=>{ signout(); nav('/')}} >Logout</button>}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md font-bold" onClick={()=>{user? nav('/create'):nav('/login')}}>Sell</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
