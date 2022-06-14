import React from "react";
import ProductCard from "../../common/ProductCard";


function AllProductContent() {
  return (
    <>
      <div className="flex ml-20">
        <div className="container flex-1 w-64">
          <section className="mb-32 text-gray-800 background-radial-gradient">
            <div className="container mx-auto mt-10">
              <p className="font-bold pb-6">ARE YOU READY FOR SKATE ?</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1vPoY41B6Wg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <p className="pt-6">Location: Pink park</p>
            </div>
          </section>
        </div>

        <div className="flex-column ml-96 mr-36">
          <div>
            <p className="font-bold mt-10">Best Sellers</p>
          </div>
          <div className="mt-6">
            <ProductCard />
          </div>


          <div className="flex-column">
            <div>
            <p className="font-bold mt-10 mb-10">All Products</p>
            </div>
            <span className="mt-80">
              <a
                href="/deck"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                DECK
              </a>
              <a
                href="/truck"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                TRUCK
              </a>
              <a
                href="/wheel"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                WHEEL
              </a>
              <a
                href="/bearing"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                BEARING
              </a>
              <a
                href="/giptape"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                GIP TAPE
              </a>
              <a
                href="/hardware"
                className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded"
              >
                HARDWARE
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProductContent;
