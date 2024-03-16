import { compare} from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";


export class AuthController {

    async authenticate(req:Request , res:Response) {
        const {email, password,id} = req.body;
        
        
        const user = await prisma.user.findUnique({ where: { email: email }});

        if(!user){
            return res.json({error: "User not found"})
        }

        const isValuePassword = await compare(password, user.password);

        if(!isValuePassword){
            return res.json({error: "Password Invalid"})
        }

        const token = sign({id: user.id}, "secret", {expiresIn: "1d"})


        return res.json({user, token})
    }
}