import React from "react";
import "./Services.css";
import Image from "next/image";
import ddos from "../../assets/icons/protecao_ddos.svg";
import performance from "../../assets/icons/performance.svg";
import rede from "../../assets/icons/rede.svg";

export default function Services() {
  return (
    <div className="services_container">
      <div className="services_title">O que a WebServ te oferece?</div>
      <div className="services">
        <div className="service">
          <div className="service_icon">
            <Image src={ddos} alt="Proteção DDoS" />
          </div>
          <div className="service_title grow_title"> Proteção DDoS</div>
          <div className="service_description grow_text">
            Capacidade de mitigação de 348 Tbps
          </div>
          <div className="service_description grow_text">
            Proteção contra ataques UDP e TCP
          </div>
          <div className="service_description grow_text">
            Otimização para servidores de jogos
          </div>
          <div className="know_more grow_link">Clique aqui e saiba mais</div>
        </div>
        <div className="service">
          <div className="service_icon">
            <Image src={performance} alt="Alta Performance" />
          </div>
          <div className="service_title grow_title"> Alta Performance</div>
          <div className="service_description grow_text">
            Processadores de última geração
          </div>
          <div className="service_description grow_text">
            Armazenamento SSD NVMe
          </div>
          <div className="service_description grow_text">Memória DDR4 ECC</div>
          <div className="know_more grow_link">Veja nossos servidores</div>
        </div>
        <div className="service">
          <div className="service_icon">
            <Image src={rede} alt="Excelência em Rede grow_text" />
          </div>
          <div className="service_title grow_title"> Excelência em Rede</div>
          <div className="service_description grow_text">
            Capacidade de rede de 500Gbps
          </div>
          <div className="service_description grow_text">
            Múltiplos uplinks de 100GE
          </div>
          <div className="service_description grow_text">
            Rotas globais otimizadas
          </div>
          <div className="know_more grow_link">
            Veja os detalhes da nossa rede
          </div>
        </div>
      </div>
    </div>
  );
}
