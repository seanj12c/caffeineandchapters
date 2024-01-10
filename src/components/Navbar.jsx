import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import logo from "../assets/logocp.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between md:justify-around w-full h-24 px-7 mx-auto bg-secondary md:px-20 bg-opacity-95">
      <div onClick={handleNav} className="block p-2 md:hidden">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <a href="#home">
        <h1
          id="cnc"
          className="w-full text-xl font-medium tracking-widest hidden md:block text-primary"
        >
          Caffeine and Chapters
        </h1>
        <img
          src={logo}
          alt="logo"
          className="md:hidden block w-28 object-contain"
        />
      </a>
      <ul className="hidden text-lg md:flex gap-5">
        <Link to={"/home"}>
          <li className=" hover:text-primary">Home</li>
        </Link>
        <a href="#about">
          <li className=" hover:text-primary">About</li>
        </a>
        <a href="#seat">
          <li className="  hover:text-primary">Seat</li>
        </a>
        <a href="#menu">
          <li className=" hover:text-primary">Menu</li>
        </a>
        <a href="#books">
          <li className=" hover:text-primary">Books</li>
        </a>
      </ul>
      <div className="flex gap-7">
        <CiShoppingCart className="hidden md:block" size={40} />
        <CiUser size={40} />
      </div>

      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <h1
          id="cnc"
          className="w-full m-4 text-lg font-medium tracking-widest text-primary"
        >
          Caffeine and Chapters
        </h1>

        <ul className="p-4 uppercase">
          <a onClick={handleNav} href="#home">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Home
            </li>
          </a>
          <a onClick={handleNav} href="#about">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              About
            </li>
          </a>
          <a onClick={handleNav} href="#seat">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Seat
            </li>
          </a>
          <a onClick={handleNav} href="#menu">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Menu
            </li>
          </a>
          <a onClick={handleNav} href="#books">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Books
            </li>
          </a>
          <a onClick={handleNav} href="#menu">
            <button className="p-4 px-6 py-2 mt-4 border border-black rounded-lg active:bg-primary">
              Logout
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};
