import React from "react";
import logo from "../assets/Loga.png";
import googlelogo from "../assets/google.png";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <div className="h-full w-full ">
      <div className="block md:hidden">
        <div className=" bg-primary">
          <img
            className="w-24 flex justify-center mx-auto object-contain"
            src={logo}
            alt="logo"
          />
          <div className="flex justify-around w-full">
            <button className="bg-primary text-white w-1/2 py-2 ">
              <Link id="cnc" to={"/"}>
                Login
              </Link>
            </button>
            <button className="w-1/2 text-primary py-2 bg-white rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-none">
              <Link id="cnc" to={"/signup"}>
                Sign-up
              </Link>
            </button>
          </div>
        </div>
        <div className="pt-10 px-4">
          <h1 className="text-3xl">Signup</h1>
          <p>Welcome to Caffeine & Chapters! </p>
          <form>
            <div className="flex gap-1 justify-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="text">First Name</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Juan"
                  className="px-3 py-2 border border-solid border-black rounded-lg"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="text">Last Name</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Dela Cruz"
                  className=" px-3 py-2 border border-solid border-black rounded-lg"
                />
              </div>
            </div>
            <label htmlFor="tel">Phone Number</label>
            <input
              type="tel"
              id="tel"
              placeholder="09123456789"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="juandelacruz@gmail.com"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />{" "}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••••••"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />
            <div className="flex justify-between py-2">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className=" text-sm">
                  I agree to{" "}
                  <span className="text-primary">
                    Caffeine & Chapters Privacy Policy
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button>
                <Link
                  className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
                  to={"/home"}
                >
                  Register
                </Link>
              </button>
              <button className="flex gap-2 items-center justify-center mx-auto border px-5 py-2 w-52 border-primary rounded-lg">
                <img
                  className="w-4 object-contain items-center"
                  src={googlelogo}
                  alt="google"
                />
                Sign up with Google
              </button>
            </div>
            <p className="text-center flex justify-center gap-2">
              Already have an account?{" "}
              <Link to={"/"} className="text-primary">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* web view dito sa baba */}
      <div className="md:flex justify-between hidden h-screen w-full">
        <div className="w-2/5 bg-primary flex justify-between flex-col">
          <div className="text-center pt-32 flex flex-col w-full gap-3">
            <button>
              <Link
                id="cnc"
                to={"/"}
                className="text-lg text-white bg-primary ml-auto h-16 items-center text-center justify-center w-32 rounded-tl-lg rounded-bl-lg flex"
              >
                Log-in
              </Link>
            </button>
            <button
              id="cnc"
              className="text-lg text-primary ml-auto h-16 bg-white items-center text-center justify-center w-32 rounded-tl-lg rounded-bl-lg"
            >
              Sign-up
            </button>
          </div>
          <div>
            <img className="w-96 mx-auto bottom-0" src={logo} alt="" />
          </div>
        </div>
        <div className="py-36 px-10 w-3/5">
          <h1 className="text-3xl">Sign-up</h1>
          <p>Welcome to Caffeine & Chapters! </p>
          <form>
            <div className="flex gap-1 justify-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="text">First Name</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Juan"
                  className="px-3 py-2 border border-solid border-black rounded-lg"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="text">Last Name</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Dela Cruz"
                  className=" px-3 py-2 border border-solid border-black rounded-lg"
                />
              </div>
            </div>
            <label htmlFor="tel">Phone Number</label>
            <input
              type="tel"
              id="tel"
              placeholder="09123456789"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="juandelacruz@gmail.com"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />{" "}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••••••"
              className="w-full px-4 py-2 border border-solid border-black rounded-lg"
            />
            <div className="flex justify-between py-2">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className=" text-sm">
                  I agree to{" "}
                  <span className="text-primary">
                    Caffeine & Chapters Privacy Policy
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button>
                <Link
                  className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
                  to={"/home"}
                >
                  Register
                </Link>
              </button>
              <button className="flex gap-2 items-center justify-center mx-auto border px-5 py-2 w-52 border-primary rounded-lg">
                <img
                  className="w-4 object-contain items-center"
                  src={googlelogo}
                  alt="google"
                />
                Sign up with Google
              </button>
            </div>
            <p className="text-center flex justify-center gap-2">
              Already have an account?{" "}
              <Link to={"/"} className="text-primary">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
