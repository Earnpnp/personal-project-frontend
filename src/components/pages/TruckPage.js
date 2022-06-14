import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/product";
import Card from "../../ui/Card";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function TruckPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getProduct();
      setProducts(res);
    };
    fetch();
  }, []);

  console.log(products);
  return (
    <>
      <Header />
      <Footer />
      {products.map((el) => {
        return <Card key={el.id} nameProduct={el.nameProduct} description={el.description} />;
      })}
    </>
  );
}

export default TruckPage;
