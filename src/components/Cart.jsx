import React, { useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import coffee6 from "../assets/coffee6.png";
import coffee7 from "../assets/coffee7.png";
import coffee3 from "../assets/coffee3.png";
import CountUp from "react-countup";
import logo from "../assets/Loga.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Caramel Macchiato",
      image: coffee6,
      size: "M",
      price: 205.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Affogato",
      image: coffee7,
      size: "M",
      price: 225.0,
      quantity: 3,
    },
    {
      id: 3,
      name: "Cappuccino",
      image: coffee3,
      size: "M",
      price: 230.0,
      quantity: 1,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateShippingCost = (subtotal) => {
    if (subtotal < 500) {
      return 22.0;
    } else if (subtotal < 1000) {
      return 34.0;
    } else if (subtotal < 1500) {
      return 45.0;
    } else if (subtotal < 2000) {
      return 52.0;
    } else if (subtotal < 2200) {
      return 63.0;
    } else if (subtotal < 2500) {
      return 71.0;
    } else {
      return 88.0;
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = calculateShippingCost(subtotal); // Assuming a fixed shipping cost
    return subtotal + shippingCost;
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleProceedToPayment = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    window.alert("Order submitted successfully!");
    navigate("/account");
  };

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
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">
                  <img
                    className="w-11 md:w-16 lg:w-20 object-contain mx-auto"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td className="px-4 py-2">
                  <div>
                    <h1 className="font-bold">{item.name}</h1>
                    <div className="flex gap-2 justify-center">
                      <p className="hidden sm:block">{`Size: ${item.size}`}</p>
                      <p>{`₱${item.price.toFixed(2)}`}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <IoIosRemove
                      size={20}
                      onClick={() => handleDecrement(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                    <p>{item.quantity}</p>
                    <IoIosAdd
                      size={20}
                      onClick={() => handleIncrement(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{`₱${(
                  item.price * item.quantity
                ).toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Continue Buying
          </button>
          <div className="text-right w-full max-w-56 md:max-w-72 md:pr-5 md:text-base lg:text-lg">
            <p className="font-bold">{`Subtotal: ₱${calculateSubtotal().toFixed(
              2
            )}`}</p>
            <p className="font-bold">{`Shipping: ₱${calculateShippingCost(
              calculateSubtotal()
            ).toFixed(2)}`}</p>

            <p className="font-bold text-lg md:text-xl lg:text-2xl py-3">
              {`Total: ₱`}
              <CountUp
                start={0}
                end={calculateTotal().toFixed(2)}
                duration={1.0}
                separator=","
                decimals={2}
                className="px-3 py-2 bg-white rounded-lg"
              />
            </p>
            <button
              onClick={handleProceedToPayment}
              className="bg-primary text-white px-4 py-2 w-full rounded-md"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="bg-white border-4 text-xs md:text-base lg:text-lg border-primary p-8 rounded-lg w-full max-w-md">
            <div className="flex justify-end">
              <button onClick={handleModalClose}>&times;</button>
            </div>
            <img className="w-28 object-contain mx-auto" src={logo} alt="" />

            <form className="w-full">
              <div>
                <label>Name:</label>
                <input
                  className="w-full border border-primary rounded-lg"
                  type="text"
                />
              </div>
              <div>
                <label>Address:</label>
                <input
                  className="w-full border border-primary rounded-lg"
                  type="text"
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  className="w-full border border-primary rounded-lg"
                  type="tel"
                />
              </div>
              <div>
                <label>Payment Method:</label>
                <select>
                  <option value="cashOnDelivery">Cash on Delivery</option>
                  <option value="onlinePayment">Online Payment</option>
                </select>
              </div>
              <button
                onClick={handleModalClose}
                className="bg-primary w-full text-white px-4 py-2 mt-4 rounded-md"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
