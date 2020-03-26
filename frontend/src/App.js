import React from "react";
import Routes from "./routes";
import "./global.css";
//Estado -  uma informacao mantida pelo componente.
//Prop - Children(dentro da tag) e Title(como attr do html)
//Imutabilidade - Nunca podemos manupular a variavel de estado de uma maneira direta, precisamos sobrepor o valor.

function App() {
  return <Routes />;
}

export default App;
