import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const database = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(database);

        const controller = new AuthController(authRepository);
        
        // define routes
        router.post("/login", controller.loginUser)
        router.post("/register",  controller.registerUser)

        router.get("/", AuthMiddleware.validateJwt, controller.getUsers)

        return router
    }
}