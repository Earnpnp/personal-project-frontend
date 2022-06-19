import React from "react";
import ProductCard from "../../common/ProductCard";
import Header from "../../layouts/Header";

function AllProductContent() {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <div className="container flex">
          <p className="font-bold mt-8 mb-4">All Products</p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default AllProductContent;
