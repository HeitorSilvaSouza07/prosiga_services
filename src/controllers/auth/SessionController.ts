import { Request, Response } from "express";
import { Connection } from "../../database/dataBase";
import { User } from "../../entities/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class SessionController{

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