import React, { useState } from "react";
import axios from "../../../config/axios";

function PaymentContent() {
  const [addSlip, setAddSlip] = useState(null);

  const handleClickAddSlip = async (e) => {
    try {
      const formData = new FormData();
      formData.append("img", addSlip);
      const res = await axios.post("/product/addproduct", formData);
      console.log(res);
      return res.data;
    } catch (err) {}
  };

  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Payment</span>
        </label>
        <div>
          <h1>Account number: 1203-XXX-XXX </h1>
        </div>
        <div>
          <h1>Total: 5000</h1>
        </div>
        <input
          type="file"
          placeholder="Type here"
          className="input input-bordered input-m w-full max-w-xs"
          onChange={(e) => setAddSlip(e.target.files[0])}
        />
      </div>
      <div>
        <button onClick={handleClickAddSlip}>SUBMIT</button>
      </div>
    </>
  );
}

export default PaymentContent;
