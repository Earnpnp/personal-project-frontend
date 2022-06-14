import React from "react";
import styled from "styled-components";
import productImg from "../../assets/images/product01.png";

const ProductStyle = styled.div`
  width: 50%;
  height: 250px;
  background-image: url(${productImg});
  background-size: 250px;
  background-repeat: no-repeat;
`;

function ProductCard() {
  return (
    <>
    <div className="flex flex-row">
      <div className="max-w-xs">
        <div className="flex mx-auto">
          <ProductStyle />
        </div>
        <div className="px-3 pb-4">
          <a href="/productdetail">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Santa Cruz x Stranger Things Other Dot Mini Skateboard Complete
              7.75 x 30.00
            </h5>
          </a>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ฿ 4,490
            </span>
            <a
              href="/cart"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-xs">
        <div className="flex mx-auto">
          <ProductStyle />
        </div>
        <div className="px-3 pb-4">
          <a href="/productdetail">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Santa Cruz x Stranger Things Other Dot Mini Skateboard Complete
              7.75 x 30.00
            </h5>
          </a>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ฿ 4,490
            </span>
            <a
              href="/cart"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductCard;
