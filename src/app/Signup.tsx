import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      
      <div className="w-96 p-8 border border-gray-300 rounded-xl">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Create your account</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter"/>
          </div>
          <div className="flex justify-center">
          <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">CREATE ACCOUNT</button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Have an Account?{" "}
          <Link href="/login" className=" text-lg hover:underline text-black">&nbsp;&nbsp;LOGIN
          </Link>
        </p>
      </div>
    </div> 
  ); 
}
