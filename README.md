# 🏫 PROSIGA Services

API de serviços backend do sistema **PROSIGA** — Plataforma de Gerenciamento Escolar.  
Desenvolvida com **Node.js**, **TypeScript**, **Express** e **TypeORM** com banco de dados **SQL Server**.

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js + TypeScript 5 |
| Framework | Express 5 |
| ORM | TypeORM 0.3 |
| Banco de Dados | Microsoft SQL Server (mssql) |
| Autenticação | JWT (jsonwebtoken) + bcrypt |
| Testes | Jest |
| Linter | ESLint |

---

## 📁 Estrutura do Projeto

```
prosiga-services/
├── src/
│   ├── app.ts              # Ponto de entrada da aplicação
│   ├── controllers/        # Controladores das rotas
│   ├── models/             # Entidades TypeORM
│   ├── routes/             # Definição das rotas
│   ├── middlewares/        # Autenticação, validação e erros
│   └── services/           # Regras de negócio
├── package.json
├── tsconfig.json
└── .env
```

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 20+
- SQL Server (local ou remoto)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/HeitorSilvaSouza07/prosiga-services01.git
cd prosiga-services01

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

# Banco de dados SQL Server
DB_HOST=localhost
DB_PORT=1433
DB_USER=sa
DB_PASS=sua_senha
DB_NAME=prosiga_db

# Autenticação
JWT_SECRET=seu_secret_aqui
JWT_EXPIRES_IN=1d
```

### Rodando o projeto

```bash
# Desenvolvimento (ts-node)
npm run dev

# ou
npm run server
```

---

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Token)** com senhas criptografadas via **bcrypt**.  
Inclua o token no header das requisições protegidas:

```
Authorization: Bearer <token>
```

---

## 🧪 Testes

```bash
npm test
```

---

## 📄 Licença

Projeto privado — todos os direitos reservados.
