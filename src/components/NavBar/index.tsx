"use client";
import React from "react";
import "./NavBar.css";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import logoImgMob from "../../assets/logo_mobile.png";
import flag from "../../assets/brazil_flag.png";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav_div">
      <nav>
        <div className="container_nav">
          <div>
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
        </div>
      </nav>
      <div className="nav_mobile">
        <div className="menu_sections">
          <div className="menu_section1">
            <button
              className="menu_icon_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="menu_icon">
                <IoMenu color="#fefefe" size={32} />
              </div>
            </button>

            <div className="logo_mobile">
              <Image className="logo_mobile_img" src={logoImgMob} alt="Logo" />
            </div>
          </div>

          {isOpen && (
            <div className="menu_section2">
              <div className="nav_item">Início</div>
              <div className="nav_item">Servidores VPS</div>
              <div className="nav_item">Servidores Dedicados</div>
              <div className="nav_item">Rede</div>
              <div className="nav_item">Anti-DDoS</div>
              <div className="nav_item">Entrar</div>
              <div className="nav_item">Cadastre-se</div>
              <div className="nav_item">Contato</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
