import { Request, Response } from 'express';
import { Company } from '../models/company.entity';

export const getCompanies = async (req: Request, res: Response) => {
    
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(500).json({message: "Something went wrong"});
        }
    }
}

export const getCompany = async (req: Request, res: Response) => {
    const { rutEmpresa } = req.params;
    try {
        const company = await Company.findOneBy({rutEmpresa: parseInt(rutEmpresa)});
        if(company){
            res.status(200).json(company);
        }else{
            res.status(404).json({message: "Company not found"});
        }
    } catch (error) {
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(500).json({message: "Something went wrong"});
        }
    }
}

export const createCompany = async (req: Request, res: Response) => {
    const { rutEmpresa } = req.params;
    const { nombre, direccion, telefono, email, ubicacionTerritorial, idGuild } = req.body;
    const company = Company.create();
    company.rutEmpresa = parseInt(rutEmpresa);
    company.nombre = nombre;
    company.direccion = direccion;
    company.telefono = telefono;
    company.email = email;
    company.ubicacionTerritorial = ubicacionTerritorial;
    company.id = idGuild;
    
    try {
        await company.save();
        res.status(200).json({message: "Company created"});
    }catch(error){
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(500).json({message: "Something went wrong"});
        }
    }
}

export const updateCompany = async (req: Request, res: Response) => {
    const { rutEmpresa } = req.params;
    const { nombre, direccion, telefono, email, ubicacionTerritorial, idGuild } = req.body;
    try {
        const company = await Company.findOneBy({rutEmpresa: parseInt(rutEmpresa)});
        if(company){
            company.nombre = nombre;
            company.direccion = direccion;
            company.telefono = telefono;
            company.email = email;
            company.ubicacionTerritorial = ubicacionTerritorial;
            company.id = idGuild;
            await company.save();
            res.status(200).json({message: "Company updated"});
        }else{
            res.status(404).json({message: "Company not found"});
        }
    }catch(error){
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(500).json({message: "Something went wrong"});
        }
    }
}

export const deleteCompany = async (req: Request, res: Response) => {
    const { rutEmpresa } = req.params;
    try {
        const company = await Company.findOneBy({rutEmpresa: parseInt(rutEmpresa)});
        if(company){
            await company.remove();
            res.status(200).json({message: "Company deleted"});
        }else{
            res.status(404).json({message: "Company not found"});
        }
    }catch(error){
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(500).json({message: "Something went wrong"});
        }
    }
}