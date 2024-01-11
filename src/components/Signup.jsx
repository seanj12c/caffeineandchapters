import React, { useState } from "react";
import logo from "../assets/Loga.png";
import googlelogo from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import register from "../assets/register.gif";
export const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const navigate = useNavigate();

  const registerAccount = () => {
    setShowModal(true);
  };

  const successRegister = () => {
    setShowModal(false);
    window.alert("Account registration successfully!");
    navigate("/home");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const privacyPolicy = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const showGoogle = () => {
    window.alert(
      "Wala po tayong database kaya wala pong Google Sign-in \nDesign lang po talaga yun XD"
    );
  };

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
              <button
                type="button"
                onClick={registerAccount}
                className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
              >
                Register
              </button>
              <button
                onClick={showGoogle}
                className="flex gap-2 items-center justify-center mx-auto border px-5 py-2 w-52 border-primary rounded-lg"
              >
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
                  <button
                    type="button"
                    onClick={privacyPolicy}
                    className="text-primary"
                  >
                    Caffeine & Chapters Privacy Policy
                  </button>
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button
                type="button"
                onClick={registerAccount}
                className="flex items-center justify-center mx-auto bg-primary px-5 py-2 w-52 rounded-lg text-white"
              >
                Register
              </button>
              <button
                onClick={showGoogle}
                className="flex gap-2 items-center justify-center mx-auto border px-5 py-2 w-52 border-primary rounded-lg"
              >
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
      {showModal && (
        <div className="fixed bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
            <p>Are you sure you want to Register?</p>
            <img
              className="w-20 object-contain mx-auto"
              src={register}
              alt=""
            />
            <div className="flex gap-2 justify-center items-center">
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                onClick={successRegister}
              >
                Register
              </button>

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
      {showModal2 && (
        <div className="fixed bg-primary top-0 left-0 w-full px-9 h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
            <h1 className="text-justify px-32">
              Caffeine and Chapters Privacy Vibes <br /> Yo, book nerds and
              coffee addicts! Welcome to the Caffeine and Chapters spot, where
              the pages turn and the coffee flows. We're all about good reads
              and tasty brews, but we also respect your privacy hustle. Peep our
              Privacy Vibes:
              <br /> 1. Sippin' on Your Deets:
              <br /> We only grab the must-haves to keep things flowing – your
              name, email, and maybe your lit genre preferences. Don't worry,
              we're not out here tryna write your life story – just enough to
              keep your experience on point. <br />
              2. Privacy Game Strong:
              <br /> Your info is safe with us – no sketchy moves. We're not
              selling, trading, or spilling your secrets to anyone not rollin'
              with our squad. Our digital bouncers keep your data locked down
              tighter than your favorite mystery novel.
              <br /> 3. Cookie Crumbs, Not Snack Breaks:
              <br /> We roll with digital cookies, not the edible kind. These
              crumbs help us vibe with what you're into – like whether you're
              all about sci-fi or vibing with romance. If you're not feeling the
              cookie vibes, tweak your browser settings, but heads up – some
              features might catch a chill.
              <br /> 4. Links to Cool Spots:
              <br /> We've got links to some rad places – think book suggestions
              or dope coffee gear. Once you click, it's their turf, and our vibe
              can't cover you. Check their privacy moves before you dive in.
              <br /> 5. Updates to the Privacy Playlist:
              <br /> Our vibe might switch up like a fresh playlist. We'll hit
              you with the updates. If you're still vibing with us, awesome! If
              not, it's cool – you can always bounce. Keep it lit at Caffeine
              and Chapters! 📚☕️
            </h1>
            <button
              type="button"
              onClick={closeModal2}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
