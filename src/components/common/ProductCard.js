import React, { useEffect, useState } from "react";
import Card from "../../ui/Card";
import { getProduct } from "../../api/product";
import axios from "axios";

function ProductCard(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getProduct();
      setProducts(res);
    };
    fetch();
  }, []);

  const hdlAddClick = async (quantity, productId) => {
    const body = { quantity, productId };
    const res = await axios.post("/cart", body);
    // setSelected(true);
    console.log(body);
  };

  console.log(products);
  return (
    <>
      {products?.map((el) => {
        return (
          <Card
            key={el?.id}
            src={el?.img}
            nameProduct={el?.nameProduct}
            description={el?.description}
            hdlAddClick={() => hdlAddClick("1", el.id)}
          />
        );
      })}
    </>
  );
}

export default ProductCard;
