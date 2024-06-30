import { Request, Response, query } from "express";
import Gastos from "../models/gastoModel";

export class GastosController {

    async CriarGasto(req: Request, res: Response) {
        try {

            const {descricao, valor, categoria, tipo, id_user} = req.body;

            if (!descricao || !valor || !categoria || !tipo || !id_user) {
                return res.status(400).json({ error: "Faltando informações!" })
            }

            const gasto = await Gastos.create({
                id_user,
                descricao,
                valor,
                categoria,
                tipo
            })
            return res.status(201).json({ gasto })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Erro interno do servidor" })
        }
    }

    async BuscarGasto(req: Request, res: Response) {

        try {

            const { id_user } = req.params;

            if (!id_user) {
                console.log("Id do user é obrigátorio")
                res.status(400).json("Id do user é obrigátorio");
            }

            const query = { id_user };

            const gastos = await Gastos.findAll({ where: query });

            if (gastos.length === 0) {
                console.log("Nenhum gasto existente")
                return res.status(404).json("Nenhum gasto existente")
            } else {
                console.log("Gasto exibido!")
                return res.status(201).json(gastos)
            }
        } catch (error) {
            console.error("Erro ao buscar Gastos:", error);
            return res.status(500).json("Erro ao buscar Gastos");
        }
    }
}