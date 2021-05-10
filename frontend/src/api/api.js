import axios from 'axios';

export async function apiNewPlayer(dadosUser) {
    const url = "http://localhost:4040/NewPlayer";
    await axios.post(url, dadosUser);
};


export async function apiNewPassword(dadosUser) {
    const url = "http://localhost:4040/newPassword";
    await axios.post(url, dadosUser);
};

export async function apiGetPlayerData(playerEmail) {
    const url = "http://localhost:4040/logged/" + playerEmail;
    const getValue = await axios.get(url);
    return getValue.data;
};