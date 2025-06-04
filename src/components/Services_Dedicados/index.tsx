import React from "react";
import "./Services_Dedicados.css";
import { FaWifi } from "react-icons/fa6";
import { BiJoystick } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { PiLightningBold } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineMoreTime } from "react-icons/md";

export default function Services_Dedicados() {
  return (
    <div className="services_container">
      <div className="services_title">O que a WebServ te oferece?</div>
      <div className="services">
        <div className="services_section">
          <div className="service">
            <FaWifi size={64} />
            <div className="service_title grow_title">
              Rede de alta velocidade Avançada
            </div>
            <div className="service_description grow_text">
              Portas exclusivas, oferecendo até 20Gbps de largura de banda,
              garantem um desempenho máximo e confiável para suas operações mais
              exigentes
            </div>
          </div>
          <div className="service">
            <div className="service_icon">
              <BiJoystick size={64} />
            </div>
            <div className="service_title grow_title">
              Proteção DDoS para Jogos
            </div>
            <div className="service_description grow_text">
              Oferecemos proteção especializada contra floods UDP e ataques
              específicos de jogos, ajudando a manter sua conexão segura e
              estável durante toda a jogatina
            </div>
          </div>
          <div className="service">
            <div className="service_icon">
              <FaHeadset size={64} />
            </div>
            <div className="service_title grow_title">Suporte Nível 3</div>
            <div className="service_description grow_text">
              Você tem acesso direto a especialistas técnicos seniores 24/7,
              garantindo suporte rápido e eficiente, com alta qualidade, sempre
              ao seu alcance quando precisar.
            </div>
          </div>
        </div>
        <div className="services_section">
          <div className="service">
            <PiLightningBold size={64} />
            <div className="service_title grow_title">Entrega Rápida</div>
            <div className="service_description grow_text">
              Infraestrutura virtual com hardware dedicado, garantinCom uma
              implantação rápida de apenas 10 minutos, você tem acesso imediato
              ao seu servidor, facilitando o início das suas atividades sem
              demorado desempenho exclusivo e isolado
            </div>
          </div>
          <div className="service">
            <div className="service_icon">
              <LuShieldCheck size={64} />
            </div>
            <div className="service_title grow_title">Segurança</div>
            <div className="service_description grow_text">
              Você conta com uma proteção robusta de 348 Tbps contra ataques
              DDoS, com filtros especialmente otimizados para jogos online, e
              tecnologia avançada de mitigação, garantindo segurança e
              estabilidade do seu ambiente de gaming
            </div>
          </div>
          <div className="service">
            <div className="service_icon">
              <MdOutlineMoreTime size={64} />
            </div>
            <div className="service_title grow_title">99,9% Uptime</div>
            <div className="service_description grow_text">
              Você tem à disposição uma infraestrutura equipada com sistemas
              redundantes de última geração que garantem alta disponibilidade e
              confiabilidade, mantendo seus serviços sempre operacionais, mesmo
              em caso de falhas ou imprevistos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
