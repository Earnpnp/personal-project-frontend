import React from "react";

import logo from "../../../assets/images/logo.gif";

function WelcomeHeader({}) {
  return (
    <div className="px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="logo-left">
          <a href="/" className="logo">
            <img src={logo} alt="logo" className="h-20" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;
