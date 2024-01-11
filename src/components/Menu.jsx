import React, { useState } from "react";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";
import coffee4 from "../assets/coffee4.png";
import coffee5 from "../assets/coffee5.png";
import coffee6 from "../assets/coffee6.png";
import coffee7 from "../assets/coffee7.png";
import coffee8 from "../assets/coffee8.png";
import cartloading from "../assets/shopping.gif";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  const addToCart = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const coffeeData = [
    {
      name: "Expresso",
      image: coffee1,
      price: 210.0,
    },
    {
      name: "Americano",
      image: coffee2,
      price: 190.0,
    },
    {
      name: "Cappuccino",
      image: coffee3,
      price: 230.0,
    },
    {
      name: "Cortado",
      image: coffee4,
      price: 250.0,
    },
    {
      name: "Caramel Macchiato",
      image: coffee5,
      price: 205.0,
    },
    {
      name: "Affogato",
      image: coffee6,
      price: 225.0,
    },
    {
      name: "Iced Coffee",
      image: coffee7,
      price: 195.0,
    },
    {
      name: "Breve",
      image: coffee8,
      price: 245.0,
    },
  ];

  return (
    <div className="w-full h-full pt-24 px-2">
      <h1 id="cnc" className="text-lg pl-4 pt-4">
        Menu {">>"} Coffee Drinks
      </h1>
      <div className="h-full rounded-lg bg-primary flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-2 py-2">
        {coffeeData.map((coffee, index) => (
          <div key={index} className="mx-14 bg-secondary rounded-lg p-2">
            <div className="m-2 bg-white rounded-lg p-2">
              <img
                className="w-32 mx-auto object-contain"
                src={coffee.image}
                alt={coffee.name}
              />
              <h1 id="cnc" className="text-lg">
                {coffee.name}
              </h1>
              <p id="cnc">{`₱${coffee.price.toFixed(2)}`}</p>
              <div className="flex justify-center ">
                <button
                  className="px-4 py-2 bg-secondary rounded-lg"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {showModal && (
          <div className="fixed bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
              <p>Added to cart!</p>
              <img
                className="w-20 object-contain mx-auto"
                src={cartloading}
                alt=""
              />
              <button
                className="mt-4 px-4 py-2 bg-secondary rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
