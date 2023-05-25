import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { FiX } from "react-icons/fi";

import logo from "../../../assets/images/logo.gif";

function WelcomeHeader({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();

  const { signUp, login } = useContext(AuthContext);
  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUp({
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
      navigate("/allproduct");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLogin = async () => {
    try {
      await login(email, password);
      setSignUpModal(false);
      navigate("/allproduct");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="logo-left">
          <a href="/" className="logo">
            <img src={logo} alt="logo" className="h-20" />
          </a>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={() => setSignUpModal(true)}
          >
            CREATE AN ACCOUNT
          </button>

          <button
            type="button"
            className="text-black hover:text-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={() => setLoginModal(true)}
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Login */}
      {loginModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pr-8 pl-8">
                {/*header*/}
                <div className="flex justify-between mt-5 mb-5 rounded-t">
                  <div className="flex">
                    <h3 className="text-2xl font-bold ">LOGIN</h3>
                  </div>

                  <div className="">
                    <FiX
                      className="text-red-500 font-bold cursor-pointer mt-2"
                      onClick={() => setLoginModal(false)}
                    />
                  </div>
                </div>

                {/*body*/}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/*footer*/}
                <div className="flex mt-5 mb-5 rounded-b justify-center">
                  <button
                    className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                    type="button"
                    onClick={handleClickLogin}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Sign Up */}
      {signUpModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pr-8 pl-8">
                {/*header*/}
                <div className="flex justify-between mt-5 mb-5 rounded-t">
                  <div className="flex">
                    <h3 className="text-2xl font-bold ">SIGN UP</h3>
                  </div>

                  <div className="">
                    <FiX
                      className="text-red-500 font-bold cursor-pointer mt-2"
                      onClick={() => setSignUpModal(false)}
                    />
                  </div>
                </div>

                {/*body*/}
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {/*footer*/}
                <div className="flex mt-5 mb-5 rounded-b justify-center">
                  <button
                    className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                    type="button"
                    onClick={handleSubmitSignUp}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default WelcomeHeader;
