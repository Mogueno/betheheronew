import React ,{ useState }from 'react';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api';
import { Link, useHistory} from "react-router-dom";
import './styles.css'
import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'



export default function Logon(){

  const history  = useHistory();
  const [id, setId] = useState('')
  
  async function handleLogin(e){
    e.preventDefault()
  
    try {
      const response = await api.post('sessions', {id});
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push('/profile');

    } catch (error) {
      alert("falha no login")
    }
  }

    return (
        <div className="logon-containter">
        <section className="form">
          <img src={LogoImg} alt="Logo"/>

          <form onSubmit={handleLogin}>
              <h1>Faca seu logon</h1>
              <input placeholder="Seu ID"
              value={id}
              onChange={ e => setId(e.target.value)}
              />
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