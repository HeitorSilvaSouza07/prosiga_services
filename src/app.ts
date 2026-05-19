import dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { dbstatus } from './database/dataBase';
import router from './routes/admin';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());  // Permite requisições de outros domínios
app.use(express.json());  // Parseia JSON no body das requisições

// Conecta as rotas definidas em routes.ts
app.use('/api', router);

// Inicializa o banco e o servidor
dbstatus().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch((error: any) => {
    console.error('Erro ao conectar ao banco:', error);
});