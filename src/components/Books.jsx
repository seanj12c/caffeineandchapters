import React, { useState } from "react";
import books1 from "../assets/books1.png";
import books2 from "../assets/books2.png";
import books3 from "../assets/books3.png";
import books4 from "../assets/books4.png";
import books5 from "../assets/books5.png";
import books6 from "../assets/books6.png";
import books7 from "../assets/books7.png";
import books8 from "../assets/books8.png";
import random from "../assets/random.jpg";
const Books = () => {
  const [showModal, setShowModal] = useState(false);

  const viewBook = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full h-full pt-24 px-2">
      <h1 id="cnc" className="text-base pl-4 pt-4">
        Books {">>"} best Stories
      </h1>
      <div className="h-full rounded-lg bg-primary flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-2 py-2">
        {/* books1 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books1}
              alt="books1"
            />
            <h1 id="cnc" className="text-base">
              A little life
            </h1>
            <p>by Hanya Yanagihara</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books2 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books2}
              alt="books2"
            />
            <h1 id="cnc" className="text-base">
              Almond
            </h1>
            <p>by Won-Pyung Sohn</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books3 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books3}
              alt="books3"
            />
            <h1 id="cnc" className="text-base">
              The Da Vinci Code
            </h1>
            <p>by Dan Brown</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books4 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books4}
              alt="books4"
            />
            <h1 id="cnc" className="text-base">
              All the light we cannot see
            </h1>
            <p>by Anthony Doerr</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books5 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books5}
              alt="books5"
            />
            <h1 id="cnc" className="text-base">
              1984
            </h1>
            <p>by Goerge Orwell</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books6 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books6}
              alt="books6"
            />
            <h1 id="cnc" className="text-base">
              Atomic Habits
            </h1>
            <p>by James Clear</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books7 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books7}
              alt="books7"
            />
            <h1 id="cnc" className="text-base">
              From lukov with love
            </h1>
            <p>by Mariana Zapata</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {/* books8 */}
        <div className="mx-14 bg-secondary rounded-lg p-2">
          <div className="m-2 bg-white rounded-lg p-2">
            <img
              className="w-32 mx-auto object-contain"
              src={books8}
              alt="books8"
            />
            <h1 id="cnc" className="text-base">
              A Gentle Reminder
            </h1>
            <p>by Bianca Sparacino</p>
            <div className="flex justify-center ">
              <button
                className="px-4 py-2 bg-secondary rounded-lg"
                onClick={viewBook}
              >
                View
              </button>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
              <img
                className="h-40 w-28 mx-auto object-cover"
                src={random}
                alt=""
              />
              <h1 id="cnc" className="md:text-lg lg:text-xl">
                Title of the Book
              </h1>
              <p className="text-xs md:text-base lg:text-lg font-extralight">
                by Sean Jimwell Buclatin
              </p>

              <p className="text-xs md:text-base lg:text-lg">
                Number of Pages: <span className="font-bold">720pages</span>
              </p>
              <p className="text-xs md:text-base lg:text-lg">
                Publisher: <span className="font-bold">Anonymous</span>
              </p>
              <p className="text-xs md:text-base lg:text-lg">
                Date of Publication: <span className="font-bold">2005</span>
              </p>
              <p className="text-xs md:text-base lg:text-lg">
                Availability:{" "}
                <span className="font-bold">Available to use</span>
              </p>
              <p className="text-xs md:text-base lg:text-lg">
                Book Condition:{" "}
                <span className="font-bold">Good with Plastic Cover</span>
              </p>
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

export default Books;
