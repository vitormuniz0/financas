import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { Secret, sign } from "jsonwebtoken";
import Users from "../models";


interface User {
    id: number,
    email: string,
    password: string
}

export class AuthController {

    async authenticate(req: Request, res: Response) {

        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: "Nome e  email é Obrigatório" })
            }


            const user = await Users.findOne({ where: { email } }) as unknown as User | null;      //buscando se usuário existe

            if (!user) {
                return res.json({ error: "User not found" })
            }

            const isValuePassword = await compare(password, user.password);     //comparando senha enviada com a senha criptografada pra ver se é igual

            if (!isValuePassword) {
                return res.json({ error: "Senha  Invalida" })
            }

            const secret = process.env.SECRET as Secret;

            const token = sign({ id: user.id }, secret, { expiresIn: "1d" })       //fazendo o token da aplicação

            const { id, email: userEmail } = user;


            return res.json({ user: { id, email: userEmail }, token })
            //retornando o user encontrado
        } catch (error){
            console.error("Error during authentication:", error);
            return res.status(500).json({ error: "Internal server error" });

        }
    }



}