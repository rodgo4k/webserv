import React from "react";
import "./Banner_ddos.css";
import Image from "next/image";
import bgbanner from "../../assets/bg.png";

export default function Banner_ddos() {
  return (
    <div className="container">
      <div className="banner_container">
        <div className="text_container">
          <div className="title">
            Proteção DDoS de <span className="green">Nível Empresarial</span>
          </div>
          <div className="description_container">
            <div className="description">
              Mitigação robusta de até 348 Tbps, garantindo proteção avançada
              para games e soluções empresariais.
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
