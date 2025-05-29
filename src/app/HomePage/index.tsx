import React from "react";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Desempenho from "@/components/Desempenho";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <Desempenho />
      <Contact />
      <Footer />
    </>
  );
}
