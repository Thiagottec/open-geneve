import React, { useState, useEffect } from "react";
import { apiGetPlayerData } from "../api/api";
import DadosUsuario from "./DadosUsuario";
import Url from "./Url";

export default function Logged({ onSubmit, playerId}) {
  const [loggedPlayer, setLoggedPlayer] = useState({});
  const [linkDadosUsu, setLinkDadosUsu] = useState("false");
  const [linkJogos, setLinkJogos] = useState("false");
  const [linkClassific, setLinkClassific] = useState("false");
  const [linkCompeticoes, setLinkCompeticoes] = useState("false");

  useEffect(() => { 
    const getPlayerData = async (inPlayerId) => {
      const playerData = await apiGetPlayerData(inPlayerId);
      setLoggedPlayer(playerData[0]);
    };
    getPlayerData(playerId);
  },[]);

  const handleActionClick = (event) =>{
    console.log(event);
    if (event.target.id === "sair"){
    onSubmit("voltar");
    } else {
      console.log(event);
    };
  };
  const handleDaodsUsuario = () => {
    setLinkDadosUsu(true);
    setLinkJogos(false);
    setLinkClassific(false);
    setLinkCompeticoes(false);
  };
  const handleJogos = () => {
    setLinkDadosUsu(false);
    setLinkJogos(true);
    setLinkClassific(false);
    setLinkCompeticoes(false);
  };
  const handleClassific = () => {
    setLinkDadosUsu(false);
    setLinkJogos(false);
    setLinkClassific(true);
    setLinkCompeticoes(false);
  };
  const handleCompeticoes = () => {
    setLinkDadosUsu(false);
    setLinkJogos(false);
    setLinkClassific(false);
    setLinkCompeticoes(true);
  };
  return(
    <div className="container">
      <div  className="center card-panel green darken-1">
        <h3 style={styles.title}>{`Bem vindo ${loggedPlayer.primeiroNome}`}</h3>
        <div id="sair" className="waves-effect green darken-1 btn left" onClick={handleActionClick}>sair</div>
      </div>
      <div className="row">
        <div className="col s12 m4 l3">
        <table className="highlight">
          <thead> 
              <tr>
                  <th>{`Jogador ${loggedPlayer.primeiroNome} ${loggedPlayer.ultimoNome}`}</th>
              </tr>
          </thead>
          <tbody id="actionPlayer">
            <tr>
              <Url classNameA="btn-floating green darken-1"
                   classNameI="material-icons"
                   iconName="account_box"
                   linkName="Dados Jogador"
                   handleChange={handleDaodsUsuario} />
            </tr>
            <tr>
              <Url classNameA="btn-floating green darken-1"
                   classNameI="material-icons"
                   iconName="videogame_asset"
                   linkName="Jogos"
                   handleChange={handleJogos} />
            </tr>
            <tr>
              <Url classNameA="btn-floating green darken-1"
                   classNameI="material-icons"
                   iconName="show_chart"
                   linkName="Classificação"
                   handleChange={handleClassific} />
            </tr>
            <tr>
              <Url classNameA="btn-floating green darken-1"
                   classNameI="material-icons"
                   iconName="compare_arrows"
                   linkName="Competições"
                   handleChange={handleCompeticoes} />
            </tr>
          </tbody>
        </table>
        </div>
        <div className="col s12 m8 l9">
          {linkDadosUsu === true && <DadosUsuario DadosUsuario={loggedPlayer} />}
          {linkJogos === true && "Clicou em Jogos"}
          {linkClassific === true && "Clicou em Classificação"}
          {linkCompeticoes === true && "Clicou em Competições"}
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
  },

};
