import React from "react";
import logo from "@/@assets/devilla.svg";
import Title from "@/components/Title.jsx";

function Pot() {
  return (
    <section className="px-5 md:px-24">
      <Title name="Ishlarimiz" />

      <div className="div relative">
        <div
          className="w-64 h-64 bg-blue-600 rounded-full absolute top-5"
          style={{ right: "25rem" }}
        ></div>
        <div
          className="Pot flex flex-col md:flex-row place-content-center rounded-xl z-20 | p-5 |  overflow-hidden"
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px rgba(0,0,0,.08)",
          }}
        >
          <div className="service w-full">
            <div className="portfolio__logo w-10">
              <img src={logo} alt="" srcset="" />
            </div>

            <div className="portfolio__type | p-2 my-5 | inline-block | text-sm | bg-gray-100 text-blue-600  | rounded-lg">
              Corporate
            </div>

            <h1 className="portfolio__title | text-lg md:text-2xl font-bold | text-blue-800">
              Netflix for car rentals with Loopit
            </h1>

            <ul className="my-8 grid md:grid-cols-2">
              <li className="my-1 md:my-2 text-sm md:text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  stroke="rgb(30, 64, 175)"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  className="mr-2"
                >
                  <title id="circleOkIconTitle">OK</title>
                  <polyline points="7 13 10 16 17 9" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                UI / UX design
              </li>
              <li className="my-1 md:my-2 text-sm md:text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  stroke="rgb(30, 64, 175)"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  className="mr-2"
                >
                  <title id="circleOkIconTitle">OK</title>
                  <polyline points="7 13 10 16 17 9" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                API development
              </li>
              <li className="my-1 md:my-2 text-sm md:text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  stroke="rgb(30, 64, 175)"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  className="mr-2"
                >
                  <title id="circleOkIconTitle">OK</title>
                  <polyline points="7 13 10 16 17 9" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Frontend with JAMstack
              </li>
              <li className="my-1 md:my-2 text-sm md:text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  stroke="rgb(30, 64, 175)"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  className="mr-2 text-blue-800"
                >
                  <title id="circleOkIconTitle">OK</title>
                  <polyline points="7 13 10 16 17 9" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Animation
              </li>
            </ul>

            <a
              href="#"
              className="py-3 px-8 transition hidden md:inline-block duration-100 ease-in | rounded-lg text-blutter | bg-white border border-blutter hover:text-white hover:bg-blutter |"
            >
              Visit Site
            </a>
          </div>
          <div className="portfolio__img w-full md:w-4/5 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://raw.studio/wp-content/uploads/ipad-snappr@2x.png"
              alt=""
              srcset=""
            />
          </div>
          <a
            href="#"
            className="py-1 md:py-3 mt-5 px-8 transition flex justify-center md:hidden duration-100 ease-in | rounded-lg text-white bg-blutter"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pot;
