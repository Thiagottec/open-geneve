import React, { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [celular, setCelular] = useState("");
  return ( 
    <div className="container">
      <div>
        <input className="" type="text" value={nome} placeholder="Nome"/>
        <input className="" type="text" value={endereco} placeholder="Endereço"/>
        <input className="" type="text" value={celular} placeholder="Celular"/>
      </div>
    </div>  
  );
};