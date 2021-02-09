import React from "react";
import Header from "@/components/Header";
import illustration from "@/@assets/@img/illustration.png";

function Home() {
  return (
    <>
      <Header />
      <section className="get__started px-20 w-full | flex items-center overflow-x-hidden">
        {/* <div
            className="bg-indigo-100 rounded-full absolute"
            style={{
              height: "40rem",
              width: "40rem",
              right: "-10rem",
              top: "-10rem",
              backgroundColor: "black",
            }}
          ></div> */}
        <div className="get__started__text w-5/12">
          <h1 className="text-5xl leading-loose font-bold tracking-wide">
            <span className="text-blutter">IT studio</span>
          </h1>
          <p className="| text-2xl leading-loose font-thin | ">
            Kichik biznesdan to <span className="font-bold">enterprise</span>
            <br />
            kompaniyalar uchun IT xizmatlar
          </p>

          <a
            href="tel:+99897271449"
            className="px-24 py-3 my-6 | inline-block | text-xl text-white |  rounded-full get__started__btn transform transition ease-in duration-100"
          >
            Qong'iroq
          </a>
        </div>
        <div className="get__started__illustartion w-7/12 transform scale-90">
          <img src={illustration} alt="ill" className="" />
        </div>
      </section>
    </>
  );
}
export default Home;
