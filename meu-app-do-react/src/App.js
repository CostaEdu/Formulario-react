import { useState } from "react";
import Formulario from "./Formulario";
import Botao from "./Botao";
import ValueForm from "./ValueForm";
import PessoaCadastrada from "./PessoaCadastrada";

function App() {
  return (
    <div>
      <Formulario />
      <Botao />
      <ValueForm />
      <PessoaCadastrada/>
    </div>
  )
}

export default App;
