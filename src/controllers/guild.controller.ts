import { Response, Request } from "express";
import { Guild } from "../models/guild.entity";
import { getSpecificUser } from './user.controller';

export const createGuild = async (req: Request, res: Response) => {
    const {
        id,
        nombre,
        representante,
        email,
        direccion,
        telefono,
        descripcion,
    } = req.body;

    const guild = Guild.create();

    guild.Gremio = id;
    guild.nombre = nombre;
    guild.representante = representante;
    guild.email = email;
    guild.direccion = direccion;
    guild.telefono = telefono;
    guild.descripcion = descripcion;

    try {
        guild.save();
        res.status(200).json({ message: "Guild Create" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getGuilds = async (req: Request, res: Response) => {
    try {
        const guilds = await Guild.find();
        res.status(200).json({ guilds });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
}


export const getSpecificGuild = async (req: Request, res: Response) => {
    try {
        const guild = await Guild.findOneBy({ Gremio: parseInt(req.params.id) });
        if (guild) {
            res.status(200).json({ guild });
        } else {
            res.status(400).json({ message: "Guild not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
}

export const updateGuild = async (req: Request, res: Response) => {
    try {
        const guild = await Guild.findOneBy({ Gremio: parseInt(req.params.id) });
        if (guild) {
            guild.nombre = req.body.nombre;
            guild.representante = req.body.representante;
            guild.email = req.body.email;
            guild.direccion = req.body.direccion;
            guild.telefono = req.body.telefono;
            guild.descripcion = req.body.descripcion;
            guild.save();
            res.status(200).json({ message: "Guild updated" });
        } else {
            res.status(400).json({ message: "Guild not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
}


export const deleteGuild = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const guild = await Guild.findOneBy({ Gremio: parseInt(id) });
        if (guild) {
            guild.remove();
            res.status(200).json({ message: "Guild deleted" });
        } else {
            res.status(400).json({ message: "Guild not found" });
        }
    } catch (error) {
        if(error instanceof Error) {
            res.status(400).json({ message: error.message });
        }else{
            res.status(400).json({ message: "Something went wrong" });
        }
    }
}
