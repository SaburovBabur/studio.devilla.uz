import React from "react";
import logo from "@/@assets/devilla.svg";
import brush from "@/@assets/@icons/brush.svg";
import lock from "@/@assets/lock.svg";

function WorkedCompanies() {
  return (
    <section className="px-5 md:px-24">
      <div className="py-12 | flex items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="rounded-full p-6 px-12 text-4xl md:text-5xl inline-block | text-blutter | relative z-20">
            Companies
          </h1>
          <p className="w-12 h-2 rounded-lg bg-blutter text-center"></p>
        </div>
      </div>

      <div className="companies flex items-center justify-evenly mb-12">
        <div className="company w-10 md:w-16">
          <a href="#">
            <img
              src={logo}
              alt="company"
              className="company__logo w-10 md:w-16"
            />
          </a>
        </div>
        <div className="company w-10 md:w-16">
          <a href="#">
            <img
              src={lock}
              alt="company"
              className="company__logo w-10 md:w-16"
            />
          </a>
        </div>

        <div className="company w-10 md:w-16">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png"
              alt="company"
              className="company__logo w-10 md:w-16"
            />
          </a>
        </div>

        <div className="company w-10 md:w-16">
          <a href="#" className="company">
            <img
              src="https://epcenergy.uz/@assets/img/logo.jpg"
              alt="company"
              className="company__logo w-10 md:w-16 "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkedCompanies;
