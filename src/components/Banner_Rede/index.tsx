import React from "react";
import "./Banner_Rede.css";
import Image from "next/image";
import bgbanner from "../../assets/bg.png";

export default function Banner_Rede() {
  return (
    <div className="container">
      <div className="banner_container">
        <div className="text_container">
          <div className="title">
            Infraestrutura de <span className="green">Rede Empresarial</span>
          </div>
          <div className="description_container">
            <div className="description">
              Uma infraestrutura de rede empresarial moderna combina alta
              capacidade, segurança avançada e conectividade global para
              garantir desempenho confiável e escalável. Ela é essencial para
              suportar seu crescimento e proteger seus ativos digitais.
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
