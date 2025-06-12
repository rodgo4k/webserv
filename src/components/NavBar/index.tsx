"use client";
import React from "react";
import "./NavBar.css";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import flag from "../../assets/brazil_flag.png";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav_div">
      <nav>
        <div className="container_nav">
          <div className="logo_box">
            <Link href="/">
              <Image src={logoImg} alt="Logo" className="logo_img" />
            </Link>
          </div>
          <div className="nav_box">
            <div className="nav_box">
              <div className="nav_item">
                <Link href="/">Início</Link>
              </div>
              <div className="nav_item">
                <Link href="/ServidoresVPS">Servidores VPS</Link>
              </div>
              <div className="nav_item">
                <Link href="/ServidoresDedicados">Servidores Dedicados</Link>
              </div>
              <div className="nav_item">
                <Link href="/Rede">Rede</Link>
              </div>
              <div className="nav_item">
                <Link href="/AntiDDoS">Anti-DDoS</Link>
              </div>
            </div>
            <div className="nav_buttons">
              <div className="nav_item">
                <Link href="/">Entrar</Link>
              </div>
              <div className="nav_button">
                <Link href="/">Cadastre-se</Link>
              </div>
              <div className="nav_button_full">
                <Link href="/Contato">Contato</Link>
              </div>
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
              <Image className="logo_mobile_img" src={logoImg} alt="Logo" />
            </div>
          </div>

          {isOpen && (
            <div className="menu_section2">
              <div className="nav_item">
                <Link href="/">Início</Link>
              </div>
              <div className="nav_item">
                <Link href="/ServidoresVPS">Servidores VPS</Link>
              </div>
              <div className="nav_item">
                <Link href="/ServidoresDedicados">Servidores Dedicados</Link>
              </div>
              <div className="nav_item">
                <Link href="/Rede">Rede</Link>
              </div>
              <div className="nav_item">
                <Link href="/AntiDDoS">Anti-DDoS</Link>
              </div>
              <div className="nav_item">
                <Link href="/">Entrar</Link>
              </div>
              <div className="nav_item">
                <Link href="/">Cadastre-se</Link>
              </div>
              <div className="nav_item">
                <Link href="/Contato">Contato</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
