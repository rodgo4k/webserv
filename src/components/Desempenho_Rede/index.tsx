import React from "react";
import "./Desempenho_Rede.css";
import { GiAerialSignal } from "react-icons/gi";
import { AiFillSignal } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";

export default function Desempenho_Rede() {
  return (
    <div className="container_d">
      <div className="title_d">Desempenho da Rede</div>
      <div className="cards_d">
        <div className="card_d">
          <GiAerialSignal size={64} color="#2C303E" />
          <div className="card_title">O que significa Latência?</div>
          <div className="card_description">
            Latência é o tempo que um dado leva para ir do seu dispositivo até o
            servidor e voltar, quanto menor, mais rápidas serão as respostas e
            sua navegação mais fluida.
          </div>
        </div>
        <div className="card_d">
          <AiFillSignal size={64} color="#2C303E" />
          <div className="card_title">Redução de Latência</div>
          <div className="card_description">
            A WebServ entrega em média 3ms a menos de latência, ideal para quem
            precisa de resposta rápida: jogos online, streaming e chamadas em
            tempo real
          </div>
        </div>
        <div className="card_d">
          <GrStatusGood size={64} color="#2C303E" />
          <div className="card_title">Resultados Consistentes</div>
          <div className="card_description">
            Nossa rede entrega em média 28-29ms, enquanto a média geral é de
            31-33 ms. Ou seja, garantimos mais estabilidade e confiança!
          </div>
        </div>
      </div>
    </div>
  );
}
