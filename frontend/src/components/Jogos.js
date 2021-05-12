import React from 'react';

export default function Jogos({email, primeiroNome, ultimoNome}) {
  return ( 
      <div>
        <div  className="center green darken-1">
          <h6 style={styles.title}>{`Jogos de ${primeiroNome} ${ultimoNome} da competição XXXXXX`}</h6>
        </div>
        <div>
        <table className="highlight">
          <thead> 
                <tr>
                    <th>Jogos</th>
                    <th>Resultados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th>colina1</th>
                  <th>colina2</th>
                </tr>
            </tbody>
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