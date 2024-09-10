import { Sequelize } from 'sequelize';
import Users from '../models/userModel';
import Gastos from '../models/gastoModel';
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
    logging: false, 
});


const defineModels = () => {

    Users.initialize(sequelize);
    Gastos.initialize(sequelize);

    Users.hasMany(Gastos, { foreignKey: 'id_user', as: 'gastos' });
    Gastos.belongsTo(Users, { foreignKey: 'id_user', as: 'usuario' });
};

defineModels();

export { sequelize, Users, Gastos };