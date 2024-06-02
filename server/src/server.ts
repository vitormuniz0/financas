import { router } from "./routes"
require('dotenv').config();
import cors from "cors";
import connection from "./connection";


const express = require('express')

const app = express()
const PORT = 3334;

app.use(cors())
app.use(express.json())
app.use(router)

const startServer = async () => {
    try {
        // rodando servidor
        app.listen(PORT, () => {
            console.log(`Servidor Rodando em http://localhost:${PORT}`)
        })
        
        await connection.testConnection();

    } catch (error) {
        console.error('Falha ao iniciar o servidor devido a problemas com a conexão do banco de dados:', error);
        process.exit(1); // Opcional: encerrar o processo se a conexão falhar
    }
}

startServer();