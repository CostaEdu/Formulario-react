import React, { useState } from 'react';
import './Formulario.css';

function Formulario() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [Uf, setUf] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');


  const handleChange = (e) => {
    setNome(e.target.value);
  }

  const handleSobrenomeChange = (e) => {
    setSobrenome(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleTelChange = (e) => {
    setTel(e.target.value);
  }

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  }

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  }

  const handleConfSenhaChange = (e) => {
    setConfSenha(e.target.value);
  }

  const handleCepChange = (e) => {
    setCep(e.target.value);
  }

  const handleCidadeChange = (e) => {
    setCidade(e.target.value);
  }

  const handleUfChange = (e) => {
    setUf(e.target.value);
  }

  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  }

  const handleBairroChange = (e) => {
    setBairro(e.target.value);
  }

  const handleRuaChange = (e) => {
    setRua(e.target.value);
  }

  const handleSubmit = (e) => {
    if (senha != confSenha) {
      alert("password Not Match");
    }
    else {
      // alert('A form was submitted with Name :"' + name +
      //   '" ,Age :"' + age + '" and Email :"' + email + '"');
    }
    e.preventDefault();

  }
  return (
    <div className="formulario">
      <header className="formulario-items">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <img className='logo' src='/img/logo-black.png' alt='logo'/>
          
          <label >Nome</label><br />
          <input 
          type="text" 
          value={nome} 
          required onChange={(e) => { handleChange(e) }} 
          placeholder='Digite seu nome'
          /><br />

          <label >Sobrenome</label><br />
          <input 
          type="text" 
          value={sobrenome} 
          required onChange={(e) => { handleSobrenomeChange(e) }} 
          placeholder = "Digite seu sobrenome"
          /><br />

          <label> Email</label><br />
          <input 
          type="email" 
          value={email} 
          required onChange={(e) => { handleEmailChange(e) }} 
          placeholder = "Digite seu e-mail"
          /><br />

          <label>Telefone</label><br />
          <input 
          type="text" 
          value={tel} 
          required onChange={(e) => { handleTelChange(e) }} 
          placeholder = "Digite seu telefone"
          /><br />

          <label>CPF</ label><br />
          <input 
          type="text" 
          value={cpf} required onChange={(e) => { handleCpfChange(e) }} 
          placeholder = "Digite seu CPF ou CNPJ"
          /><br />

          <label>Senha</label><br />
          <input 
          type="text" 
          value={senha} 
          required onChange={(e) => { handleSenhaChange(e) }} 
          placeholder = "Digite sua senha"
          /><br />
          
          <label> Confirme sua senha</label><br />
          <input 
          type="text" 
          value={confSenha} 
          required onChange={(e) => { handleConfSenhaChange(e) }} 
          placeholder = "Digite novamente a sua senha"
          /><br />

          <label>CEP</ label><br />
          <input 
          type="text" 
          value={cep} 
          required onChange={(e) => { handleCepChange(e) }} 
          placeholder = "Digite seu CEP"
          /><br />

          <label>Cidade </label><br />
          <input 
          type="text" 
          value={cidade} 
          required onChange={(e) => { handleCidadeChange(e) }} 
          placeholder = "Digite sua cidade"
          /><br />

          <label>UF</label><br />
          <input 
          type="text" 
          value={Uf} 
          required onChange={(e) => { handleUfChange(e) }} 
          placeholder = "Digite seu Estado"
          /><br />

          <label>Numero </label><br />
          <input 
          type="text" 
          value={numero} required onChange={(e) => { handleNumeroChange(e) }} 
          placeholder = "Digite o número"
          /><br />

          <label>Bairro </label><br />
          <input 
          type="text" 
          value={bairro} required onChange={(e) => { handleBairroChange(e) }} 
          placeholder = "Digite seu bairro"
          /><br />

          <label>Rua </label><br />
          <input 
          type="text" 
          value={rua} 
          required onChange={(e) => { handleRuaChange(e) }} 
          placeholder = "Digite sua rua"
          /><br />
          
          <button 
          type="submit"
          value="Submit" 
          className='botao'>
            Cadastrar
          </button>
        </form>
      </header>
    </div>
  );
}
console.log(Formulario)
export default Formulario;