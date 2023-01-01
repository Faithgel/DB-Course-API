import { Request, Response } from "express";
import { User } from "../models/user.entity";

export const createUser = async (req: Request, res: Response) => {
    // Extract the username from the request body
    const { rut, name, lastname, email, number, nationality } = req.body;
    const user = User.create();
    user.rut = rut;
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.number = number;
    user.nationality = nationality;
    try {
        await user.save();
        res.status(200).json({ message: "User created" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getSpecificUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.name = req.body.name;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.number = req.body.number;
            await user.save();
            res.status(200).json({ message: "User updated" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });

        if (user) {
            await user.remove();
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};
