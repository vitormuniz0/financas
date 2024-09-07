import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('financas', 'root', '', {
    host: 'localhost',
    dialect: 'postgres'
})

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