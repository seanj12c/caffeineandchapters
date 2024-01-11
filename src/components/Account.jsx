import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import cover from "../assets/cover.jpg";
import { CiLocationArrow1, CiLogout, CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import coffee5 from "../assets/coffee5.png";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import logout from "../assets/logout.gif";
const Account = () => {
  const [showModal, setShowModal] = useState(false);

  const logOut = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-full w-full pt-24">
      <div className="w-full">
        <img className="h-60 md:h-72  w-full object-cover" src={cover} alt="" />
        <div className="flex justify-center mt-[-110px] md:justify-start md:ml-16">
          <img
            className="w-36  border-secondary border-4 rounded-lg object-contain"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex px-5">
        <div className="px-5">
          <h1 className="text-center md:text-left font-bold text-2xl py-2">
            Sean Jimwell Buclatin
          </h1>
          <div>
            <div className="py-1">
              <div className="flex items-center gap-2">
                <CiLocationArrow1 />
                <h1 className="font-bold">Current Address</h1>
              </div>
              <p className="pl-5">
                0385 Christian Heart Village, Pasong Kawayan 1, city of General
                Trias, Cavite
              </p>
            </div>
            <div className="py-1">
              <div className="flex items-center gap-2">
                <MdAlternateEmail />
                <h1 className="font-bold">Email Address</h1>
              </div>
              <p className="pl-5">buclatinseanjimwell@gmail.com</p>
            </div>
            <div className="py-1">
              <div className="flex items-center gap-2">
                <CiPhone />
                <h1 className="font-bold">Phone Number</h1>
              </div>
              <p className="pl-5">+639 652 37 6005</p>
            </div>

            <button
              onClick={logOut}
              className="hidden md:flex bg-primary text-white p-4 px-6 py-2 mt-1 border border-black rounded-lg active:bg-primary  gap-3 items-center"
            >
              <CiLogout /> Logout
            </button>
          </div>
        </div>

        <div className="bg-secondary h-full md:text-lg lg:text-xl mt-10 lg:mt-0 rounded-2xl p-2 w-full ">
          <div className="flex gap-2 justify-center items-center">
            <h1>Recent Orders</h1>{" "}
            <p className="px-3 py-2 bg-white font-bold rounded-lg">
              {" "}
              <CountUp
                start={0}
                end={1103}
                duration={2.5}
                separator=","
                decimals={0}
                className="px-3 py-2 bg-white rounded-lg"
              />
            </p>
          </div>
          <div className="flex gap-2 justify-center text-xs md:text-base lg:text-lg md:gap-6 lg:gap-11 items-center  border-b">
            <img className="w-20 object-contain" alt="coffee5" src={coffee5} />
            <div>
              <h1 className="font-bold">Caramel Macchiato</h1>
              <p>₱205.00</p>
            </div>
            <div>
              <h1 className="font-bold">Order Time</h1>
              <p>Sunday, November 19, 2023 at 06:37 PM</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center text-xs md:text-base lg:text-lg md:gap-6 lg:gap-11 items-center border-b">
            <img className="w-20 object-contain" alt="coffee5" src={coffee2} />
            <div>
              <h1 className="font-bold">Americano for Sean</h1>
              <p>₱190.00</p>
            </div>
            <div>
              <h1 className="font-bold">Order Time</h1>
              <p>Sunday, November 19, 2023 at 06:37 PM</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center text-xs md:text-base lg:text-lg md:gap-6 lg:gap-11 items-center">
            <img className="w-20 object-contain" alt="coffee5" src={coffee1} />
            <div>
              <h1 className="font-bold">Expresso for Sean J</h1>
              <p>₱210.00</p>
            </div>
            <div>
              <h1 className="font-bold">Order Time</h1>
              <p>Sunday, November 19, 2023 at 06:37 PM</p>
            </div>
          </div>
        </div>
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

export default Account;
