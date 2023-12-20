import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Contact Info */}
        <div>
          <p className="font-bold text-lg">Contact Us:</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link to="" className="text-white hover:text-gray-400">
            <FaFacebook size={20} />
          </Link>
          <Link to="" className="text-white hover:text-gray-400">
            <FaTwitter size={20} />
          </Link>
          <Link to="" className="text-white hover:text-gray-400">
            <FaInstagram size={20} />
          </Link>
          <Link to="" className="text-white hover:text-gray-400">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Copyright and Newsletter */}
      <div className="mt-8 text-center">
        <div className="mt-4">
          <p>Subscribe to our newsletter:</p>
          <div className="flex justify-center mb-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 mr-2 border border-gray-600 rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
          </div>
        </div>
        <p>&copy; 2023 olx.com All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
