import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';

import { firebaseContext } from "../Context/FirebaseContext";

function Signup() {

  const { createUser,update,store } = useContext(firebaseContext)

  const nav = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignin = async (e) => {
    e.preventDefault()
    try {
        await createUser(email,password).then(()=>{
          update(username)
        }).then(()=>{
          store(username,Phone)
        })
        nav('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div style={{backgroundImage:'url(https://st.depositphotos.com/36062274/51512/i/600/depositphotos_515129288-stock-photo-kharkiv-ukraine-november-2020-shopping.jpg)'}}>
       <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        {/* Logo at the top center */}
        <div className="flex items-center justify-center mb-8">
          <img src={logo} alt="Logo" className="h-24 w-34 cursor-pointer"
              onClick={() => nav("/")}/>
        </div>
        <div>
        { error && <p className="mb-4 text-sm bg-red-400 py-3 w-full px-2 rounded-md font-semibold text-white">{error}</p> }

        </div>
        {/* Signup Form */}
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 text-sm font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}

            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>

          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
