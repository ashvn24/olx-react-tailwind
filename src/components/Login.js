import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { firebaseContext } from "../Context/FirebaseContext";
function Login() {
  const nav = useNavigate();
  const { login } = useContext(firebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://st.depositphotos.com/36062274/51512/i/600/depositphotos_515129288-stock-photo-kharkiv-ukraine-november-2020-shopping.jpg)",
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          {/* Logo at the top center */}
          <div className="flex items-center justify-center mb-8">
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-34 cursor-pointer"
              onClick={() => nav("/")}
            />
          </div>
          <div>
            {error && (
              <p className="mb-4 text-sm bg-red-400 py-3 w-full px-2 rounded-md font-semibold text-white">
                {error}
              </p>
            )}
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
