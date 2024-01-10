import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import coffee6 from "../assets/coffee6.png";
import coffee7 from "../assets/coffee7.png";
import coffee3 from "../assets/coffee3.png";
const Cart = () => {
  return (
    <div className="w-full h-full pt-24 px-2">
      <div>
        <Link to={"/menu"}>
          <button>
            <p className="flex items-center gap-2 ml-4 mt-4">
              <IoReturnDownBack size={30} />
              Continue Buying
            </p>
          </button>
        </Link>
      </div>

      <div>
        <h1>Cart</h1>
        <table className="table-auto w-full text-xs md:text-base lg:text-lg text-center">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2"> </th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">
                <img
                  className="w-11 md:w-16 lg:w-20 object-contain mx-auto"
                  src={coffee6}
                  alt=""
                />
              </td>
              <td className="px-4 py-2">
                <div>
                  <h1 className="font-bold">Caramel Macchiato</h1>
                  <div className="flex gap-2 justify-center">
                    <p>Size: M</p>
                    <p>₱205</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">- 2 +</td>
              <td className="px-4 py-2">₱410</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">
                <img
                  className="w-11 md:w-16 lg:w-20 object-contain mx-auto"
                  src={coffee7}
                  alt=""
                />
              </td>
              <td className="px-4 py-2">
                <div>
                  <h1 className="font-bold">Affogato</h1>
                  <div className="flex gap-2 justify-center">
                    <p>Size: M</p>
                    <p>₱225</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">- 3 +</td>
              <td className="px-4 py-2">₱675</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">
                <img
                  className="w-11 md:w-16 lg:w-20 object-contain mx-auto"
                  src={coffee3}
                  alt=""
                />
              </td>
              <td className="px-4 py-2">
                <div>
                  <h1 className="font-bold">Cappuccino</h1>
                  <div className="flex gap-2 justify-center">
                    <p>Size: M</p>
                    <p>₱230</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">- 1 +</td>
              <td className="px-4 py-2">₱230</td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Continue Buying
          </button>
          <div className="text-right md:text-base lg:text-lg">
            <p className="font-bold">Subtotal: ₱1,315.00</p>
            <p className="font-bold">Shipping: ₱46.00</p>
            <p className="font-bold">Total: ₱1,361.00</p>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
