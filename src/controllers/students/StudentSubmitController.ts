import { Submit } from "../../entities/Submit";
import { Activitie } from "../../entities/Activitie";
import { User } from "../../entities/User";
import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";

export class StudentSubmitController{
    static async createSubmit(req: Request, res: Response){
        try{
            
            const { IdActivitites, SubSenteAt, IdUser } = req.body;

            if( !IdActivitites || !SubSenteAt || !IdUser){
                return res.status(400).json({status: false, msg: 'Todos os campos devem estar preenchidos'})
            }

            const user = await Connection.getRepository(User).findOneBy({ IdUser: Number(IdUser)})

            if(!user){
                return res.status(4040).json({status: false, msg: 'O usuario não existe'})
            }

            const actitivitie = await Connection.getRepository(Activitie).findOneBy({ IdActivities: Number(IdActivitites)})

            if(!actitivitie){
                return res.status(404).json({status: false, msg: 'A atividade não existe'})
            }

            const thisDate = new Date();

            const sendAt = new Date(SubSenteAt);

            if(sendAt < thisDate){
                return res.status(400).json({ status: false, msg: 'A data de envio deve ser futura a data atual'})
            }

            const repoSend = Connection .getRepository(Submit);

            const send = repoSend.create({
                IdActivities: Number(IdActivitites),
                SubSenteAt: sendAt,
                IdUser: Number(IdUser)
            })

            await repoSend.save(send);

            return res.status(201).json({ status: true, msg: 'Atividade enviada com sucesso'})

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }

    static async listSubmitByUser(req: Request, res: Response){
        try{

            const id = Number(req.params.id);

            if(!id){
                return res.status(400).json({
                    status: false,
                    msg: 'Id do usuario deve ser informado'
                })
            }

            const user = await Connection.getRepository(User).findOneBy({ IdUser: id });

            if(!user){
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não encontrado'
                })
            }

            const repo = Connection.getRepository(Submit);

            const submits = await repo.findBy({ IdUser: id})

            if(!submits){
                return res.status(404).json({
                    status: false,
                    msg: 'Nenhuma atividade enviada por este usuario'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'Atividades encontradas',
                data: submits 
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }
}