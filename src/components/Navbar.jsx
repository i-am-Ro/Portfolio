import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ islightmode, setIslightmode }) => {
  const [isopenbar, setIsopenbar] = useState(false);
  return (
    <div
      className={`w-screen h-16 flex fixed items-center p-5 md:p-0 justify-between md:justify-around transition-colors ease-linear duration-700 z-50 ${
        islightmode ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Rohit Mondal
        </h2>
      </ScrollLink>

      <ul className="hidden md:flex text-sm font-semibold gap-3">
        {["home", "about", "projects", "contact"].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-64}
            className={`relative px-2 cursor-pointer
              text-gray-400
              hover:text-transparent hover:bg-clip-text
              hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
              hover:after:w-full hover:after:bg-gradient-to-r
              hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500
              after:transition-all after:duration-300`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </ScrollLink>
        ))}
      </ul>

      <div className="flex gap-1">
        <button
          onClick={() => setIslightmode(!islightmode)}
          className="border h-8 w-8 rounded-lg border-gray-700"
        >
          {!islightmode ? (
            <i className="fa-solid text-yellow-600 fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun text-yellow-600"></i>
          )}
        </button>
        <button
          className={`border md:hidden h-8 w-8 rounded-lg border-gray-700 ${
            isopenbar ? "bg-black/10" : ""
          }`}
          onClick={() => setIsopenbar(!isopenbar)}
        >
          {!isopenbar ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full z-50 transition-transform duration-300 ${
          !isopenbar ? "hidden" : ""
        } border-l shadow-xl ${
          islightmode ? "border-black bg-white" : "border-white bg-black"
        }`}
      >
        <ul className="flex flex-col text-sm font-semibold gap-3 p-2 ml-2 text-gray-900">
          {["home", "about", "projects", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-64}
              className="flex p-2 cursor-pointer hover:text-blue-500"
              onClick={() => setIsopenbar(false)} // close menu on link click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
