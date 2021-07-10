import express from "express";
import {
    homeController,
    economyController,
    politicsController,
    socialController
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/economy", economyController);
globalRouter.get("/politics", politicsController);
globalRouter.get("/social", socialController);

export default globalRouter;