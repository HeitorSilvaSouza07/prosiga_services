import { Request, Response } from "express";
import { Submit } from "../../entities/Submit";
import { Connection } from "../../database/dataBase";
import { Activitie } from "../../entities/Activitie";

export class AdministratorSubmitController{
    static async get(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }

    static async listByActivitie(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}