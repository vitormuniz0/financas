import { DataTypes, Model, Sequelize } from 'sequelize';
import Users from './userModel';

class Gastos extends Model {
  public id!: number;
  public id_user!: number;
  public descricao!: string;
  public valor!: number;
  public categoria!: string;
  public tipo!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Gastos.init({
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
        type: DataTypes.DECIMAL(10, 2),
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
      sequelize,
      tableName: 'gastos',
      timestamps: true
    });
  }
}

export default Gastos;