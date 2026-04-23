import { User } from "../entities/User";
import { Request, Response } from "express";
import { Connection } from "../database/database";

export class UserControllers{
    static async get(req: Request, res: Response){
        try{
            const id = Number(req.params.id);

            const repo = Connection.getRepository(User);

            const user = await repo.findOneBy({IdUser: id});

            if(!user){
                return res.status(400).json({
                    status: FileSystemWritableFileStream,
                    msg: 'Usuario não existe'
                })
            }

            return res.status(200).json({
                status: true,
                data: user
            })

        }catch(error : any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async listUsers(req: Request, res: Response){
        try{
            const repo = Connection.getRepository(User);

            const users = await repo.find()

            return res.status(200).json({
                status: true,
                data: users
            })

        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async createUser(req: Request, res: Response){
        try{
            const {UserName, UserCpf, UserType} = req.body

            if(!UserName || !UserCpf || !UserType){
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const lengthCpf = UserCpf.length

            if (lengthCpf > 11 || lengthCpf < 11){
                return res.status(400).json({
                    status: false,
                    msg: 'Cpf deve conter 11 caracteres'
                })
            }

            const repo = Connection.getRepository(User);

            const newUser = repo.create({
                UserName: String(UserName),
                UserCpf: String(UserCpf),
                UserType: String(UserType)
            })

            await repo.save(newUser);

            return res.status(201).json({
                status: true,
                msg: 'Usuario criado com sucesso'
            })


        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async deleteUser(req: Request, res: Response){
        try{
            const id = Number(req.params.id)

            const repo = Connection.getRepository(User);

            const userExisting = await repo.findOneBy({IdUser: id})

            if(!userExisting){
                return res.status(400).json({
                    status: false,
                    msg: 'Usuario não existe'
                })
            }

            await repo.delete({IdUser: id})

            return res.status(200).json({
                status: true,
                msg: 'Usuario deletado com sucesso'
            })
            
        }catch(error: any){
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }
}