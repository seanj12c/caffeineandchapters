import React from "react";
import logo from "../assets/Loga.png";
import googlelogo from "../assets/google.png";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
export const Login = () => {
  return (
    <div className="h-full w-full">
      <div className="block md:hidden">
        <div className=" bg-primary block ">
          <img
            className="w-24 flex justify-center mx-auto object-contain"
            src={logo}
            alt="logo"
          />
          <div className="flex justify-around">
            <button className="bg-white w-1/2 py-2 rounded-tl-none rounded-tr-lg rounded-bl-none rounded-br-none">
              <Link id="cnc" to={"/login"}>
                Login
              </Link>
            </button>
            <button className="w-1/2 text-white py-2 bg-primary">
              <Link id="cnc" to={"/signup"}>
                Sign-up
              </Link>
            </button>
          </div>
        </div>
        <div className="pt-10 px-4">
          <h1 className="text-3xl">Login</h1>
          <p>Welcome back! Please enter your details. </p>
          <form>
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
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="/">Forgot Password</a>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button>
                <Link
                  className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
                  to={"/home"}
                >
                  Login
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
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-primary">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* web view dito sa baba */}
      <div className="md:flex justify-between hidden h-screen w-full">
        <div className="w-2/5 bg-primary flex justify-between flex-col">
          <div className="text-center pt-32 flex flex-col w-full gap-3">
            <Clock
              className="text-5xl"
              id="cnc"
              format={"h:mm:ss A"}
              ticking={true}
              timezone={"Asia/Manila"}
              style={{
                color: "white",
                fontFamily: "Orbitron, sans-serif",
              }}
            />
            <button>
              <Link
                id="cnc"
                to={"/"}
                className="text-lg text-primary bg-white ml-auto h-16 items-center text-center justify-center w-32 rounded-tl-lg rounded-bl-lg flex"
              >
                Log-in
              </Link>
            </button>
            <button className="text-lg text-white ml-auto h-16 items-center text-center justify-center w-32 rounded-tl-lg rounded-bl-lg">
              <Link to={"/signup"} id="cnc">
                Sign-up
              </Link>
            </button>
          </div>
          <div>
            <img className="w-96 mx-auto bottom-0" src={logo} alt="" />
          </div>
        </div>
        <div className="py-36 px-10 w-3/5">
          <h1 className="text-3xl">Login</h1>
          <p>Welcome back! Please enter your details. </p>
          <form>
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
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="/">Forgot Password</a>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button>
                <Link
                  className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
                  to={"/home"}
                >
                  Login
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
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-primary">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
