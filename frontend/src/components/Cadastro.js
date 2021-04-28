import React, { useState, useEffect } from 'react';
import {validaEmail, validaNome, validaCelular, validaEndereco, passwordToHash} from './Valida.js'

export default function Cadastro({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  
  useEffect(() => { 

  },[]);

const handleActionClick = (event) =>{
  if (event.target.id === "criar"){
    const emailValid = (validaEmail(email));
    const nomeValid = validaNome(primeiroNome, ultimoNome);
    const celularValid = validaCelular(celular);
    const enderecoValid = validaEndereco(endereco);
    const passwordHash = passwordToHash(senha);
    if (emailValid && nomeValid && celularValid && enderecoValid && passwordHash){

    }
  } else {
    onSubmit("voltar");
  };
}

  return ( 
    <div className="row">
      <div className="container">
        <div  className="center card-panel green darken-1">
          <h6 style={styles.title}>Cadastro novo Jogador</h6>
        </div>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Primeiro Nome"
                  id="primeiroNome"
                  type="text"
                  className="validate"
                  value={primeiroNome} 
                  onChange={(e) => setPrimeiroNome(e.target.value)}/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Sobrenome" 
                  id="ultimoNome" 
                  type="text" 
                  className="validate" 
                  value={ultimoNome} 
                  onChange={(e) => setUltimoNome(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Endereço" 
                  id="endereco" 
                  type="text" 
                  className="validate" 
                  value={endereco} 
                  onChange={(e) => setEndereco(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="E-mail"
                  id="email" 
                  type="email" 
                  className="validate" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Número Celular - (XX) XXXXX-XXXX"
                  id="phone" 
                  type="text" 
                  className="validate" 
                  value={celular} 
                  onChange={(e) => setCelular(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Senha"
                  id="password" 
                  type="password" 
                  className="validate" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="container">
          <div id="criar" className="waves-effect green darken-1 btn left"  onClick={handleActionClick}>Criar</div>
          <div id="voltar" className="waves-effect green darken-1 btn right" onClick={handleActionClick}>Voltar</div>
        </div>
      </form>
    </div>
  </div>
       
  );
};

const styles = {

  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color : 'white',
  },

};
