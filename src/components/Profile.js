import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import profileimg from '../Assets/profile.jpg'
import { FaEdit } from 'react-icons/fa';
import { firebaseContext } from '../Context/FirebaseContext';

function Profile() {
    const {userProfile,profile,userProfiledata,Delete} = useContext(firebaseContext)

    useEffect(() => {
      profile()
    
    }, [])
    
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4">
      {/* Personal Section */}
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img
              src={profileimg}
              alt="Profile "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">{userProfile.username}</h2>
            <p className="text-gray-600">Phone: {userProfile.phone}</p>
            <p className="text-gray-600">Email: {userProfile.email}</p>
          </div>

            <div className=" top-0 right-0 mr-4 mt-2">
          <FaEdit className="text-gray-600 cursor-pointer" />
            </div>
        </div>   
      </div>

      {/* Items Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
        <div className="bg-gray-100 rounded-md p-4">
        <div className="container mt-3 flex flex-wrap -mx-3">
          {/* single post card */}
          {userProfiledata.map((doc, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6"
            >
              <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover cursor-pointer"
                  src={doc.imageUrl}
                  alt="title"
                />

                <div className="p-4">
                  <h2 className="text-xl font-semibold">{doc.item}</h2>
                  <p className="text-gray-600">{doc.category}</p>
                  <p className="mt-2 text-lg font-bold text-green-500">
                    ${doc.price}
                  </p>
                </div>

                <div className="flex justify-between p-4 bg-gray-100">
                  <button className="bg-red-500 rounded-md py-2 px-2 text-white font-semibold" onClick={()=>{Delete(doc.id)}}>Delete</button>
                  {/* <button className="text-gray-500">Save</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
