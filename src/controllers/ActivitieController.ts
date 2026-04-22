import e, { Request, Response } from "express";
import { Connection } from "../database/database";
import { Activitie } from "../entities/Activitie";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage.external";
import { User } from "../entities/User";
import { Class } from "../entities/Class";

export class ActivitieController {

    public static async get(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({ IdActivities: id })

            if (!activitie) {
                return res.status(404).json({
                    status: false,
                    msg: 'usuario não entrado'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'usuario encontrado com sucesso',
                data: activitie
            })

        } catch (error) {
            console.error(error)
            return res.status(500).json({
                status: false,
                msg: 'erro na conexão com o banco de dados'
            })
        }
    }

    public static async listActivities(req: Request, res: Response) {
        try {
            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.find()

            if (!activitie) {
                return res.status(404).json({
                    status: false,
                    msg: 'Sem atividades listadas '
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'usuario encontrado com sucesso',
                data: activitie
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const repo = Connection.getRepository(Activitie)
            const { IdUser, IdClass, ActivitieType,
                ActivitieDescription, ActivitieDataEnd, ActivitieTitle }
                = req.body

            //validaando se todos os campos foram preenchidos
            if (!IdUser || !IdClass || !ActivitieType ||
                !ActivitieDescription || !ActivitieDataEnd || !ActivitieTitle) {
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            //validaando se a descrição tem mais de 1500 caracteres
            //e se tem pelo menos 10 caracteres
            const description = ActivitieDescription.trim()
            if (description.length > 1500 || description.length < 10) {
                return res.status(400).json({
                    status: false,
                    msg: 'A descrição não pode ter mais de 1500 caracteres'
                })
            }

            //conexão como banco e validando se o usuario 
            //de associado a criação da atividade já existe 
            const repoUser = Connection.getRepository(User)
            const user = await repoUser.findOneBy({ IdUser: IdUser })

            if (!user) {
                return res.status(404).json({
                    status: false,
                    msg: 'usuario não encontrado'
                })
            }

            //verificar ase a classe existe para a criação da atv
            const repoClass = Connection.getRepository(Class)
            const classe = await repoClass.findOneBy({ IdClass: IdClass })

            if (!classe) {
                return res.status(404).json({
                    status: false,
                    msg: 'classe não encontrada'
                })
            }

            //verifica se o titulo é vazio 
            const title = ActivitieTitle.trim()
            
            if(ActivitieTitle == ''){
                return res.status(400).json({status: false, msg: 'titulo vazio'})
            }

            //valida se a data final é maior que a data de criação 
            const dataAtual = new Date()

            if(ActivitieDataEnd < dataAtual){
                return res.status(400).json({status: false, msg: 'data final menor que a data atual'})
            }

            //cria a instancia da atividade
            const activitie = repo.create({
                IdUser: Number(IdUser),
                IdClass: Number(IdClass),
                ActivitieType: String(ActivitieType),
                ActivitieDescription: String(ActivitieDescription),
                ActivitieDataEnd: ActivitieDataEnd,
                ActivitieTitle: String(ActivitieTitle),
                ActivitieDataCreate: dataAtual,
                CreatedAt: dataAtual
            })

            //salva a instacia no banco de dados 
            await repo.save(activitie)

            return res.status(201).json({
                status: true,
                msg: 'atividade criada com sucesso',
                data: activitie
            })
            //retorna erro caso retorme algum problema 
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: "Erro na conexão com o banco de dados"
            })
        }
    }

    public static async update(req: Request, res: Response) {
        try {

        } catch (error) {
            console.error(error)
            return res.status(500).json({
                status: false,
                msg: 'Erro na conexão com o banco de dados'
            })
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({ IdActivities: id })

            if(!activitie){
                return res.status(404).json({
                    status: false,
                    msg: 'atividade não encontrada'
                })            
            }  

            await repo.delete({IdActivities: id})

            return res.status(200).json({
                status: true,
                msg: 'atividade deletada com sucesso'
            })  

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: 'erro na conexão como banco de dados'
            })
        }
    }
}