import { User } from "../../entities/User";
import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserControllers {
    static async get(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const repo = Connection.getRepository(User);

            const user = await repo.findOneBy({ IdUser: id });

            if (!user) {
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não existe'
                })
            }

            return res.status(200).json({
                status: true,
                data: user
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async listUsers(req: Request, res: Response) {
        try {
            const repo = Connection.getRepository(User);

            const users = await repo.find()

            return res.status(200).json({
                status: true,
                data: users
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: error
            })
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const { UserName, UserCpf, UserType, UserPassword } = req.body

            if (!UserName || !UserCpf || !UserType || !UserPassword) {
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const lengthCpf = UserCpf.length

            if (lengthCpf > 11 || lengthCpf < 11) {
                return res.status(400).json({
                    status: false,
                    msg: 'Cpf deve conter 11 caracteres'
                })
            }

            const hashPassword = await bcrypt.hash(String(UserPassword), 10);

            const repo = Connection.getRepository(User);

            const newUser = repo.create({
                UserName: String(UserName),
                UserCpf: String(UserCpf),
                UserType: String(UserType),
                UserPassword: hashPassword
            })

            await repo.save(newUser);

            return res.status(201).json({
                status: true,
                msg: 'Usuario criado com sucesso'
            })


        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const repo = Connection.getRepository(User);

            const userExisting = await repo.findOneBy({ IdUser: id })

            if (!userExisting) {
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não existe'
                })
            }

            await repo.delete({ IdUser: id })

            return res.status(200).json({
                status: true,
                msg: 'Usuario deletado com sucesso'
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }

    static async loginUser(req: Request, res: Response) {
        try {
            const { UserCpf, UserPassword } = req.body

            if (!UserCpf || !UserPassword) {
                return res.status(400).json({
                    status: false,
                    msg: 'Preencha todos os campos'
                })
            }

            const repo = Connection.getRepository(User);
            const userExisting = await repo.findOneBy({ UserCpf: String(UserCpf) })

            if (!userExisting) {
                return res.status(404).json({
                    status: false,
                    msg: 'Usuario não existe'
                })
            }

            const passwordMatch = await bcrypt.compare(String(UserPassword), userExisting.UserPassword);

            if (!passwordMatch) {
                return res.status(401).json({
                    status: false,
                    msg: 'Senha incorreta'
                })
            }

            const token = jwt.sign({ id: userExisting?.IdUser }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' })

            return res.status(200).json({
                status: true,
                token: token,
                data: {
                    id: userExisting.IdUser,
                    name: userExisting.UserName,
                    cpf: userExisting.UserCpf,
                    type: userExisting.UserType
                }
            })

        } catch (error: any) {
            return res.status(500).json({
                status: false,
                msg: 'Erro interno no banco de dados'
            })
        }
    }
}