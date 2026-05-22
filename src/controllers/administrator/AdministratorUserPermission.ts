import { Request, Response } from "express";
import { UserPermission } from "../../entities/UserPermission";
import { User } from "../../entities/User";
import { Connection } from "../../database/dataBase";
export class AdministratorUserPermissionController{
    static async get(req: Request, res: Response){
        try{

            const id = Number(req.params.id);

            const repo = Connection.getRepository(UserPermission);

            const userPermission = await repo.findOneBy({ IdUp: id })

            if(!userPermission){
                return res.status(404).json({
                    status : false,
                    msg: 'Permissão não encontrada'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'Permissão encontrada',
                data: userPermission
            })

        }catch(error: any){
            res.status(500).json({
                status: false,
                msg: error
            })
        }
    }
    
    static async listByUser(req: Request, res: Response){
        try{

            const id = Number(req.params.id);

            const user = await Connection.getRepository(User).findOneBy({ IdUser: id });

            if(!user){
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não encontrado'
                })
            }

            const repo = Connection.getRepository(UserPermission);

            const userPermissions = await repo.findBy({ IdUser: id})

            if(!userPermissions){
                return res.status(404).json({
                    status: false,
                    msg: 'Não existem permissoes criadas para esse usuario'
                })
            }

            return res.status(200).json({
                status: true, 
                msg: 'Permissões encontradas',
                data: userPermissions 
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }


}