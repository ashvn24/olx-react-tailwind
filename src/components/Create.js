import React from 'react'
import sell from '../Assets/sell.png'

function Create() {
  return (
    <div style={{backgroundImage:`url(${sell})`}}>
      <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-6">Add Item to Sell</h1>

        {/* Sell Item Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-gray-600 text-sm font-semibold mb-2">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="itemCategory" className="block text-gray-600 text-sm font-semibold mb-2">
              Item Category
            </label>
            <input
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
              type="number"
              id="price"
              name="price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item price"
            />
          </div>

          <div className="mb-4">
              <p className="text-gray-600 text-sm font-semibold mb-2">Image Preview:</p>
              <img src='' alt="Image Preview" className="w-full h-32 object-cover rounded-md" />
            </div>

          <div className="mb-4">
            <label htmlFor="upload" className="block text-gray-600 text-sm font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              id="upload"
              name="upload"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sell Item
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Create
