
import React from 'react';

export default function DadosUsuario(DadosUsuario = {}) {
    const { email, primeiroNome, ultimoNome, celular,
         endereco, backhand, forehand } = DadosUsuario.DadosUsuario;
    return (
      <div>
        <div  className="center green darken-1">
          <h6 style={styles.title}>Dados Jogador</h6>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="primeiroNome"
                   type="text"
                   value={primeiroNome} 
                   readOnly/>
          </div>
          <div className="input-field col s6">
            <input id="ultimoNome" 
                   type="text" 
                   value={ultimoNome}
                   readOnly/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="endereco" 
                   type="text" 
                   className="validate" 
                   value={endereco}
                   readOnly/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" 
                   type="email" 
                   className="validate" 
                   value={email}
                   readOnly/>
          </div>
          <div className="input-field col s6">
            <input id="celphone" 
                   type="text" 
                   value={celular}
                   readOnly/>
          </div>
          <div className="input-field col s6">
            <input id="batida" 
                   type="text" 
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