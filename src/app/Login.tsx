"use client"

import Link from "next/link";
import { useState } from "react";
export default function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

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
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

            <input type={passwordVisible ? 'text' : 'password'} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter" />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center p-2 mt-6 text-black underline pb-1" onClick={
              togglePasswordVisibility
            }>{passwordVisible ? "Hide": "Show"}</button>
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



// import Link from "next/link";
// import { useState } from "react";

// export default function Login() {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-96 p-8 border border-gray-300 rounded-xl">
//         <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Login</h1>
//         <h2 className="text-xl font-bold mb-4 flex items-center justify-center">Welcome back to ECOMMERCE</h2>
//         <h3 className="mb-4 flex items-center justify-center">The next gen business marketplace</h3>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter"/>
//           </div>
//           <div className="mb-4 relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full pr-10"
//               placeholder="Enter"
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
//               onClick={togglePasswordVisibility}
//             >
//               {passwordVisible ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">LOGIN</button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an Account?{" "}
//           <Link href="/signup" className="text-lg hover:underline text-black">&nbsp;&nbsp;SIGN UP</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
