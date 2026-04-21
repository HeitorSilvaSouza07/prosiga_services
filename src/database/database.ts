import { ConnectionCheckedInEvent, DataSource } from 'typeorm'
import { User } from '../entities/User'
import { Activitie } from '../entities/Activitie'
import { Class } from '../entities/Class'

export const Connection = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    entities: [User, Activitie, Class],
    synchronize: true,
}) 

export async function dbstatus(){
    try{
        const status = await Connection.initialize()
        if(status){
            console.log('Conectado ao banco de dados')
        }
    }catch(error: any){
        console.log(error)
    }
}


