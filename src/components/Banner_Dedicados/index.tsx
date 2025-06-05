import React from "react";
import "./Banner_Dedicados.css";
import Image from "next/image";
import bgbanner from "../../assets/bg.png";

export default function Banner_Dedicados() {
  return (
    <div className="container">
      <div className="banner_container">
        <div className="text_container">
          <div className="title">
            Servidores <span className="green">Bare Metal</span>
          </div>
          <div className="description_container">
            <div className="description">
              Servidores dedicados de alto desempenho com acesso total ao
              hardware, hospedados em nossa própria infraestrutura brasileira.
            </div>
            <div className="description">
              Ideal para aplicações de alta performance, com suporte e snapshots
              instantâneos e redeIdeal para aplicações de alta performance, com
              suporte e snapshots instantâneos e rede dedicada de baixa latência
              dedicada de baixa latência.
            </div>
          </div>
        </div>
        <div>
          <Image
            className="bg_image"
            src={bgbanner}
            alt="Animated Background"
          />
        </div>
      </div>
    </div>
  );
}
