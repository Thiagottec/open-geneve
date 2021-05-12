import axios from 'axios';

export async function apiNewPlayer(dadosUser) {
    const url = "http://localhost:4040/NewPlayer";
    await axios.post(url, dadosUser);
};

export async function apiNewPassword(dadosUser) {
    const url = "http://localhost:4040/newPassword";
    console.log(dadosUser);
    await axios.post(url, dadosUser);
};

export async function apiGetPlayerData(playerEmail) {
    const url = "http://localhost:4040/logged/" + playerEmail;
    const getValue = await axios.get(url);
    return getValue.data;
};

export async function apiGetCompetitions(playerEmail) {
    const url = "http://localhost:4040/competitions/" + playerEmail;
    const getValue = await axios.get(url);
    return getValue.data;
};