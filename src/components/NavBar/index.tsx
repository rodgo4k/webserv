"use client";
import React from "react";
import "./NavBar.css";
import { useState } from "react";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import flag from "../../assets/brazil_flag.png";
import { SlArrowDown } from "react-icons/sl";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <nav>
      {showSideBar && (
        <div
          className="aside__overlay"
          onClick={() => setShowSideBar(!showSideBar)}
        ></div>
      )}
      <div
        className="logo_box"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Image src={logoImg} alt="Logo" className="logo_img" />
      </div>
      <div className="nav_box">
        <div className="nav_box">
          <div className="nav_item">Início</div>
          <div className="nav_item">Servidores VPS</div>
          <div className="nav_item">Servidores Dedicados</div>
          <div className="nav_item">Rede</div>
          <div className="nav_item">Anti-DDoS</div>
        </div>
        <div className="nav_buttons">
          <div className="nav_item">Entrar</div>
          <div className="nav_button">Cadastre-se</div>
          <div className="nav_button_full">Contato</div>
          <div className="lang_selector">
            <Image src={flag} alt="Idioma" />
            <div>PT-BR</div>
            <SlArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
