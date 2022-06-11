import React from "react";

function AllProductContent() {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 background-radial-gradient">
          <p>ARE YOU READY FOR SKATE ?</p>
          <div className="container mx-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1vPoY41B6Wg"
              title="YouTube video player"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             
            ></iframe>
            <p>PINK PARK</p>
          </div>
        </section>
        <div className="flex mx-auto float-right">
          <a href="/deck" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            DECK
          </a>
          <a href="/truck" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            TRUCK
          </a>
          <a href="/wheel" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            WHEEL
          </a>
          <a href="/bearing" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            BEARING
          </a>
          <a href="/giptape" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            GIP TAPE
          </a>
          <a href="/hardware" className="text-white bg-black hover:bg-gray-700 p-2 m-3 rounded">
            HARDWARE
          </a>
        </div>
      </div>
    </>
  );
}

export default AllProductContent;
