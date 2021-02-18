import React from "react";
import logo from "@/@assets/devilla.svg";

function Header() {
  return (
    <header
      className="md:px-20 px-5 py-3 md:py-6 | flex items-center justify-between sticky top-0 z-50 bg-white bg-opacity-60"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="logo">
        <img src={logo} alt="devilla" className="w-8 h-8 md:w-10 md:h-10 " />
      </div>
      <div className="hamburger group">
        <ul className="| w-10 h-10 md:w-12 md:h-12  | flex flex-col items-center justify-center | group hover:bg-bluish bg-gray-100  rounded-2xl | cursor-pointer | transition duration-200 ease-in-out">
          <li
            className="group-hover:bg-white bg-blue-700 | w-5 md:w-6 | rounded-xl"
            style={{ height: "0.05rem" }}
          ></li>
          <li
            className="group-hover:bg-white bg-blue-700 | w-5 md:w-6 mt-1  md:mt-2 | rounded-xl"
            style={{ height: "0.05rem" }}
          ></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
