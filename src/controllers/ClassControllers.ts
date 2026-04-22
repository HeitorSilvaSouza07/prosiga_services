import { Request, Response } from "express";
import { Connection } from "../database/database";
import { Class } from "../entities/Class";

export class ClassControllers{
    public static async get(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async listClass(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async createClass(req: Request, res: Response){
        try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async updateClass(req: Request, res: Response){
            try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    public static async deleteClass(req: Request, res: Response){
            try{

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }
}