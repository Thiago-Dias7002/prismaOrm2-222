import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";

const ALGORITHM = "ripemd160WithRSA"
const SECRET_TOKEN_AUTENTICACAO = "teste123456789"

const hash = (senha: string | number) => {
    if (typeof(senha) === "number") {
        senha = senha.toString();
    }

    senha = senha.split("").reverse().join();
    senha = crypto.createHash(ALGORITHM).update(senha).digest('hex');
    let salt = senha.substring(senha.length-10,senha.length);
    senha = crypto.createHash(ALGORITHM).update(salt + senha).digest('hex');
    return senha;
};

const gerarToken = (idUsuario: number) => {
    const token = jwt.sign({idUsuario: idUsuario}, SECRET_TOKEN_AUTENTICACAO);
    return token
}

export {
    hash,
    gerarToken,
}