import React from "react";
import NavBar from "@/components/NavBar";
import Banner_VPS from "@/components/Banner_VPS";
import Services_VPS from "@/components/Services_VPS";
import Processamento from "@/components/Processamento";
import Prices_VPS from "@/components/Prices_VPS";
import Rede_VPS from "@/components/Rede_VPS";
import Footer from "@/components/Footer";

export default function ServidoresVPS() {
  return (
    <>
      <NavBar />
      <Banner_VPS />
      <Services_VPS />
      <Processamento />
      <Prices_VPS />
      <Rede_VPS />
      <Footer />
    </>
  );
}
