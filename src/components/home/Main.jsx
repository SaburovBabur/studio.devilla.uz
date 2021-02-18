import React from "react";

import illustration from "@/@assets/@img/illustration.png";

function Main() {
  return (
    <section className="get__started px-5 md:px-20 w-full | flex items-center justify-center overflow-x-hidden">
      <div className="get__started__text md:w-5/12 flex flex-col items-center justify-center md:inline-block">
        <h1 className="text-5xl leading-loose font-bold tracking-wide">
          <span className="text-blutter">IT studio</span>
        </h1>
        <div className="get__started__illustartion | w-3/4 md:w-7/12 md:hidden transform scale-90">
          <img src={illustration} alt="ill" className="" />
        </div>

        <p className="| text-lg md:text-2xl py-3 md:py-5 leading-loose font-thin | ">
          Kichik biznesdan to <span className="font-bold">enterprise</span>
          <br />
          kompaniyalar uchun IT xizmatlar
        </p>

        <a
          href="tel:+99897271449"
          className="py-1 md:py-5 my-6 | w-2/3 | flex items-center justify-center |  | text-xl text-white |  rounded-full get__started__btn transform transition ease-in duration-100"
        >
          Qong'iroq
        </a>
      </div>
      <div className="get__started__illustartion | hidden md:block |  w-7/12 transform scale-90">
        <img src={illustration} alt="ill" className="" />
      </div>
    </section>
  );
}

export default Main;
