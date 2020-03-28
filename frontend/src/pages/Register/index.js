import React, { useState } from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";


export default function Register() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');


  async function  handleRegister(e){
    e.preventDefault();
    const data = {name, email, whatsapp, city, uf};

    try {
      const response = await api.post('/ongs', data);
    
    alert(`Seu Id de acesso ${response.data.id}`)
    history.push('/')
    } catch (error) {
      alert(`erro no cadastro`)
    }
    
  }

  return (
    <div className="register-containter">
      <div className="content">
        <section className="">
          <img src={logoImg} alt="Logo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Nao tenho cadastro
        </Link>
        </section>
       
        <form onSubmit={handleRegister} >
          <input type="text" placeholder="Nome da Ong" value={name} onChange={ e=> setName(e.target.value)}></input>
          <input type="text" placeholder="Email" value={email} onChange={ e=> setEmail(e.target.value)}></input>
          <input type="text" placeholder="Whatsapp" value={whatsapp} onChange={ e=> setWhatsapp(e.target.value)}></input>
          <div className="input-group">
            <input type="text" placeholder="Cidade" value={city} onChange={ e=> setCity(e.target.value)}></input>
            <input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={ e=> setUf(e.target.value)}></input>
          </div>
          <button className="button" type="submit" >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
