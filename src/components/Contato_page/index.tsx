import React from "react";
import "./Contato_page.css";
import { LuSendHorizontal } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Contato_page() {
  return (
    <div className="contato_container">
      <div className="contato_tile">Entre em contato com a gente!</div>
      <div className="contato_description">
        <div className="form_container">
          <form
            className="form_data"
            action="https://formsubmit.co/rodrigoaprestes@gmail.com"
            method="POST"
          >
            <div className="form_title">Nome</div>
            <input
              className="input_area"
              type="text"
              name="name"
              required
              placeholder="Digite seu Nome"
            />
            <div className="form_title">Email</div>
            <input
              className="input_area"
              type="email"
              name="email"
              required
              placeholder="Digite seu Email"
            />
            <div className="form_title">Telefone</div>
            <input
              className="input_area"
              type="tel"
              name="telefone"
              required
              placeholder="Digite seu celular"
            />
            <div className="form_title">Mensagem</div>
            <textarea
              className="message"
              name="message"
              required
              placeholder="Digite sua Mensagem"
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_next" value="/" />

            <button type="submit">
              <LuSendHorizontal color="#2B0398" size={24} />
              <div className="button_text">Enviar</div>
            </button>
          </form>
        </div>
        <div className="contato_buttons">
          <div className="button_container">
            <FaWhatsapp color="#2b0398" size={24} />
            <div className="button_description">Enviar WhatsApp</div>
          </div>
          <div className="button_container">
            <MdOutlineEmail color="#2b0398" size={24} />
            <div className="button_description">Enviar Email</div>
          </div>
          <div className="button_container">
            <FaInstagram color="#2b0398" size={24} />
            <div className="button_description">Acessar Instagram</div>
          </div>
          <div className="button_container">
            <FaFacebook color="#2b0398" size={24} />
            <div className="button_description">Acessar Facebook</div>
          </div>
        </div>
      </div>
    </div>
  );
}
