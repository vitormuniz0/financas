import { hash } from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

export class UserController {

    async index(req: Request, res: Response) {
        const users = await prisma.user.findMany();           //buscando todos os usuários
        return res.status(200).json({ users })
    }

    async store(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const userExists = await prisma.user.findFirst({where:{ email }}); //vendo se o usuário existe

        if (userExists) {
            return res.status(400).json({ error: "User already exists" }) 
        }

        const has_password = await hash(password, 8);
        const user = await prisma.user.create({            //se não existir ele vai criar
            data: {
                name,
                email,
                password: has_password,
            },
        })

        return res.status(201).json({ user })
    }
}