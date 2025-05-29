import React from "react";
import "./Desempenho.css";
import Image from "next/image";
import protection from "../../assets/icons/protection.svg";
import latencia from "../../assets/icons/latencia.svg";
import wifi from "../../assets/icons/wifi.svg";
import server from "../../assets/icons/server.svg";

export default function Desempenho() {
  return (
    <div className="container_d">
      <div className="title_d">Nosso desempenho</div>
      <div className="cards_d">
        <div className="card_d">
          <div className="card_icon">
            <Image src={protection} alt="Protection Icon" />
          </div>
          <div className="card_title">348 Tbps</div>
          <div className="card_description">Proteção DDoS</div>
        </div>
        <div className="card_d">
          <div className="card_icon">
            <Image src={latencia} alt="Latencia Icon" />
          </div>
          <div className="card_title">-3ms</div>
          <div className="card_description">Redução de Latência</div>
        </div>
        <div className="card_d">
          <div className="card_icon">
            <Image src={wifi} alt="Wifi Icon" />
          </div>
          <div className="card_title">99,99%</div>
          <div className="card_description">Disponibiliade de Rede</div>
        </div>
        <div className="card_d">
          <div className="card_icon">
            <Image src={server} alt="Server Icon" />
          </div>
          <div className="card_title">500 Gbps</div>
          <div className="card_description">Capacidade de Rede</div>
        </div>
      </div>
    </div>
  );
}
