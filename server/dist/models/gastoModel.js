"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/gastoModel.ts
var gastoModel_exports = {};
__export(gastoModel_exports, {
  default: () => gastoModel_default
});
module.exports = __toCommonJS(gastoModel_exports);
var import_sequelize2 = require("sequelize");

// src/connection/index.ts
var import_sequelize = require("sequelize");
var sequelize = new import_sequelize.Sequelize("financas", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

// src/models/gastoModel.ts
var Gastos = sequelize.define("Gastos", {
  id: {
    type: import_sequelize2.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: import_sequelize2.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      // Nome da tabela de referencia
      key: "id"
      // Nome da coluna
    }
  },
  descricao: {
    type: import_sequelize2.DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: import_sequelize2.DataTypes.DOUBLE,
    allowNull: false
  },
  categoria: {
    type: import_sequelize2.DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: import_sequelize2.DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: import_sequelize2.DataTypes.DATE,
    allowNull: false,
    defaultValue: import_sequelize2.DataTypes.NOW
  },
  updatedAt: {
    type: import_sequelize2.DataTypes.DATE,
    allowNull: false,
    defaultValue: import_sequelize2.DataTypes.NOW
  }
}, {
  tableName: "gastos"
});
var gastoModel_default = Gastos;
