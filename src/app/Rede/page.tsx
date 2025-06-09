import React from "react";
import NavBar from "@/components/NavBar";
import Banner_Rede from "@/components/Banner_Rede";
import Services_Rede from "@/components/Services_Rede";
import Desempenho_Rede from "@/components/Desempenho_Rede";
import Conexao from "@/components/Conexao";
import Rede_Rede from "@/components/Rede_Rede";
import Footer from "@/components/Footer";

export default function Rede() {
  return (
    <>
      <NavBar />
      <Banner_Rede />
      <Services_Rede />
      <Desempenho_Rede />
      <Conexao />
      <Rede_Rede />
      <Footer />
    </>
  );
}
