import e, { Request, Response } from "express";
import { Connection } from "../../database/dataBase";
import { Activitie } from "../../entities/Activitie";
import { User } from "../../entities/User";
import { Class } from "../../entities/Class";

export class ActivitieController {

    static async get(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({ IdActivities: id })

            if (!activitie) {
                return res.status(404).json({
                    status: false,
                    msg: 'Atividade não encontrada'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'Atividade encontrada com sucesso',
                data: activitie
            })

        } catch (error) {
            return res.status(500).json({
                status: false,
                msg: 'ERROR IN BANK CONNECTION'
            })
        }
    }

    static async listActivities(req: Request, res: Response) {
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
                msg: 'Atividades encontradas com sucesso',
                data: activitie
            })

        } catch (error) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const repo = Connection.getRepository(Activitie)
            const { IdUser, IdClass, ActivitieType,
                ActivitieDescription, ActivitieDataEnd, ActivitieTitle }
                = req.body

            if (!IdUser || !IdClass || !ActivitieType ||
                !ActivitieDescription || !ActivitieDataEnd || !ActivitieTitle) {
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const description = ActivitieDescription.trim()
            if (description.length > 1500 || description.length < 10) {
                return res.status(400).json({
                    status: false,
                    msg: 'A descrição não pode ter mais de 1500 caracteres'
                })
            }

            const repoUser = Connection.getRepository(User)
            const user = await repoUser.findOneBy({ IdUser: IdUser })

            if (!user) {
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não encontrado'
                })
            }

            const repoClass = Connection.getRepository(Class)
            const classe = await repoClass.findOneBy({ IdClass: IdClass })

            if (!classe) {
                return res.status(404).json({
                    status: false,
                    msg: 'Classe não encontrada'
                })
            }

            const title = ActivitieTitle.trim()

            if (ActivitieTitle == '') {
                return res.status(404).json({
                    status: false,
                    msg: 'Título vazio'
                })
            }

            const dataAtual = new Date()

            if (ActivitieDataEnd < dataAtual) {
                return res.status(404).json({
                    status: false,
                    msg: 'Data final menor que a data atual'
                })
            }

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

            await repo.save(activitie)

            return res.status(201).json({
                status: true,
                msg: 'atividade criada com sucesso',
                data: activitie
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: false,
                msg: error
            })
        }
    }

    static async updateDate(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const { ActivitieDataEnd } = req.body

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({ IdActivities: id })

            if (!activitie) {
                return res.status(404).json({
                    status: false,
                    msg: 'atividade não encontrada'
                })
            }

            const dataAtual = new Date()

            if (ActivitieDataEnd < dataAtual) {
                return res.status(400).json({
                    status: false,
                    msg: 'Data final menor que a data atual'
                })
            }

            activitie.ActivitieDataEnd = ActivitieDataEnd

            await repo.save(activitie)

            return res.status(200).json({
                status: true,
                msg: 'Data de entrega atualizada com sucesso',
                data: activitie
            })

        } catch (error) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Activitie)
            const activitie = await repo.findOneBy({ IdActivities: id })

            if (!activitie) {
                return res.status(404).json({
                    status: false,
                    msg: 'atividade não encontrada'
                })
            }

            await repo.delete({ IdActivities: id })

            return res.status(200).json({
                status: true,
                msg: 'atividade deletada com sucesso'
            })

        } catch (error) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }
}
