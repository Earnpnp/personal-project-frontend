import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";

function CartContent() {
  // const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  // const [fetch, setFetch] = useState(false);
  const { user } = useAuth();

  const { cart, setFetch } = useCart();

  const hdlDeleteClick = async (id) => {
    const params = id;
    const res = await axios.delete(`/cart/${id}`);
    setFetch((prev) => !prev);
  };

  const hdlIncrement = async (id, quantity) => {
    const total = 1 * quantity + 1;
    await axios.put(`/cart/${id}`, { total });
    setFetch((prev) => !prev);

    // setCount(count + 1);
  };

  const hdlDecrement = async (id, quantity) => {
    const total = 1 * quantity - 1;
    await axios.put(`/cart/${id}`, { total });
    setFetch((prev) => !prev);
  };
  const hdlCheckOut = async () => {
    const createdOrder = await axios.post("/order/addorder", { total });

    for (const el of cart) {
      await axios.post("/order/orderitem", {
        productId: el.id,
        quantity: el.quantity,
        total: el.quantity * el.Product.price,
        orderId: createdOrder.data.order.id,
      });
      await axios.delete(`/cart/${el.id}`);
      setFetch((prev) => !prev);
    }

    navigate(`/payment/${createdOrder.data.order.id}`);
  };
  console.log(cart);

  const total = cart?.reduce((acc, cur) => {
    acc += cur.quantity * cur.Product.price;
    return acc;
  }, 0);

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="py-12">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">
                  Product
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Sub Total
                </h3>
              </div>

              {cart?.map((el) => (
                <>
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-1/5">
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {el.Product.nameProduct}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center w-1/5 items-center">
                      <button
                        className="font-semibold"
                        onClick={() => hdlDecrement(el.id, el.quantity)}
                      >
                        -
                      </button>
                      <h1 className="mx-2 border-transparent text-center w-8">
                        {el.quantity}
                      </h1>

                      <button
                        className="font-semibold"
                        onClick={() => {
                          hdlIncrement(el.id, el.quantity);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {el.Product.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {el.Product.price * el.quantity}
                    </span>
                    <button
                      className="text-center w-1/5 font-semibold text-sm text-red-600"
                      onClick={() => hdlDeleteClick(el.id)}
                    >
                      X
                    </button>
                  </div>
                </>
              ))}
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
                <span className="font-semibold text-sm uppercase">Total</span>
                <span className="font-semibold text-sm">{total}</span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Shipping
                </span>
                <span className="font-semibold text-sm">Free</span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Address</span>
                <div className="font-semibold text-sm">{user?.address}</div>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{total}</span>
                </div>
                <button
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  onClick={hdlCheckOut}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContent;
