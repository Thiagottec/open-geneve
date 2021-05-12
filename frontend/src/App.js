import { toast } from 'materialize-css';
import React, { useState, useEffect } from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';
import Logged from './components/Logged.js';

export default function App() {
  const [loginStatus, setloginStatus] = useState(false);
  const [loginEmail, setloginLoginEmail] = useState("");

  useEffect(() => { 
  },[]);

  const handleSubmit = (status) => {
    setloginStatus(status);
  }

  const handleLoggin = (email) => {
    if (email !== "") {
      setloginLoginEmail(email);
      setloginStatus("logged");
    } else {
      toast({html: 'Todos os campos são obrigatórios'});
    }
  };
        return (
                  <div>
                  {loginStatus === false && <Login 
                                                onSubmit={handleSubmit} 
                                                onUserEmail={handleLoggin}/> }
                    {loginStatus === "cadastrar" && <Cadastro 
                                                        onSubmit={handleSubmit} />}
                    {loginStatus === "logged" && <Logged 
                                                      playerId={loginEmail} 
                                                      onSubmit={handleSubmit}/> }
                    {loginStatus === "voltar" && <App />} 
                  </div>
        );
}