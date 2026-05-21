import { NextFunction, request, Response} from "express";
import { Connection } from "../database/dataBase";
import { User } from "../entities/User";

interface user {
    IdUser: number,
}

export class AdminAuth{
    static authAdmin(){
        return () => {
            try{

            }catch(error: any){

            }
        }
    }
}