'use client'
import { useState, useRef, useEffect } from "react";
import { Header } from "../_components/header";
import Link from "next/link";

export default function Signup() {
  const [showVerifyEmail, setShowVerifyEmail] = useState(false); // State to control visibility of verify email section

  const [otp, setOtp] = useState<string[]>(Array(8).fill(""));
  const refs = Array(8)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null));

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < 7) {
      refs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      refs[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    const filledOtp = otp.join("");
    console.log(filledOtp);
    if (filledOtp.length === 8) {
      console.log("OTP entered:", filledOtp);
    }
  }, [otp]);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
      {!showVerifyEmail  && (
        <div className="w-96 p-8 border border-gray-300 rounded-xl">
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
            Create your account
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
                onClick={() => setShowVerifyEmail(true)} // Show verify email section on button click
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Have an Account?{" "}
            <Link href="/login" className=" text-lg hover:underline text-black">
              &nbsp;&nbsp;LOGIN
            </Link>
          </p>
        </div>
        )}

        {/* Conditionally render verify email section */}
        {showVerifyEmail && (
          <div className="m-5 flex items-center justify-center h/2-screen">
            <div className="w-116 p-8 border border-gray-300 rounded-xl">
              <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
                Verify your email
              </h1>

              <h3 className="flex items-center justify-center">
                Enter the 8 digit code you have recieved on
              </h3>

              <h3 className=" font-bold text-sm mb-8 flex items-center justify-center">
                ankush***@gmail.com
              </h3>
              <h2 className="text-black flex items-center justify-start">
                &nbsp;Code
              </h2>

              <form>
                <div className="flex justify-center mb-12">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      ref={refs[index]}
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-10 h-10 m-1 text-center border border-gray-300 rounded-md"
                    />
                  ))}
                </div>
                <div className="flex justify-center">
                <Link href="/login">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 border bg-black border-black text-white rounded-md hover:bg-gray-800 hover:text-white"
                  >
                    VERIFY
                  </button>
                  </Link>

                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
