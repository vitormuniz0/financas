import {Router} from 'express';
import { UserController } from './controller/userController';
import { AuthController } from './controller/AuthController';
import { AuthMiddlewares } from './middlewares/auth';
import {GastosController } from './controller/gastosController';

const userController = new UserController();
const authController = new AuthController();
const gastosController = new GastosController();

export const router = Router();

router.post("/create",  userController.store)        //rota de criar user
router.get("/users",AuthMiddlewares, userController.index)       //rota de buscar todos os users
router.post("/auth",  authController.authenticate)         //autenticate / entrar no perfil
router.post("/criarGasto" , gastosController.CriarGasto)
router.get("/buscarGasto/:id_user" , gastosController.BuscarGasto)
router.put("/atualizarGasto/:id" , gastosController.AtualizarGasto)
router.delete("/deletarGasto/:id", gastosController.DeletarGasto)

