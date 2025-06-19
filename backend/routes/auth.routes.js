import { Router } from "express";
import signUp from "../controllers/auth.controller.js";
import { protectRoutes } from "../middlewares/protectroutes.middleware.js";

const router = Router();

router.post('/signup', signUp);
router.get('/yo', protectRoutes, (req,res)=>{
    res.status(200).json({"message":"0ok"});

})

export default router;