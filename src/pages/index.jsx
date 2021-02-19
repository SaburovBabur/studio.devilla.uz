import React from "react";
import Header from "@/components/Header";
import Main from "@/components/home/Main";
import WhyWe from "../components/home/WhyWe";
import Portfolio from "../components/home/Portfolio";
// import WorkedCompanies from "../components/home/WorkedCompanies";
import "@/styles/index.css";
import Technologies from "../components/home/Technologies";
import Services from "../components/home/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <WhyWe />
      <Technologies />
      <Portfolio />
      {/* <WorkedCompanies /> */}
      <Footer />
    </>
  );
}
export default Home;
