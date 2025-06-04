import React from "react";
import "./Rede_VPS.css";
import { GoShieldCheck } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

export default function Rede_VPS() {
  return (
    <div className="rede_container">
      <div className="rede_title">Nossa rede contém</div>
      <div className="rede_description">
        <div className="rede_card">
          <div className="rede_card_title_container">
            <GoShieldCheck color="#006fcf" size={32} />
            <div className="rede_card_title">Infraestrutura Empresarial</div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">Proteção DDoS Avançada</div>
            <div className="rede_card_item_description">
              Capacidade de mitigação de até 348 Tbps, superando em 23 vezes o
              maior ataque DDoS já registrado, oferecendo uma camada extrema de
              proteção para sua infraestrutura
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">
              Conectividade Inteligente e Eficiente
            </div>
            <div className="rede_card_item_description">
              Com o Cloudflare Magic Transit, a rede reduz a latência em até 3
              ms e diminui perdas de pacotes para apenas 0,52%, garantindo
              tráfego mais rápido e estável
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">
              Potência Computacional de Alto Nível
            </div>
            <div className="rede_card_item_description">
              Equipado com Ryzen 9 3950X, armazenamento NVMe e memória DDR4, o
              hardware entrega desempenho de elite para cargas de trabalho
              exigentes
            </div>
          </div>
        </div>
        <div className="rede_list">
          <div className="list_title">Incluído em cada VPS</div>
          <div className="list_item_container">
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">Porta de Rede 1Gbps</div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">Virtualização KVM Completa</div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">
                Proteção DDoS (Cloudflare + Personalizada)
              </div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">Suporte Técnico 24/7</div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">SLA de 99,9% de Uptime</div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">
                Painel de Controle Completo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
