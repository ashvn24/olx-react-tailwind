import React, { useContext, useEffect } from "react";
import { firebaseContext } from "../Context/FirebaseContext";
import { useNavigate } from "react-router-dom";

function Posts() {
  const nav = useNavigate();
  const { post, posts, setView } = useContext(firebaseContext);
  useEffect(() => {
    post();
  }, [post]);

  return (
    <div>
      <div className="bg-gray-100 rounded-md p-4">
        <h2>Most Popular</h2>
        <div className="container mt-3 flex flex-wrap -mx-3">
          {/* single post card */}
          {posts.map((doc, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6"
            >
              <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover cursor-pointer"
                  src={doc.imageUrl}
                  alt="title"
                  onClick={() => {
                    nav("/view");
                    setView(doc);
                  }}
                />

                <div className="p-4">
                  <h2 className="text-xl font-semibold">{doc.item}</h2>
                  <p className="text-gray-600">{doc.category}</p>
                  <p className="mt-2 text-lg font-bold text-green-500">
                    ${doc.price}
                  </p>
                </div>

                <div className="flex justify-between p-4 bg-gray-100">
                  <button className="text-blue-500">Contact Seller</button>
                  <button className="text-gray-500">Save</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
