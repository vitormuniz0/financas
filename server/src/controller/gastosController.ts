import { Request, Response, query } from "express";
import Gastos from "../models/gastoModel";
import { error } from "console";

export class GastosController {

    async CriarGasto(req: Request, res: Response) {
        try {

            const { descricao, valor, categoria, tipo, id_user } = req.body;

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
                res.status(400).json({ error: "Id do user é obrigátorio" });
            }

            const query = { id_user };

            const gastos = await Gastos.findAll({ where: query });

            if (gastos.length === 0) {
                console.log("Nenhum gasto existente")
                return res.status(404).json({ error: "Nenhum gasto existente" })
            } else {
                console.log("Gasto exibido!")
                return res.status(200).json(gastos)
            }
        } catch (error) {
            console.error("Erro ao buscar Gastos:", error);
            return res.status(500).json({ error: "Erro ao buscar Gastos" });
        }
    }

    async DeletarGasto(req: Request, res: Response) {
        try {

            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: "O id é obrigatório!" })
            }

            const gasto = await Gastos.findByPk(id);

            if (!gasto) {
                return res.status(400).json({ error: "Gasto não encontrado!" })
            }

            await Gastos.destroy({
                where: { id }
            })

            return res.status(200).json({ message: "Gasto deletado com sucesso!" });

        } catch (error) {
            console.error("Erro ao deletar gasto:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async AtualizarGasto(req:Request ,res:Response){
        const {id} = req.params;

        const { descricao, valor, categoria, tipo, id_user } = req.body;

        if (!id) {
            return res.status(400).json({ error: "O id é obrigatório!" })
        }

        const gasto = await Gastos.findByPk(id);

        if (!descricao || !valor || !categoria || !tipo || !id_user) {
            return res.status(400).json({ error: "Faltando informações!" })
        }

        if (!gasto) {
            return res.status(404).json({ error: "Gasto não encontrado!" });
        }

        await Gastos.update({
            descricao: descricao ,
            valor: valor,
            categoria: categoria,
            tipo: tipo
        }, {
            where: { id }
        });

        const gastoAtualizado = await Gastos.findByPk(id);

        return res.status(200).json({ gasto: gastoAtualizado });
        
    }

}