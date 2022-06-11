import React from "react";

function WelcomeContent() {
  return (
    <>
      <div className="flex justify-center">
        <a
          href="/allproduct"
          className="text-white text-xl hover:bg-transparent hover:text-gray-300 font-bold rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 absolute m-auto mt-[60vh] ml-2"
        >
          SHOP NOW
        </a>
      </div>
    </>
  );
}

export default WelcomeContent;
