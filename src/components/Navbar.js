import React from 'react'
import olx from "../Assets/olx.png";
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const nav = useNavigate()

  return (
    
    <div >
      <nav className="bg-gray-400 p-2 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={olx} alt="Logo" className="h-10 w-14 mr-2" />
          {/* <span className="text-white font-semibold text-lg">YourLogo</span> */}
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
          <button className="text-white mr-4" onClick={()=>nav('/login')} >Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Sell</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
