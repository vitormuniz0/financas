import { hash } from "bcryptjs";
import { Request, Response } from "express";
import Users from "../models";

export class UserController {


    async index(req: Request, res: Response) {
        try {
            const users = await Users.findAll();           //buscando todos os usuários
            return res.status(200).json({ users })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal Server Error" })
        }


    }

    async store(req: Request, res: Response) {

        try {
            const { nome, email, password } = req.body;

            if (!nome || !email || !password) {
                return res.status(400).json({ error: "Name, email, and password are required" })
            }


            const userExists = await Users.findOne({ where: { email } }); //vendo se o usuário existe

            if (userExists) {
                return res.status(400).json({ error: "User already exists" })
            }

            const has_password = await hash(password, 8);
            const user = await Users.create({            //se não existir ele vai criar
                nome,
                email,
                password: has_password,
            })

            return res.status(201).json({ user })

        } catch (error) {
            console.log(error)

            return res.status(500).json({ error: "Internal Server Error" })
        }


    }
}