import { Router } from "express";
import createUser from "../controllers/user.controller";

const router: Router = Router();

router.post("/signup", createUser);
export default router;
