import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';
import Gastos from './gastoModel'; // Importe o modelo Gastos

const Users = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

// Define o relacionamento
Users.hasMany(Gastos, { foreignKey: 'id_user', as: 'gastos' });

export default Users;