import React from "react";
import books1 from "../assets/books1.png";
import books2 from "../assets/books2.png";
import books3 from "../assets/books3.png";
import books4 from "../assets/books4.png";
import books5 from "../assets/books5.png";
import books6 from "../assets/books6.png";
import books7 from "../assets/books7.png";
import books8 from "../assets/books8.png";
const Books = () => {
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
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
              <button className="px-4 py-2 bg-secondary rounded-lg">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
