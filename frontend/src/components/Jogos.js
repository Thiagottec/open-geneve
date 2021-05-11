import React from 'react';

export default function Jogos({email, primeiroNome, ultimoNome}) {
  console.log(email,primeiroNome, ultimoNome);
  return ( 
      <div>
        <div  className="center green darken-1">
          <h6 style={styles.title}>Jogos da competição XXXX</h6>
        </div>
        <div>
        <table className="highlight">
          <thead> 
                <tr>
                    <th>{`Jogador ${primeiroNome} ${ultimoNome}`}</th>
                </tr>
            </thead>
          </table>
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