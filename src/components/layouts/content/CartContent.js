import React from "react";

function CartContent() {
  return (
    <>
      <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          Your Cart (1 item)
        </h1>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Santa Cruz x Stranger Things Other Dot Mini Skateboard Complete 7.75 x
          30.00
        </p>
      </div>
      <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Order Summary
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Sub Total:</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Shipping</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Total:</p>
      </div>
    </>
  );
}

export default CartContent;
