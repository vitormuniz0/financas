import { Sequelize } from "sequelize"
import * as dotenv from 'dotenv';
dotenv.config(); // Carrega variáveis de ambiente do .env

export const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: parseInt(process.env.DB_PORT as string, 10),
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com Sucesso!.');
    } catch (error) {
        console.error('Conexão deu erro:', error);
        throw error;
    }
}

export default {testConnection};