import React from "react";
import "./Conexao_ddos.css";
import Image from "next/image";
import grafico from "../../assets/grafico_ddos.png";

export default function Conexao_ddos() {
  return (
    <div className="conexao_container">
      <div className="conexao_text">
        <div className="conexao_title">
          Conexão Estável e Dados Mais Seguros
        </div>
        <div className="conexao_description">
          Nossa proteção DDoS combina o Cloudflare Magic Transit com sistemas de
          mitigação proprietários, fornecendo proteção abrangente contra ataques
          volumétricos e ameaças na camada de aplicação. Com proteção
          especializada para servidores de jogos e aplicações empresariais,
          garantimos segurança ideal para qualquer caso de uso.
        </div>
      </div>
      <div className="grafico_img">
        <Image src={grafico} alt="grafico" />
      </div>
    </div>
  );
}
