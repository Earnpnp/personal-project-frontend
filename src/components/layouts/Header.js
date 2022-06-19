import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// import styled from "styled-components";
// import logoImage from "../../assets/images/logoImage.jpg";

// const LogoImg = styled.div`
//   width: 20%;
//   height: 60px;
//   background-image: url(${logoImage});
//   background-repeat: no-repeat;
//   background-size: 200px;
// `;

function Header(props) {
  const [search, setSearch] = useState("");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { countCart } = props;
  const handleViewCartBtn = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="navbar bg-base-100 bor">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            SLEEPYHEAD
          </a>
        </div>
        <div className="form-control">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-black font-bold">{countCart}</span>
              </div>
            </label>

            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={handleViewCartBtn}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=33791"
                    alt=""
                  />
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
