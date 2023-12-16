import React from "react";

function Posts() {
  return (
    <div>
      <div className="bg-gray-100 rounded-md p-4">
      <h2>Most Popular</h2>
        <div className="container mt-3 flex space-x-4">
          <div>
            <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
              <img
                className="w-60 h-48 object-cover"
                src="https://images.assettype.com/fortuneindia%2F2023-08%2F9dc1396c-a9b2-43f5-b7d9-78bd3eaf5be5%2FBrief_Bike_1.jpg?w=1250&q=60"
                alt="title"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">dwdw</h2>
                <p className="text-gray-600">description</p>
                <p className="mt-2 text-lg font-bold text-green-500">$price</p>
              </div>

              <div className="flex justify-between p-4 bg-gray-100">
                <button className="text-blue-500">Contact Seller</button>
                <button className="text-gray-500">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
