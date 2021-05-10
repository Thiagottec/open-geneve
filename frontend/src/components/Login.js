import React, { useState } from "react";
export default function Login( { onSubmit, onUserEmail}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleActionCadastrar = (event) => {
    if (event.target.id === 'cadastro') {
      onSubmit("cadastrar");
    };
  };
    
  const handleActionLogin = (event) => {
    if (event.target.id === 'login') {
      onUserEmail(email);
    };
  };

  return ( 
    <div className="container">
      <div  className="center card-panel green darken-1">
      <h3 style={styles.title}>Open Genve Login</h3>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" class="validate" type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field col s12">
          <input className="" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="container">
        <div id="login" className="waves-effect green darken-1 btn left"  onClick={handleActionLogin}>Login</div>
        <div id="cadastro" className="waves-effect green darken-1 btn right" onClick={handleActionCadastrar}>Cadastrar</div>
      </div>
    </div>  
  );
}
const styles = {

  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color : 'white',
  },

};
