import React from "react";

function CartContent() {
  return (
    <>
      <body className="max-w-screen-lg mx-auto">
        <div className="py-12">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-1/5">
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">Iphone 6S</span>
                  </div>
                </div>

                <div className="flex justify-center w-1/5 items-center">
                  <span class="font-semibold">+</span>
                  <input
                    className="mx-2 border-transparent text-center w-8"
                    type="text"
                    value="1"
                  />
                  <span class="font-semibold">-</span>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
                <span className="text-center w-1/5 font-semibold text-sm text-red-600">
                  X
                </span>
              </div>

              <a
                href="/allproduct"
                className="font-semibold text-indigo-600 text-sm mt-8"
              >
                Continue Shopping
              </a>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items 3</span>
                <span className="font-semibold text-sm">590$</span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default CartContent;
