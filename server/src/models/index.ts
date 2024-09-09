import { Sequelize } from 'sequelize';
import Users from './userModel';
import Gastos from './gastoModel';
import * as dotenv from 'dotenv';

dotenv.config();

const {
    DB_URL,
  } = process.env;

  if (!DB_URL) {
    throw new Error('A variável de ambiente DB_URL não está definida.');
}

const sequelize = new Sequelize(DB_URL, {
    dialect: 'postgres',
    logging: false, // Desative os logs se não precisar deles
});

// Defina os modelos
const defineModels = () => {
    // Certifique-se de que os modelos são definidos
    Users;
    Gastos;

    // Definir associações
    Users.hasMany(Gastos, { foreignKey: 'id_user', as: 'gastos' });
    Gastos.belongsTo(Users, { foreignKey: 'id_user', as: 'usuario' });
};

defineModels();

export { sequelize, Users, Gastos }