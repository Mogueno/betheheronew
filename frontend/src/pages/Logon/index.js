import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Link } from "react-router-dom";
import './styles.css'
import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'

export default function Logon(){
    return (
        <div className="logon-containter">
        <section className="form">
          <img src={LogoImg} alt="Logo"/>

          <form action="">
              <h1>Faca seu logon</h1>
              <input placeholder="Seu ID"/>
              <button className="button" type="submit">Entrar</button>

              <Link to="/register" className="back-link">
                  <FiLogIn size={16} color="#E02041"/>
                  Nao tenho cadastro
              </Link>
          </form>
        </section>

        <img src={HeroesImg} alt="Heroes"/>
      </div> 
    );
}