import React from "react";
import "./Processamento.css";
import Image from "next/image";
import Processamento_img from "../../assets/Processamento_img.svg";

export default function Processamento() {
  return (
    <div className="container_process">
      <div className="process_title">Desempenho de Processamento Premium</div>
      <div className="process_card">
        <Image src={Processamento_img} alt="Processamento" />
        <div className="process_card_text">
          Nossos servidores utilizam processadores AMD Ryzen 9 3950X, oferecendo
          alto desempenho, confiabilidade avançada e velocidades de boost de até
          4.70GHz para suportar qualquer carga de trabalho com máxima eficiência
        </div>
      </div>
    </div>
  );
}
