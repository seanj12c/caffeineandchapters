import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart, CiUser, CiLogout } from "react-icons/ci";
import logo from "../assets/logocp.png";
import { Link } from "react-router-dom";
import logout from "../assets/logout.gif";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showModal, setShowModal] = useState(false);

  const logOut = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between md:justify-around w-full h-24 px-7 mx-auto bg-secondary md:px-20 bg-opacity-95">
      <div onClick={handleNav} className="block p-2 md:hidden">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <Link to={"/home"}>
        <img src={logo} alt="logo" className=" w-28 object-contain" />
      </Link>
      <ul className="hidden text-lg md:flex gap-5">
        <Link to={"/home"}>
          <li className=" hover:text-primary">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className=" hover:text-primary">About</li>
        </Link>
        <Link to={"/seat"}>
          <li className="  hover:text-primary">Seat</li>
        </Link>
        <Link to={"/menu"}>
          <li className=" hover:text-primary">Menu</li>
        </Link>
        <Link to={"/books"}>
          <li className=" hover:text-primary">Books</li>
        </Link>
      </ul>
      <div className="flex gap-7">
        <button>
          <Link to={"/cart"}>
            <CiShoppingCart className="hidden md:block" size={40} />
          </Link>
        </button>
        <button>
          <Link to={"/account"}>
            <CiUser size={40} />
          </Link>
        </button>
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
          className="w-full m-4 py-5 text-lg font-medium tracking-widest text-primary"
        >
          Caffeine and Chapters
        </h1>

        <ul className="p-1 uppercase">
          <Link to={"/home"} onClick={handleNav}>
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Home
            </li>
          </Link>
          <Link to={"/about"} onClick={handleNav}>
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              About
            </li>
          </Link>
          <Link to={"/seat"} onClick={handleNav}>
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Seat
            </li>
          </Link>
          <Link to={"/menu"} onClick={handleNav}>
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Menu
            </li>
          </Link>
          <Link to={"/books"} onClick={handleNav}>
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Books
            </li>
          </Link>
          <div className="flex gap-2">
            <Link to={"/cart"} onClick={handleNav}>
              <button className="p-4 px-6 py-2 mt-4 border border-black rounded-lg active:bg-primary flex gap-3 items-center">
                <CiShoppingCart /> Cart
              </button>
            </Link>

            <button
              onClick={logOut}
              className=" bg-primary text-white p-4 px-6 py-2 mt-4 border border-black rounded-lg active:bg-primary flex gap-3 items-center"
            >
              <CiLogout /> Logout
            </button>
          </div>
        </ul>
      </div>
      {showModal && (
        <div className="fixed bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
            <p>Are you sure you want to Log-out?</p>
            <img className="w-20 object-contain mx-auto" src={logout} alt="" />
            <div className="flex gap-2 justify-center items-center">
              <Link to={"/"}>
                <button
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                  onClick={closeModal}
                >
                  Log-out
                </button>
              </Link>
              <button
                className="mt-4 px-4 py-2 bg-secondary rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
