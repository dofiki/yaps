import { Router } from "express";
import { createBlog } from "../controllers/post.controller.js";
import { protectRoutes } from "../middlewares/protectroutes.middleware.js";

const router =  Router()

router.post('/', protectRoutes, createBlog);

export default router;