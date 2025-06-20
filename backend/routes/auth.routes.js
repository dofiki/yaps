import { Router } from "express";
import {signUp, logIn, logOut} from "../controllers/auth.controller.js";
import { protectRoutes } from "../middlewares/protectroutes.middleware.js";

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/logout', protectRoutes, logOut);

export default router;
