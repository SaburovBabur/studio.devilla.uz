import React from "react";
import ipad from "@/@assets/@img/ipad.png";
function Services() {
  return (
    <section class="w-full bg-white">
      <div className="py-12 | flex items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="rounded-full p-6 px-12 text-4xl md:text-5xl inline-block | bg-clip-text bg-gradient-to-br from-blutter to-blue-500 text-transparent | relative z-20">
            Services
          </h1>
          <p className="w-12 h-2 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 text-center"></p>
        </div>
      </div>

      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img
            src="https://s3.amazonaws.com/www-inside-design/uploads/2017/03/23-free-device-mockups2.jpg"
            class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
          />
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Mobil ilovalar
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Maximize productivity and growth
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Speed past your competition
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Learn the top techniques
            </li>
          </ul>
        </div>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:my-12 md:flex-row max-w-7xl lg:px-16">
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Websaytlar
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Automated task management workflow
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Detailed analytics for your data
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Some awesome integrations
            </li>
          </ul>
        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <div className="ipad shadow-cover rounded-2xl overflow-hidden">
            <img src={ipad} class="" />
          </div>
        </div>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img
            src="https://miro.medium.com/max/800/1*DYkByB1foGvuksJvVlT1bA.png"
            class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
          />
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Murakkab turdagi ilovalar
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Maximize productivity and growth
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Speed past your competition
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blutter rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Learn the top techniques
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
