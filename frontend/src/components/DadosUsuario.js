
import React from 'react';

export default function DadosUsuario(DadosUsuario = {}) {
    const { email, primeiroNome, ultimoNome,celular,
         endereco, backhand, forehand } = DadosUsuario.DadosUsuario;
console.log(email, primeiroNome, ultimoNome,celular,
  endereco, forehand);

    return ( 
      <div>
        <div  className="center green darken-1">
          <h6 style={styles.title}>Dados Jogador</h6>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Primeiro Nome"
                  id="primeiroNome"
                  type="text"
                  className="validate"
                  value={primeiroNome} 
                  readOnly/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Sobrenome" 
                  id="ultimoNome" 
                  type="text" 
                  className="validate" 
                  value={ultimoNome}
                  readOnly/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Endereço" 
                  id="endereco" 
                  type="text" 
                  className="validate" 
                  value={endereco}
                  readOnly/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="E-mail"
                  id="email" 
                  type="email" 
                  className="validate" 
                  value={email}
                  readOnly/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Número Celular - (XX) XXXXX-XXXX"
                  id="celphone" 
                  type="text" 
                  className="validate" 
                  value={celular}
                  readOnly/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Número Celular - (XX) XXXXX-XXXX"
                  id="celphone" 
                  type="text" 
                  className="validate" 
                  value={celular}
                  readOnly/>
          </div>

          <div className="input-field col s6">
            <input placeholder="Batida"
                   id="batida" 
                   type="text" 
                   className="validate" 
                  value={`${forehand} e ${backhand}`}
                  readOnly/>
          </div>
        </div> 
      </div>
    );

}
const styles = {
  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color : 'white',
  }
};