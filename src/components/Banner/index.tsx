"use client";
import React from "react";
import "./Banner.css";
import Image from "next/image";
import vpsicon from "../../assets/icons/VPS.svg";
import dedicadosicon from "../../assets/icons/Dedicados.svg";
import bgbanner from "../../assets/bg.png";

export default function Banner() {
  return (
    <div className="container">
      <div className="banner_container">
        <div className="text_container">
          <div className="title">Soluções de Hospedagem de Alto Desempenho</div>
          <div className="description_container">
            <div className="description">
              Tenha acesso a um desempenho excepcional com nossa infraestrutura
              de nível corporativo e proteção DDoS avançada, garantindo
              estabilidade, velocidade e segurança para seus serviços online.
            </div>
            <div className="description">
              Nossa infraestrutura foi projetada para suportar picos de tráfego
              sem comprometer a performance, utilizando datacenters de última
              geração, redes redundantes e hardware de alta capacidade. Além da
              proteção DDoS avançada, contamos com monitoramento 24/7, firewalls
              inteligentes e suporte técnico especializado, assegurando que seus
              aplicativos, sites e sistemas permaneçam sempre disponíveis e
              protegidos contra ameaças digitais. Com nossa plataforma, você tem
              escalabilidade sob demanda, backups automatizados e painéis de
              controle intuitivos para gerenciar tudo com eficiência.
            </div>
          </div>
          <div className="buttons">
            <div className="vps_button">
              <Image src={vpsicon} alt="Servidores VPS" />
              <div className="button_name">Servidores VPS</div>
            </div>
            <div className="dedicados_button">
              <Image src={dedicadosicon} alt="Servidores Dedicados" />
              <div className="button_name">Servidores Dedicados</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="bg_image"
            src={bgbanner}
            alt="Animated Background"
          />
        </div>
      </div>
    </div>
  );
}
