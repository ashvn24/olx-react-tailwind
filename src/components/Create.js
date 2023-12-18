import React, { useContext, useState } from 'react'
import sell from '../Assets/sell.png'
import { useNavigate } from 'react-router-dom'
import { firebaseContext } from '../Context/FirebaseContext'

function Create() {

  const nav = useNavigate()

  const {sellItem} = useContext(firebaseContext)

  const [item, setItem] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')

  const handleSell = (e)=>{
    e.preventDefault();
    try {
      sellItem(image,item,category,price).then(()=>{
        nav('/')
      })
    } catch (error) {
      setError(error.message)
    }
  }



  return (
    <div style={{backgroundImage:`url(${sell})`}}>
      <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-6">Add Item to Sell</h1>
        <div>
        { error && <p className="mb-4 text-sm bg-red-400 py-3 w-full px-2 rounded-md font-semibold text-white">{error}</p> }
        </div>

        {/* Sell Item Form */}
        <form onSubmit={handleSell}>
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-gray-600 text-sm font-semibold mb-2">
              Item Name
            </label>
            <input
            value={item}
              type="text"
              id="itemName"
              name="itemName"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              onChange={(e)=>setItem(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="itemCategory" className="block text-gray-600 text-sm font-semibold mb-2">
              Item Category
            </label>
            <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
              type="text"
              id="itemCategory"
              name="itemCategory"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item category"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600 text-sm font-semibold mb-2">
              Price
            </label>
            <input
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
              type="number"
              id="price"
              name="price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item price"
            />
          </div>

          {image &&<div className="mb-4">
              <p className="text-gray-600 text-sm font-semibold mb-2">Image Preview:</p>
              <img src={URL.createObjectURL(image)} alt=" Preview" className="w-full h-32 object-cover rounded-md" />
            </div>}

          <div className="mb-4">
            <label htmlFor="upload" className="block text-gray-600 text-sm font-semibold mb-2">
              Upload Image
            </label>
            <input
            onChange={(e)=>setImage(e.target.files[0])}
              type="file"
              id="upload"
              name="upload"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6 flex ">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
            >
              Sell Item
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={()=>{nav('/')}}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Create
