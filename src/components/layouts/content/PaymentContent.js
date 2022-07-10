import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../../../config/axios";
import { useCart } from "../../../context/CartContext";

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
      <div className="form-control w-full max-w-xs m-auto">
        <label className="label">
          <span className="label-text">Payment</span>
        </label>
        <div>
          <h1>Account number: 1203-XXX-XXX </h1>
        </div>
        <input
          type="file"
          placeholder="Type here"
          className="input input-bordered input-m w-full max-w-xs"
          onChange={(e) => {
            if (e.target.files[0]) {
              setAddSlip(e.target.files[0]);
            }
          }}
        />
        <div>
          <button onClick={handleClickAddSlip}>SUBMIT</button>
        </div>
      </div>
    </>
  );
}

export default PaymentContent;
