import { Connection } from "../../database/dataBase";
import { Subject } from "../../entities/Subject";
import { Request, Response } from "express";


export class SubjectController{
    static async get(req: Request, res: Response){
        try{
            const id = Number(req.params.id);

            const repo = Connection.getRepository(Subject);

            const subject = await repo.findOneBy({ IdSub: id });

            if(!subject){
                return res.status(404).json({
                    status: false,
                    msg: 'Matéria não existe'
                })
            }

            return res.status(200).json({
                status: false,
                msg: 'Materia encontrada com sucesso'
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'ERROR IN BANK CONNECTION'
            })
        }
    }

    static async create(req: Request, res: Response){
        try{
            
            const { SubName } = req.body;

            if(!SubName){
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const name = SubName.trim;

            if(name <= 0){
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const repo = Connection.getRepository(Subject);

            const subExisting = await repo.findOneBy({SubName: name});

            if(subExisting){
                return res.status(404).json({
                    status: false,
                    msg: 'Já existe uma matéria com esse nome'
                })
            }

            const newSubject = repo.create({SubName: name});

            await repo.save(newSubject);

            return res.status(201).json({
                status: true,
                msg: 'Materia salva'
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro inteiro', 
                error: error.message
            })
        }
    }

    static async list(req: Request, res: Response){
        try{

            const repo = Connection.getRepository(Subject);

            const subjects = await repo.find();

            return res.status(200).json({
                status: true,
                msg: 'Matérias encontradas com sucesso',
                data: subjects
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno'
            })
        }
    }}