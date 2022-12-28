import {Router, Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
    // do something
    res.status(200).send(req.body);
}

export default createUser;