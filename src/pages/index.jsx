import React from "react";
import Header from "@/components/Header";
import Main from "@/components/home/Main";
import WhyWe from "../components/home/WhyWe";
import Portfolio from "../components/home/Portfolio";
import WorkedCompanies from "../components/home/WorkedCompanies";
import "@/styles/index.css";
import Technologies from "../components/home/Techologies";
function Home() {
  return (
    <>
      <Header />
      <Main />
      <WhyWe />
      <Technologies />
      <Portfolio />
      <WorkedCompanies />
    </>
  );
}
export default Home;
