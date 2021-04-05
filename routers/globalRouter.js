import express from "express";
import { getJoin, login, logout, postJoin } from "../controllers/userController";
import { Home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.home, Home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;