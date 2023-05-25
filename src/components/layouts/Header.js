import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiUser, FiShoppingCart } from "react-icons/fi";

function Header(props) {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

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
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
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
      </div>
    </>
  );
}

export default Header;
