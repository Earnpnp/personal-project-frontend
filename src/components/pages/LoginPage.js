import React from "react";
import { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex-col justify-center">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-y-6">
            <div className="max-w-md w-full mx-auto">
              <div className="text-center text-3xl font-bold">LOGIN</div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block" placeholder="Please enter your email" required
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <a href="/" className="ml-2 text-sm text-gray-500">
                FORGOT YOUR PASSWORD ?
              </a>
            </div>
            <div className="flex justify-center md:order-2">
              <button
                type="button"
                className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
