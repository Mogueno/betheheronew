import React from "react";
import './styles.css'
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident(){
    return(
<div className="new-incident">
      <div className="content">
        <section className="">
          <img src={logoImg} alt="Logo" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamento para encontrar um herói para resolver isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
        </Link>
        </section>
       
        <form>
          <input type="text" placeholder="Título do caso"></input>
          <textarea type="text" placeholder="Descrição"></textarea>
          <input type="text" placeholder="Valor em reais"></input>
        
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
    );
}