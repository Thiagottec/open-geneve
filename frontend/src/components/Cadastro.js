import React, { useState, useEffect } from 'react';

export default function Cadastro({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  

const handleActionClick = (event) =>{
  if (event.target.id === "cadastrar"){
    console.log(endereco, celular);
  
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
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Primeiro Nome" 
                  id="primeiroNome" 
                  type="text" 
                  className="validate" 
                  value={primeiroNome} 
                  onChange={(e) => setPrimeiroNome(e.target.value)}/>
          </div>
          <div class="input-field col s6">
            <input placeholder="Sobrenome" 
                  id="ultimoNome" 
                  type="text" 
                  class="validate" 
                  value={ultimoNome} 
                  onChange={(e) => setUltimoNome(e.target.value)}/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Endereço" 
                  id="endereco" 
                  type="text" 
                  class="validate" 
                  value={endereco} 
                  onChange={(e) => setEndereco(e.target.value)}/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="E-mail"
                  id="email" 
                  type="email" 
                  class="validate" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class="input-field col s6">
            <input placeholder="Número Celular"
                  id="phone" 
                  type="text" 
                  class="validate" 
                  value={celular} 
                  onChange={(e) => setCelular(e.target.value)}/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Senha"
                  id="password" 
                  type="password" 
                  class="validate" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)}/>
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
