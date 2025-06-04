import React from "react";
import "./Prices_Dedicados.css";
import { MdMemory } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { MdOutlineSdCard } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";

export default function Prices_Dedicados() {
  return (
    <div className="prices_container">
      <div className="prices_title">Confira nossos preços</div>
      <div className="prices_content1">
        <div className="prices_section_description">
          <div className="prices_section_title">
            Servidores AMD Geração DDR4
          </div>
          <div className="includes">
            <div className="include">Memória DDR4</div>
            <div className="include">Armazenamento NVMe</div>
            <div className="include">Rede 1Gbps</div>
          </div>
        </div>
        <div className="prices_cards">
          <div className="price_card">
            <div className="price_card_title">Iniciante</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  4 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">4GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">60GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$250 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Avançado</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  8 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">8GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">70GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$400 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Profissional</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  12 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">12GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">90GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$600 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
        </div>
        <div className="prices_cards">
          <div className="price_card">
            <div className="price_card_title">Iniciante</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  4 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">4GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">60GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$250 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Avançado</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  8 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">8GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">70GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$400 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Profissional</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  12 núcleos 4.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">12GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">90GB NVMe</div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 20TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$600 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
