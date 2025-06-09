import React from "react";
import "./Rede_ddos.css";
import { GoShieldCheck } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

export default function Rede_ddos() {
  return (
    <div className="rede_container">
      <div className="rede_title">Proteção Especializada</div>
      <div className="rede_description">
        <div className="list_container">
          <div className="rede_list">
            <div className="list_title">Proteção para Jogos</div>
            <div className="list_item_container">
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Mitigação avançada de floods UDP
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Detecção de padrões específicos de jogos
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Filtragem de baixa latência
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Análise de tráfego em tempo real
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Impacto mínimo na jogabilidade
                </div>
              </div>
            </div>
          </div>
          <div className="rede_list">
            <div className="list_title">Recursos da Rede</div>
            <div className="list_item_container">
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Múltiplos uplinks de 100GE
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Conexões de fibra redundantes
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">Roteamento BGP otimizado</div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Proteção DDoS em todas as rotas
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Monitoramento de rede 24/7
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Análise de tráfego em tempo real
                </div>
              </div>
            </div>
          </div>
          <div className="rede_list">
            <div className="list_title">Proteção Empresarial</div>
            <div className="list_item_container">
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Proteção contra floods TCP
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Defesa na camada de aplicação (L7)
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Mitigação de ataques SSL/TLS
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Proteção contra ataques zero-day
                </div>
              </div>
              <div className="list_item">
                <FaCheckCircle color="#006fcf" size={20} />
                <div className="list_description">
                  Monitoramento de segurança 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rede_card">
          <div className="rede_card_title_container">
            <GoShieldCheck color="#006fcf" size={32} />
            <div className="rede_card_title">
              Presença Global de Alta Performance
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_description rede_pad">
              Nossa infraestrutura cobre diversas localidades estratégicas para
              garantir baixa latência e conectividade ideal, tanto no Brasil
              quanto no exterior. Graças à parceria com a Cloudflare, operamos
              com mais de 300 pontos de presença ao redor do mundo.
            </div>
            <div className="rede_card_item_title">Cobertura Global</div>
            <div className="rede_card_item_description">
              300+ cidades com centros de limpeza locais
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">Roteamento Inteligente</div>
            <div className="rede_card_item_description">
              Roteamento BGP avançado com múltiplos provedores tier-1, sempre
              buscando o melhor caminho para os dados.
            </div>
          </div>
          <div className="rede_card_item_container">
            <div className="rede_card_item_title">Proteção em Nível Global</div>
            <div className="rede_card_item_description">
              Com o Cloudflare Magic Transit, oferecemos proteção ampliada e
              desempenho consistente em escala mundial.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
