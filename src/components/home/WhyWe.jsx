import React from "react";
import {
  GatsbyGuard,
  GatsbyPen,
  GatsbyPerformance,
  GatsbyScale,
} from "@/@assets/@icons";
function WhyWe() {
  let services = [
    {
      icon: GatsbyPerformance,
      title: "Security",
      description:
        "Sizning saytingiz maksimal tarzda tez ishlashi uchun yangi texnologiyalar qo'llaymiz",
    },
    {
      icon: GatsbyGuard,
      title: "Ximoya",
      description:
        "Saytingiz kiber atakalardan maksimal ximoyalaymiz. CRS, XSS va ko'plab kiber atakalar endi muammo emas",
    },
    {
      icon: GatsbyScale,
      title: "Scalable Apps",
      description:
        "Gatsby automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources.",
    },
    {
      icon: GatsbyPen,
      title: "Experts",
      description:
        "Gatsby automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources.",
    },
  ];

  return (
    <section className="px-5 md:px-24" style={{ backgroundColor: " #f9f9fc" }}>
      <div className="py-12 | flex items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="rounded-full p-6 px-12 text-4xl md:text-5xl inline-block | text-blutter | relative z-20">
            Why We?
          </h1>
          <p className="w-12 h-2 rounded-lg bg-blutter text-center"></p>
        </div>
      </div>

      <div className="cards grid md:grid-cols-2 grid-cols-1 md:mx-12">
        {services.map((card) => {
          return (
            <div className="card rounded-xl flex flex-col items-center justify-center md:mx-10 my-5 p-5 bg-white hover:shadow-cover transform transition-all duration-500 ease-out">
              <card.icon className="w-16 h-16 p-3 bg-gray-100 rounded-full" />
              <div className="py-5 text-2xl tracking-wide font-bold text-gray-800 text-blutter opacity-75 inline-block ">
                <h1 className="inline-block">{card.title}</h1>
              </div>

              <p className="text-md text-gray-500 tracking-wide leading-7 text-center w-full md:w-2/3 text-xs px-3 md:px-0 md:text-middle">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyWe;
