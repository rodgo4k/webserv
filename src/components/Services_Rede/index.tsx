import React from "react";
import "./Services_Rede.css";
import { TbWorldCode } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
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
            Conexões redundantes com múltiplos uplinks de 100GE garantem alta
            disponibilidade, agora com suporte a expansão automática de largura
            de banda sob demanda
          </div>
        </div>
        <div className="service">
          <div className="service_icon">
            <GoShieldCheck size={64} />
          </div>
          <div className="service_title grow_title">
            348 Tbps Proteção de Dados
          </div>
          <div className="service_description grow_text">
            Infraestrutura integrada ao Cloudflare Magic Transit para segurança
            robusta., inclui mitigação proativa contra ataques DDoS em tempo
            real
          </div>
        </div>
        <div className="service">
          <div className="service_icon">
            <TbWorldCode size={64} />
          </div>
          <div className="service_title grow_title">
            Peering Global Avançado
          </div>
          <div className="service_description grow_text">
            Conectividade direta com as maiores redes globais para baixa
            latência, presença estratégica em mais de 20 pontos de troca de
            tráfego (IXs) internacionais
          </div>
        </div>
      </div>
    </div>
  );
}
