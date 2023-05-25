import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../config/axios";

function PaymentContent() {
  const [addSlip, setAddSlip] = useState(null);
  const navigate = useNavigate();
  const { orderId } = useParams();

  const handleClickAddSlip = async (e) => {
    try {
      const formData = new FormData();
      formData.append("image", addSlip);

      await axios.post(`/order/payment/${orderId}`, formData);
      navigate("/success");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-control max-w-xs m-auto flex mt-10 mb-10">
        <label className="flex justify-center pt-5 pb-5">
          <span className="flex text-2xl ">Payment</span>
        </label>
        <div>
          <h1 className="">Account number: 1203-XXX-XXX </h1>
        </div>
        <input
          type="file"
          placeholder="Type here"
          className="input input-bordered input-m w-full max-w-xs mt-5"
          onChange={(e) => {
            if (e.target.files[0]) {
              setAddSlip(e.target.files[0]);
            }
          }}
        />
        <div className="flex justify-center mt-10 ">
          <button
            onClick={handleClickAddSlip}
            className="bg-black text-white rounded-md pt-2 pb-2 hover:bg-gray-700 pr-5 pl-5"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentContent;
