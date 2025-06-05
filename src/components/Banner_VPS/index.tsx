import React from "react";
import "./Banner_VPS.css";
import Image from "next/image";
import bgbanner from "../../assets/bg.png";

export default function Banner_VPS() {
  return (
    <div className="container">
      <div className="banner_container">
        <div className="text_container">
          <div className="title">
            Nossa hospedagem VPS conta com{" "}
            <span className="green">Alto Desempenho</span>
          </div>
          <div className="description_container">
            <div className="description">
              Alimentado por armazenamento NVMe de alta performance, este
              sistema oferece velocidades de leitura e escrita extremamente
              rápidas, garantindo maior eficiência no carregamento de
              aplicações, na transferência de dados e no desempenho geral das
              operações. A tecnologia NVMe é ideal para cargas de trabalho
              intensivas, proporcionando uma experiência fluida e responsiva,
              mesmo sob alta demanda. Esse tipo de armazenamento representa um
              salto significativo em relação aos discos tradicionais, sendo
              perfeito para ambientes que exigem rapidez e confiabilidade.
            </div>
            <div className="description">
              Com suporte à virtualização por meio do KVM (Kernel-based Virtual
              Machine), você tem acesso a um ambiente altamente flexível e
              seguro para executar múltiplas máquinas virtuais de forma isolada.
              Essa arquitetura permite criar, gerenciar e escalar servidores
              virtuais conforme a necessidade do seu projeto, mantendo alto
              desempenho e estabilidade. Além disso, o controle total de
              gerenciamento oferece liberdade para configurar e administrar
              todos os aspectos do ambiente virtual, desde o sistema operacional
              até as permissões e recursos de rede, garantindo máxima autonomia
              e personalização.
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
