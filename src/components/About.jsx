import React from "react";
import logo from "../assets/Loga.png";
const About = () => {
  return (
    <div className="w-full h-full pt-24 px-4 ">
      <h1 id="cnc" className="text-center md:text-3xl pt-10 lg:pt-16">
        Review From Client
      </h1>
      <p className="text-center py-1">⭐⭐⭐⭐⭐</p>
      <p className="text-justify md:text-center md:px-60 lg:px-80 md:text-lg">
        The curated book selection is fantastic , and the coffee is top-notch.
        love the cozy atmosphere and friendly staff. perfect blend books and
        brews
      </p>
      <div className="bg-primary h-80 rounded-xl">
        {" "}
        <img
          className="w-20 md:w-24 lg:w-36 object-contain mx-auto"
          src={logo}
          alt=""
        />
        <div className="bg-secondary rounded-xl mt-[-20px] mx-2 z-[-1]">
          <p className="px-3 py-5 text-xs sm:text-base md:text-lg lg:text-xl">
            "Welcome to Caffeine & Chapters, a haven literary enthusiasts and
            coffee connoisseurs alike. Our story begins with a passion for the
            written word and the belief tht a good book and a great cup of
            coffee and bread have the power to transport you to extra ordinary
            realms. we curate a diverse collection of books that cater to every
            taste and preferences. Join us at Caffeine & Chapters, were stories
            unfold, ideas flourish, and every cup is a toast to the endless
            possibilities found within the pages of book"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
