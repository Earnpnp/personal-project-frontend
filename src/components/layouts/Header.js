import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FiUser, FiShoppingCart, FiX } from "react-icons/fi";

function Header(props) {
  const { logout, user, signUp, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

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
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLogin = async () => {
    try {
      await login(email, password);
      setSignUpModal(false);
      navigate("/allproduct");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // const { countCart } = props;
  const handleViewCartBtn = () => {
    navigate("/cart");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar bg-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white" href="/">
            SLEEPYHEAD
          </a>
        </div>

        {user ? (
          <>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="text-white">
                    <FiShoppingCart
                      className="text-lg"
                      onClick={handleViewCartBtn}
                    />
                  </div>
                </label>
              </div>
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="text-white">
                      <FiUser className="text-lg" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between" href="/editprofile">
                        Edit Profile
                      </a>
                    </li>
                    {user?.role === "Admin" ? (
                      <li>
                        <a className="justify-between" href="/addproduct">
                          Admin Mode
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}

                    <li>
                      <a href="/" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-400 font-bold rounded-lg text-md text-center pl-5 pr-5 pt-1 pb-1 "
              onClick={() => setSignUpModal(true)}
            >
              SIGN UP
            </button>

            <button
              type="button"
              className="text-white hover:text-orange-400 font-bold text-md text-center ml-5 mr-5"
              onClick={() => setLoginModal(true)}
            >
              LOGIN
            </button>
          </>
        )}

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
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Header;
