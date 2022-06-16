import React from "react";
import { useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function DeckPage() {
  
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header />
      
      <Footer />
    </>
  );
}

export default DeckPage;
