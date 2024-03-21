import {Router} from 'express';
import { UserController } from './controller/userController';
import { AuthController } from './controller/AuthController';
import { AuthMiddlewares } from './middlewares/auth';

const userController = new UserController();
const authController = new AuthController();

export const router = Router();

router.post("/create",  userController.store)        //rota de criar user
router.get("/users",AuthMiddlewares, userController.index)       //rota de buscar todos os users
router.post("/auth",  authController.authenticate)         //autenticate / entrar no perfil


