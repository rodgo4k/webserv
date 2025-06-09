import React from "react";
import NavBar from "@/components/NavBar";
import Banner_ddos from "@/components/Banner_ddos";
import Services_ddos from "@/components/Services_ddos";
import Conexao_ddos from "@/components/Conexao_ddos";
import Rede_ddos from "@/components/Rede_ddos";
import Footer from "@/components/Footer";

export default function AntiDDoS() {
  return (
    <>
      <NavBar />
      <Banner_ddos />
      <Services_ddos />
      <Conexao_ddos />
      <Rede_ddos />
      <Footer />
    </>
  );
}
