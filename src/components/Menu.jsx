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
  return (
    <div className="w-full h-full pt-24 px-2">
      <h1 id="cnc" className="text-lg pl-4 pt-4">
        Menu {">>"} Coffee Drinks
      </h1>
      <div className="h-full rounded-lg bg-primary flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-2 py-2">
        {/* box1 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee1}
              alt="coffee1"
            />
            <h1 id="cnc" className="text-lg">
              Expresso
            </h1>
            <p id="cnc">₱210.00</p>
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
        {/* box2 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee2}
              alt="coffee2"
            />
            <h1 id="cnc" className="text-lg">
              Americano
            </h1>
            <p id="cnc">₱190.00</p>
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
        {/* box3 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee3}
              alt="coffee3"
            />
            <h1 id="cnc" className="text-lg">
              Cappuccino
            </h1>
            <p id="cnc">₱230.00</p>
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
        {/* box4 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee4}
              alt="coffee4"
            />
            <h1 id="cnc" className="text-lg">
              Cortado
            </h1>
            <p id="cnc">₱250.00</p>
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
        {/* box5 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee5}
              alt="coffee5"
            />
            <h1 id="cnc" className="text-lg">
              Caramel Macchiato
            </h1>
            <p id="cnc">₱205.00</p>
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
        {/* box6 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee6}
              alt="coffee6"
            />
            <h1 id="cnc" className="text-lg">
              Affogato
            </h1>
            <p id="cnc">₱225.00</p>
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
        {/* box7 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee7}
              alt="coffee7"
            />
            <h1 id="cnc" className="text-lg">
              Iced Coffee
            </h1>
            <p id="cnc">₱195.00</p>
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
        {/* box8 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={coffee8}
              alt="coffee8"
            />
            <h1 id="cnc" className="text-lg">
              Breve
            </h1>
            <p id="cnc">₱245.00</p>
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
