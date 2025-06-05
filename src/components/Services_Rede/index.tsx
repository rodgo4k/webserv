import React from "react";
import "./Services_Rede.css";
import { TbWorldCode } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";

export default function Services_Rede() {
  return (
    <div className="services_container">
      <div className="services_title">O que a WebServ te oferece?</div>
      <div className="services">
        <div className="service">
          <FaWifi size={64} />
          <div className="service_title grow_title">
            Capacidade de 500+ Gbps
          </div>
          <div className="service_description grow_text">
            Infraestrutura virtual com hardware dedicado, garantindo desempenho
            exclusivo e isolado
          </div>
        </div>
        <div className="service">
          <div className="service_icon">
            <TbWorldCode size={64} />
          </div>
          <div className="service_title grow_title">Mitigação DDoS</div>
          <div className="service_description grow_text">
            Proteção robusta com capacidade de mitigaçãode 348 Tbps, integrada
            ao Cloudflare Magic Transit para defesa em tempo real contra
            ataques.
          </div>
        </div>
        <div className="service">
          <div className="service_icon">
            <FaWifi size={64} />
          </div>
          <div className="service_title grow_title">
            Conectividade Otimizada
          </div>
          <div className="service_description grow_text">
            Rede de alta velocidade com rotas inteligente, garantindo latência
            mínima e máxima eficiência de tráfego
          </div>
        </div>
      </div>
    </div>
  );
}
