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
import Title from "@/components/Title.jsx";

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
      <div className="px-6">
        <Title name="Texnologiyalar" />
      </div>
      <SwipeBlock>{frontendTechnologies}</SwipeBlock>
      <SwipeBlock>{backendTechnologies}</SwipeBlock>
    </section>
  );
}

export default Technologies;
