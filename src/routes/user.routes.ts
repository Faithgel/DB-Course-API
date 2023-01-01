import { Router } from "express";
import {
    createUser,
    getUsers,
    getSpecificUser,
    deleteUser,
    updateUser,
} from "../controllers/user.controller";

const router: Router = Router();

//Routes
router.post("/signup", createUser);
router.get("/users", getUsers);
router.get("/users/:rut", getSpecificUser);
router.delete("/users/:rut", deleteUser);
router.put("/users/:rut", updateUser);

export default router;
