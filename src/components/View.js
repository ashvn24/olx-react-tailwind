import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { firebaseContext } from "../Context/FirebaseContext";


function View() {

    const {view,viewPost,userdetails} = useContext(firebaseContext)

    useEffect(() => {
      viewPost()
    }, [])
    

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 flex">
        {/* Left side - Product Image */}
        <div className="w-1/2">
          <img
            src={view.imageUrl}
            alt={view.item}
            className="w-full h-54"
          />
        </div>

        {/* Right side - Product Details */}
        <div className="w-1/2 px-8">
          {/* Product Name, Category, and Price */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold">{view.item}</h2>
            <p className="text-sm text-gray-500">{view.category}</p>
            <p className="text-xl font-bold mt-2 text-green-600">${view.price}</p>
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p>view.description</p>
          </div>

          {/* Seller Information */}
          <div>
            <h3 className="text-xl font-bold mb-2">Seller</h3>
            <p className="mb-2 font-bold">{userdetails.username}</p>
            <p>Contact: {userdetails.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
