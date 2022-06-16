import React from "react";
import { useState } from "react";
import Card from "../../../ui/Card";
import ProductCard from "../../common/ProductCard";
import Header from "../../layouts/Header";

function AllProductContent() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    console.log(product);
    const idx = cartItems.findIndex((x) => x.id === product.id);
    const newCart = [...cartItems];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    setCartItems(newCart);
  };

  const removeItem = (product) => {
    if (product.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, qty: product.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Header countCart={cartItems.length} />
      <div className="max-w-screen-lg mx-auto">
        <div className="container flex">
          <p className="font-bold mt-8 mb-4">All Products</p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <ProductCard
            cartItems={cartItems}
            addItem={addItem}
            onRemove={removeItem}
          />
          <Card addItem={addItem} onRemove={removeItem} />
        </div>
      </div>
    </>
  );
}

export default AllProductContent;
