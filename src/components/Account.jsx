import React from "react";
import profile from "../assets/profile.jpg";
import cover from "../assets/cover.jpg";
import { CiLocationArrow1, CiLogout, CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import coffee5 from "../assets/coffee5.png";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import { Link } from "react-router-dom";
const Account = () => {
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

            <Link to={"/"}>
              <button className="hidden md:flex bg-primary text-white p-4 px-6 py-2 mt-1 border border-black rounded-lg active:bg-primary  gap-3 items-center">
                <CiLogout /> Logout
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-secondary h-full md:text-lg lg:text-xl mt-10 lg:mt-0 rounded-2xl p-2 w-full ">
          <div className="flex gap-2 justify-center items-center">
            <h1>Recent Orders</h1>{" "}
            <p className="px-3 py-2 bg-white rounded-lg">1,103</p>
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
    </div>
  );
};

export default Account;
