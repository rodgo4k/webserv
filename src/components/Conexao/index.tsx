import React from "react";
import "./Conexao.css";
import Image from "next/image";
import grafico from "../../assets/grafico_rede.png";

export default function Conexao() {
  return (
    <div className="conexao_container">
      <div className="conexao_text">
        <div className="conexao_title">
          Conexão Inteligente Vai Além da Velocidade
        </div>
        <div className="conexao_description">
          A infraestrutura otimizada da WebServ entrega mais do que números:
          proporciona uma experiência digital contínua, confiável e pronta para
          qualquer desafio — do home office às partidas online. Escolha uma rede
          que acompanha a sua performance!
        </div>
        <div className="conexao_description">
          Com a nossa rede você tem apenas 0,52% de perda. Sem ela, até 5,26% —
          dez vezes mais! Isso significa mais estabilidade, menos interrupções e
          uma experiência muito mais confiável!
        </div>
      </div>

      <div className="grafico_img">
        <Image src={grafico} alt="grafico" />
      </div>
    </div>
  );
}
