import React, { useState, useEffect } from 'react';

export default function Input({ placeholder,  }) {
    return ( 
    <div>
      <input placeholder="Primeiro Nome" id="primeiroNome" type="text" className="validate" 
                 value={primeiroNome} onChange={(e) => setPrimeiroNome(e.target.value)}/>
    </div>
    );
};