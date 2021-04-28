function validaEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validaNome(primeiroNome, ultimoNome) {
    if (!primeiroNome) {
        return false;
    }
    if (!ultimoNome) {
        return false;
    }
    return true;
}

function validaCelular(numeroCelular) {
    if (!numeroCelular) {
        return false;
    }
    if (numeroCelular.length < 9) {
        return false;
    }
    return true;
}

function validaEndereco(endereco) {
    if (!endereco) {
        return false;
    }
    if (endereco.length < 10) {
        return false;
    }
    return true;
}

function passwordToHash(password) {
    return password;

}

export { validaEmail, validaNome, validaCelular, validaEndereco, passwordToHash };