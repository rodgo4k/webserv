import React from "react";
import "./Services_ddos.css";
import { TbWorldCode } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { LiaGamepadSolid } from "react-icons/lia";

export default function Services_ddos() {
  return (
    <div className="services_container">
      <div className="services_title">O que a WebServ te oferece?</div>
      <div className="services">
        <div className="service">
          <div className="service_icon">
            <GoShieldCheck size={64} />
          </div>
          <div className="service_title grow_title">
            348 Tbps Proteção de Dados
          </div>
          <div className="service_description grow_text">
            23x maior que o maior ataque DDoS já registrado
          </div>
        </div>
        <div className="service">
          <LiaGamepadSolid size={64} />
          <div className="service_title grow_title">Proteção para Jogos</div>
          <div className="service_description grow_text">
            Mitigação especializada contra floods UDP para servidores de jogos
          </div>
        </div>

        <div className="service">
          <div className="service_icon">
            <TbWorldCode size={64} />
          </div>
          <div className="service_title grow_title">Segurança Empresarial</div>
          <div className="service_description grow_text">
            Proteção TCP avançada para aplicações empresariais
          </div>
        </div>
      </div>
    </div>
  );
}
