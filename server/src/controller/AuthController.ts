import { compare} from "bcryptjs";
import { Request, Response } from "express";
import { Secret, sign } from "jsonwebtoken";
import Users from "../models";


interface User{
    id: number,
    email: string,
    password: string
}

export class AuthController {

    async authenticate(req:Request , res:Response) {
        const {email, password} = req.body;
        
        
        const user = await Users.findOne({ where: { email } }) as unknown as User | null;      //buscando se usuário existe

        if(!user){
            return res.json({error: "User not found"}) 
        }

        const isValuePassword = await compare(password, user.password);     //comparando senha enviada com a senha criptografada prta ver se é igual

        if(!isValuePassword){
            return res.json({error: "Password Invalid"})     
        }

        const secret = process.env.SECRET as Secret;

        const token = sign({id: user.id}, secret , {expiresIn: "1d"})       //fazendo o token da aplicação

        const {id} = user;   

        
        return res.json({user: {id, email}, token})         //retornando o user encontrado
    }
}