import React from "react";
import "./Contact.css";
import Image from "next/image";
import wpp from "../../assets/icons/wpp.svg";
import vps from "../../assets/icons/VPS_blue.svg";
import dedicados from "../../assets/icons/Dedicados_white.svg";

export default function Contact() {
  return (
    <div className="contact_container">
      <div className="text_container_contact">
        <div className="contact_title">
          Quer conhecer mais dos nossos serviços?
        </div>
        <div className="contact_description">
          Entre em contato conosco clicando no botão no abaixo para conhecer
          mais dos nossos serviços e te mostraremos nosso desempenho, segurança
          e suporte de nível empresarial, ou escolha um de nossos planos.
        </div>
        <div className="contact_buttons">
          <div className="button1">
            <div className="button_icon">
              <Image src={wpp} alt="" />
            </div>
            <div className="button_title">Entrar em contato</div>
          </div>
          <div className="button2">
            <div className="button_icon">
              <Image src={vps} alt="" />
            </div>
            <div className="button_title">Servidores VPS</div>
          </div>
          <div className="button3">
            <div className="button_icon">
              <Image src={dedicados} alt="" />
            </div>
            <div className="button_title">Servidores Dedicados</div>
          </div>
        </div>
      </div>
    </div>
  );
}
