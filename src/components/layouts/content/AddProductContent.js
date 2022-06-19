import React, { useState } from "react";
import axios from "../../../config/axios";

function AddProductContent() {
  const [nameProduct, setNameProduct] = useState("");
  console.log(nameProduct);
  const [typeProduct, setTypeProduct] = useState("");
  console.log(typeProduct);
  const [descripProduct, setDescripProduct] = useState("");
  console.log(descripProduct);
  const [priceProduct, setPriceProduct] = useState("");
  console.log(priceProduct);
  const [addImage, setAddImage] = useState(null);
  console.log(addImage);

  const handleClickAdd = async (e) => {
    try {
      const formData = new FormData();
      formData.append("img", addImage);
      formData.append("nameProduct", nameProduct);
      formData.append("price", priceProduct);
      formData.append("productType", typeProduct);
      formData.append("description", descripProduct);
      const res = await axios.post("/product/addproduct", formData);
      console.log(res);
      return res.data;
    } catch (err) {}
  };

  return (
    <>
      <div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setNameProduct(e.target.value)}
            value={nameProduct}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setTypeProduct(e.target.value)}
            value={typeProduct}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs"
            onChange={(e) => setDescripProduct(e.target.value)}
            value={descripProduct}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setPriceProduct(e.target.value)}
            value={priceProduct}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Add Image</span>
          </label>
          <input
            type="file"
            placeholder="Type here"
            className="input input-bordered input-m w-full max-w-xs"
            onChange={(e) => setAddImage(e.target.files[0])}
          />
        </div>

        <div>
          <button onClick={handleClickAdd}>ADD</button>
        </div>
      </div>
    </>
  );
}

export default AddProductContent;
