import { Router } from "express";
import {
    getGuilds,
    getSpecificGuild,
    createGuild,
    updateGuild,
    deleteGuild,
} from "../controllers/guild.controller";

const router: Router = Router();

router.get("/guilds", getGuilds);
router.get("/guilds/:id", getSpecificGuild);
router.post("/guilds/:id", createGuild);
router.put("/guilds/:id", updateGuild);
router.delete("/guilds/:id", deleteGuild);

export default router;
