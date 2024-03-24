import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

export function AuthMiddlewares(
    req: Request,
    res: Response,
    next: NextFunction
){
    const { authorization } = req.headers;                  //recebendo o token 

    if(!authorization){
        return res.status(401).json({error: "Token not provider"})          //se não existir o token 
    }


    const [, token] = authorization.split(" ")                //separando o token

    try{
        const secret = process.env.SECRET as Secret;
        const decoded = verify(token, secret);               
        const {id} = decoded as TokenPayload;

        req.userId = id;
        next();
    } catch (error){
        return res.status(401).json({error: "Token invalid"})
    }
}