import React from "react";

import illustration from "@/@assets/@img/illustration.png";

function Main() {
  return (
    <section class="w-full container mx-auto px-6 mb-12 antialiased bg-white select-none">
      <div class="max-w-7xl flex items-center justify-center">
        <div class="max-w-lg px-4 md:py-32 py-8 text-left md:max-w-none md:w-1/2">
          <h1 class="text-2xl font-extrabold tracking-tight text-center md:text-left text-gray-900 leading-tightest md:leading-10 sm:leading-none md:text-5xl lg:text-6xl flex flex-col">
            <span class="inline-block md:block">Tengsiz, Enterprise</span>
            <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-blutter to-blue-500">
              IT - xizmatlar
            </span>
          </h1>
          <div className="get__started__illustartion | my-3 md:my-0 w-2/3 md:w-1/2 mx-auto md:hidden transform scale-90">
            <img src={illustration} alt="ill" className="" />
          </div>
          <div class="mt-5 text-gray-500 md:my-12 md:max-w-lg text-center md:text-left lg:text-lg">
            Simplifying the creation of landing pages, blog pages, application
            pages and so much more!
          </div>
          <a
            href="tel:+99897271449"
            className="py-1 md:py-2 my-6 | mx-auto md:mx-0 w-2/3 md:w-1/3 | flex items-center justify-center | md:text-lg text-white |  rounded-full get__started__btn transform transition ease-in duration-100"
          >
            Qong'iroq
          </a>
        </div>
        <div className="get__started__illustartion | hidden md:block |  w-1/2 transform scale-90">
          <img src={illustration} alt="ill" className="" />
        </div>
      </div>
    </section>
  );
}

export default Main;
