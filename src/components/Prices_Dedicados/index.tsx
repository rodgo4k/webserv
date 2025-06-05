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
      <div className="prices_content">
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
            <div className="price_card_title">Ryzen 5 1600</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  6c/12t @ 3.6GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">16GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  256GB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$600 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 5 3600</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  6c/12t @ 4.40GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">32GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  512GB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$800 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 5 5600X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  6c/12t @ 4.40GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">32GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  512GB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$1000 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
        </div>
        <div className="prices_cards">
          <div className="price_card">
            <div className="price_card_title">Ryzen 7 5700X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  8c/16t @ 4.60GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">64GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  60GB 1TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$1200 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 7 5700X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  8c/16t @ 4.60GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$1400 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 9 5900X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  12c/24t @ 4.80GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR4</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">1Gbps / 50TB</div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$1600 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
        </div>
      </div>
      <div className="prices_content">
        <div className="prices_section_description">
          <div className="prices_section_title">
            Servidores AMD Geração DDR45
          </div>
          <div className="includes">
            <div className="include">Memória DDR5</div>
            <div className="include">NVMe Ultra Rápido</div>
            <div className="include">Rede 1 até 20Gbps</div>
          </div>
        </div>
        <div className="prices_cards">
          <div className="price_card">
            <div className="price_card_title">Ryzen 9 7900X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  12c/24t @ 5.60GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR5</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">
                  1 até 20Gbpss / 50TB
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$2000 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 9 7950X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  16c/32t @ 5.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR5</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">
                  1 até 20Gbpss / 50TB
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$2200 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 9 9900X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  12c/24t @ 5.60GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR5</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">
                  1 até 20Gbpss / 50TB
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$2000 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
          <div className="price_card">
            <div className="price_card_title">Ryzen 9 9950X</div>
            <div className="price_card_item">
              <div className="price_card_description">
                <MdMemory size={16} />
                <div className="price_card_description_text">
                  16c/32t @ 5.70GHz
                </div>
              </div>
              <div className="price_card_description">
                <BiServer size={16} />
                <div className="price_card_description_text">128GB DDR5</div>
              </div>
              <div className="price_card_description">
                <MdOutlineSdCard size={16} />
                <div className="price_card_description_text">
                  2TB SSD NVMe M.2
                </div>
              </div>
              <div className="price_card_description">
                <FaWifi size={16} />
                <div className="price_card_description_text">
                  1 até 20Gbpss / 50TB
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_symbol">$</div>
              <div className="price_text">R$2200 por mês</div>
            </div>
            <button className="sign_now">Assinar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
