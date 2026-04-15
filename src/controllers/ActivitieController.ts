import e, { Request, Response } from "express";
import { Connection } from "../database/database";
import { Activitie } from "../entities/Activitie";

export class ActivitieController{

    public static async listActivities(req: Request, res: Response){
        try{

        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }

    public static async create(req: Request, res: Response){
        try{

        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false, 
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }
}