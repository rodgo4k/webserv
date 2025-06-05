import React from "react";
import "./Rede_Dedicados.css";
import { GoShieldCheck } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

export default function Rede_Dedicados() {
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
              348 Tbps de capacidade de mitigação com Cloudflare Magic Transit e
              proteção personalizada contra floods UDP/TCP
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">
              Conectividade Inteligente e Eficiente
            </div>
            <div className="rede_card_item_description">
              Portas de rede de até 20Gbps com rotas otimizadas e latência
              mínima
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">
              Potência Computacional de Alto Nível
            </div>
            <div className="rede_card_item_description">
              Processadores AMD Ryzen mais recentes, SSDs NVMe e RAM DDR4/DDR5
            </div>
          </div>
        </div>
        <div className="rede_list">
          <div className="list_title">Incluído em cada VPS</div>
          <div className="list_item_container">
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">Configuração em 10 Minutos</div>
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
              <div className="list_description">Acesso Root Completo</div>
            </div>
            <div className="list_item">
              <FaCheckCircle color="#006fcf" size={20} />
              <div className="list_description">
                Painel de Controle Com Otimização para Servidores de Jogos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
