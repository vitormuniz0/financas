import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginfinancas', 'root', 'vitormuniz', {
  host: 'localhost',
  dialect: 'mysql' // especificando o banco PostgreSQL
});

export default sequelize;