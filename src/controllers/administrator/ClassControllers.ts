import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";
import { Class } from "../../entities/Class";

export class ClassControllers {
    static async get(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(Class)

            const classe = repo.findOne({ where: { IdClass: id } })

            if (!classe) {
                return res.status(404).json({
                    status: false,
                    msg: 'usuario não existe'
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'A classe foi encontrada com sucesso',
                data: classe
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: 'erro inteiro na conexão'
            })
        }
    }

    static async listClass(req: Request, res: Response) {
        try {
            const repo = await Connection.getRepository(Class)

            const classes = await repo.find()

            return res.status(200).json({
                status: true,
                data: classes
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }

    static async createClass(req: Request, res: Response) {
        try {

            const { ClassPeriod, ClassCurso } = req.body

            if (!ClassCurso || !ClassPeriod) {
                return res.status(404).json({
                    status: false,
                    msg: 'Campos não preenchidos'
                })
            }

            const repo = await Connection.getRepository(Class)

            const classe = repo.create({
                ClassCurso: String(ClassCurso),
                ClassPeriod: Number(ClassPeriod)
            })

            await repo.save(classe)

            return res.status(201).json({
                status: true,
                msg: 'A classe foi criada com sucesso'
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }

    static async updateClass(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const { IdClass, ClassPeriod, ClassCurso } = req.body

            const repo = await Connection.getRepository(Class)

            const classExisting = await repo.findOne({ where: { IdClass: id } })

            if (!classExisting) {
                return res.status(404).json({
                    status: false,
                    msg: 'a classe não existe'
                })
            }

            if (!IdClass || !ClassPeriod || !ClassCurso) {
                return res.status(400).json({
                    status: false,
                    msg: 'todos os campos devem ser preenchidos'
                })
            }

            const classe = ({
                IdClass: IdClass,
                ClassCurso: ClassCurso,
                ClassPeriod: ClassPeriod
            })

            await repo.save(classe)

            return res.status(201).json({
                status: true,
                msg: 'A classe foi atualizada com sucesso'
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }

    static async deleteClass(req: Request, res: Response) {
        try {
            const IdClass = Number(req.params.id)

            const repo = Connection.getRepository(Class)

            const classe = repo.findOne({ where: { IdClass: IdClass } })

            if (!classe) {
                return res.status(404).json({
                    status: false,
                    msg: 'A classe não foi encontrada'
                })
            }

            await repo.delete({ IdClass: IdClass })

            return res.status(200).json({
                status: true,
                msg: 'a classe foi deletada com sucesso'
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: "ERROR IN BANK CONNECTION"
            })
        }
    }
}
