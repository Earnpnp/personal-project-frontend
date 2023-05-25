import React from "react";
import { Button, Result } from "antd";

function SuccessContent() {
  return (
    <>
      <Result status="success" title="Successfully Purchased" />
      <div className="flex justify-center mb-10">
        <a
          href="/addproduct"
          className=" hover:bg-gray-600 text-lg bg-black text-white pt-2 pb-2 pr-4 pl-4 rounded-md"
        >
          Go back
        </a>
      </div>
    </>
  );
}

export default SuccessContent;
