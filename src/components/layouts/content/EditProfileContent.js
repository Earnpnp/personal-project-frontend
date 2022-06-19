import React, { useState } from "react";
import axios from "../../../config/axios";

function EditProfileContent() {
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userImage, setUserImage] = useState(null);
  console.log(userPhone, userImage, userAddress);

  const handleClickUpdateUser = async (e) => {
    try {
      const formData = new FormData();
      formData.append("profilePic", userImage);
      formData.append("address", userAddress);
      formData.append("phone_number", userPhone);
      const res = await axios.put("/users", formData);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => setUserPhone(e.target.value)}
                value={userPhone}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-full max-w-xs"
                onChange={(e) => setUserAddress(e.target.value)}
                value={userAddress}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                placeholder="Type here"
                className="input input-bordered input-m w-full max-w-xs"
                onChange={(e) => setUserImage(e.target.files[0])}
              />
            </div>

            <div>
              <button onClick={handleClickUpdateUser}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default EditProfileContent;
