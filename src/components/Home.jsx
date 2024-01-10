import React from "react";
import coffee from "../assets/coffee.png";
export const Home = () => {
  return (
    <div className="h-full w-full pt-24 md:px-20 md:h-screen md:flex flex-row-reverse ">
      <div className="md:w-1/2">
        <img
          className="w-80 md:w-full md:h-full object-contain mx-auto pt-5"
          src={coffee}
          alt=""
        />
      </div>
      <div className="px-2 flex flex-col justify-center md:w-1/2">
        <h1
          id="cnc"
          className="text-center md:text-left md:text-3xl lg:text-5xl"
        >
          Sip, Read, Repeat Energizing your Imagination
        </h1>
        <p className="text-justify py-2 md:text-lg lg:text-2xl">
          Elevate your reading experience with the perfect blend of curated
          books and exceptional brews. Explore our literary haven, where every
          sip enhances the magic of each chapter. Immerse yourself in a world
          where words and caffeine unite for a uniquely enriching escape.
        </p>
        <button className="bg-secondary mx-auto rounded-lg py-2 px-3">
          Order Now
        </button>
      </div>
    </div>
  );
};
