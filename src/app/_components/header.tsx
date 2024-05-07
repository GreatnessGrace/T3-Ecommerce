import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export  function Header() {
  return (

    <header className="bg-white">
              {/* First Row */}

            <div className="flex justify-end items-center py-1 px-2">

         <div className="flex gap-6 items-center text-sm">
          <span className="text-gray-600 text-sm">Help</span>
          <span className="text-gray-600 text-sm">Orders & Returns</span>
          <span className="text-gray-600 text-sm">Hi, Ankush</span>
        </div>
        </div>
      {/* Second Row */}
      <div className="flex justify-between items-center py-4 px-6">
        {/* Left section */}
        <div>
          <Link href="/" className="text-xl font-bold">ECOMMERCE
          </Link>
        </div>
        {/* Center section */}
        <div className="flex gap-6 font-bold text-gray-900">
          <span>Categories</span>
          <span>Sale</span>
          <span>Clearance</span>
          <span>New Stock</span>
          <span>Trending</span>
        </div>
        {/* Right section */}
        <div className="flex gap-6 items-center">
          <FiSearch className="text-gray-600" />
          <FiShoppingCart className="text-gray-600" />
        </div>
      </div>
      {/* Third Row */}
      <div className="bg-gray-100 py-2 px-6 text-center text-black-900">
      &lt; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Get 10% off on business sign up &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&gt;
      </div>
    </header>
  );
}
