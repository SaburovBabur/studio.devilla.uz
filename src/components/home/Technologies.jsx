import React from "react";
import {
  react,
  vue,
  tailwind,
  sass,
  preact,
  gatsby,
  nextjs,
  webpack,
  materialui,
  bootstrap,
  antdesign,
  php,
  nodejs,
  mysql,
  postgresql,
  strapi,
  symfony,
  linux,
  digitalocean,
  laravel,
} from "@/@assets/@technologies";
import SwipeBlock from "./@blocks/SwipeBlock";

function Technologies() {
  let frontendTechnologies = [
    {
      logo: react,
      name: "ReactJS",
    },
    {
      logo: vue,
      name: "VueJS",
    },
    {
      logo: tailwind,
      name: "TailwindCss",
    },
    {
      logo: sass,
      name: "Sass",
    },
    {
      logo: preact,
      name: "Preact",
    },
    {
      logo: gatsby,
      name: "GatsbyJs",
    },
    {
      logo: nextjs,
      name: "NextJs",
    },
    {
      logo: webpack,
      name: "Webpack",
    },
    {
      logo: materialui,
      name: "Material",
    },
    {
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      logo: antdesign,
      name: "Ant Design",
    },
  ];

  let backendTechnologies = [
    {
      logo: php,
      name: "Php",
    },
    {
      logo: nodejs,
      name: "NodeJs",
    },
    {
      logo: mysql,
      name: "MySql",
    },
    {
      logo: postgresql,
      name: "PostgreSql",
    },
    {
      logo: strapi,
      name: "Strapi",
    },
    {
      logo: symfony,
      name: "Symfony",
    },
    {
      logo: linux,
      name: "Linux",
    },
    {
      logo: digitalocean,
      name: "DigitalO",
    },
    {
      logo: laravel,
      name: "Laravel",
    },
  ];

  return (
    <section className="">
      <div className="py-12 | flex items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="rounded-full p-6 px-12 text-4xl md:text-5xl inline-block | text-blutter | relative z-20">
            Why We?
          </h1>
          <p className="w-12 h-2 rounded-lg bg-blutter text-center"></p>
        </div>
      </div>

      <SwipeBlock>{frontendTechnologies}</SwipeBlock>
      <SwipeBlock>{backendTechnologies}</SwipeBlock>
    </section>
  );
}

export default Technologies;
