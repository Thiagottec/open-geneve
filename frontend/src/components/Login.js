import React, { useState } from "react";
export default function Login( { onSubmit, onNewUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleActionClick = (event) => {
    if (event.target.id === 'login') {
      onSubmit("logar");
    } else { 
      onNewUser("cadastrar");
    };
  };
  return ( 
    <div className="container">
      <div  className="center card-panel green darken-1">
      <h3 style={styles.title}>Open Genve Login</h3>
      </div>
      <div>
        <input className="" type="text" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className="" type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="container">
        <div id="login" className="waves-effect green darken-1 btn left"  onClick={handleActionClick}>Login</div>
        <div id="cadastro" className="waves-effect green darken-1 btn right" onClick={handleActionClick}>Cadastrar</div>
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
