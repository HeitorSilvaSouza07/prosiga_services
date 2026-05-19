import { NextFunction, Request, Response } from "express";
import { Connection } from "../database/dataBase";
import { User } from "../entities/User";

export class AuthUser{
    static auth(req: Request, res: Response, next: NextFunction){
        
    }
}