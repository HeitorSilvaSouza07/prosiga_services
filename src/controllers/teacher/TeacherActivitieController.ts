 import { Request, Response } from "express";
 import { Connection } from "../../database/dataBase";
 import { Activitie } from "../../entities/Activitie";
 import { User } from "../../entities/User";
 import { Class } from "../../entities/Class";

 export class TeacherActivitieController{
    static async createActivitie(req: Request, res: Response){

      const idUser = res.locals.userId; //arrumar depois

      const { IdClass, ActivitieType, ActivitieTitle, 
         ActivitieDescription, ActivitieDataEnd
       } = req.body;

      const connection = Connection.getRepository(User);

      if( !IdClass || !ActivitieType || !ActivitieTitle || 
         !ActivitieDescription || !ActivitieDataEnd){
            return res.status(400).json({status: false, msg: 'Todos os campos devem estar preenchidos'})
         }

      const user = await connection.findOne({where: {IdUser: idUser}});
        
      if(!user){
         return res.status(404).json({status: false, msg: 'Usuário não encontrado'})
      }

      
    }

    static async updateActivitie(req: Request, res: Response){

    }

    static async desactiveActivitie(req: Request, res: Response){

    }

    static async listActivitie(req: Request, res: Response){
        
    }

    static async getActivitie(req: Request, res: Response){

    }
 }