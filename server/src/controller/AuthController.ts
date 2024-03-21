import { compare} from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";


export class AuthController {

    async authenticate(req:Request , res:Response) {
        const {email, password} = req.body;
        
        
        const user = await prisma.user.findFirst({ where: { email}});       //buscando se usuário existe

        if(!user){
            return res.json({error: "User not found"}) 
        }

        const isValuePassword = await compare(password, user.password);     //comparando senha enviada com a senha criptografada prta ver se é igual

        if(!isValuePassword){
            return res.json({error: "Password Invalid"})     
        }

        const token = sign({id: user.id}, "secret", {expiresIn: "1d"})       //fazendo o token da aplicação

        const {id} = user;   

        
        return res.json({user: {id, email}, token})         //retornando o user encontrado
    }
}