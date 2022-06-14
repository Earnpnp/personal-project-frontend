import React from "react";
import AllProductContent from "../layouts/content/AllProductContent";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import UserSidebar from "../layouts/sidebar/UserSidebar";

function AllProductPage() {
  return (
    <>
      <Header />
      <AllProductContent />
      {/* <UserSidebar /> */}
      <Footer />
    </>
  );
}

export default AllProductPage;
