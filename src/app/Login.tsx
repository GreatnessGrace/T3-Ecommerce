"use client"

import Link from "next/link";

export default function Login() {


  return (
    <div className="flex items-center justify-center h-screen">
      
      <div className="w-96 p-8 border border-gray-300 rounded-xl">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Login</h1>

        <h2 className="text-xl font-bold mb-4 flex items-center justify-center">Welcome back to ECOMMERCE</h2>

        <h3 className="mb-4 flex items-center justify-center">The next gen business marketplace</h3>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter"/>
          </div>
          <div className="flex justify-center">
          <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">LOGIN</button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an Account?{" "}
          <Link 
          href="/login" className=" text-lg hover:underline text-black">&nbsp;&nbsp;SIGN UP
          </Link>
        </p>
      </div>
      
      </div>
  ); 
}
