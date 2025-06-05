import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Banner_Dedicados from "@/components/Banner_Dedicados";
import Services_Dedicados from "@/components/Services_Dedicados";
import Rede_Dedicados from "@/components/Rede_Dedicados";
import Prices_Dedicados from "@/components/Prices_Dedicados";

export default function ServidoresDedicados() {
  return (
    <>
      <NavBar />
      <Banner_Dedicados />
      <Services_Dedicados />
      <Prices_Dedicados />
      <Rede_Dedicados />
      <Footer />
    </>
  );
}
