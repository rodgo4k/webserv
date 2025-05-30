import React from "react";
import "./Footer.css";
import Image from "next/image";
import footer_logo from "../../assets/logo_blue.png";
import cards_logo from "../../assets/cards_logos.svg";
import safebrowsing from "../../assets/safe_browsing.svg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_content1">
          <div className="footer_section1">
            <div className="footer_logo">
              <Image src={footer_logo} alt="Logo" />
            </div>
            <div className="footer_description">
              A melhor solução para hospedar seu projeto voce encontra aqui!
            </div>
          </div>
          <div className="footer_section2">
            <div className="footer_title">WebServ</div>
            <div className="footer_links_sections">
              <div className="footer_links">
                <div className="footer_link">Servidores VPS</div>
                <div className="footer_link">Servidores Dedicados</div>
                <div className="footer_link">Rede</div>
                <div className="footer_link">Anti-DDoS</div>
              </div>
              <div className="footer_links">
                <div className="footer_link">Termos de Serviço</div>
                <div className="footer_link">Entrar em contato</div>
              </div>
            </div>
          </div>
          <div className="footer_section3">
            <div className="footer_title">Pague Com</div>
            <div className="payments_container">
              <div className="payments">
                <Image
                  className="payments_img"
                  src={cards_logo}
                  alt="Cartões"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_content2">
          <div className="safe_browsing">
            <Image src={safebrowsing} alt="Google Safe Browsing" />
          </div>
          <div className="social">
            <div className="footer_title">Fique por dentro de tudo</div>
            <div className="social_icons">
              <FaWhatsapp size={24} className="social_icon" />
              <FaInstagram size={24} className="social_icon" />
              <FaFacebook size={24} className="social_icon" />
            </div>
          </div>
        </div>
        <div className="footer_content3">
          WEBSERV LTDA | Av. Nome da Rua, 6653 - Barra Funda, São Paulo - SP,
          CEP 08080-080 | CNPJ: 52.525.525/0001-88
        </div>
      </div>
    </div>
  );
}
