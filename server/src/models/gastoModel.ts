import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';
import Users from './userModel'; // Importe o modelo Users

const Gastos = sequelize.define('Gastos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Nome da tabela de referência
            key: 'id'  // Nome da coluna
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2), // Tipo alterado para DECIMAL
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
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
}, {
    tableName: "gastos"
});

// Define o relacionamento
Gastos.belongsTo(Users, { foreignKey: 'id_user', as: 'usuario' });

export default Gastos;