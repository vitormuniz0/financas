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

// src/controller/gastosController.ts
var gastosController_exports = {};
__export(gastosController_exports, {
  GastosController: () => GastosController
});
module.exports = __toCommonJS(gastosController_exports);

// src/models/gastoModel.ts
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

// src/controller/gastosController.ts
var GastosController = class {
  async CriarGasto(req, res) {
    try {
      const { descricao, valor, categoria, tipo, id_user } = req.body;
      if (!descricao || !valor || !categoria || !tipo || !id_user) {
        return res.status(400).json({ error: "Faltando informa\xE7\xF5es!" });
      }
      const gasto = await gastoModel_default.create({
        id_user,
        descricao,
        valor,
        categoria,
        tipo
      });
      return res.status(201).json({ gasto });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async BuscarGasto(req, res) {
    try {
      const { id_user } = req.params;
      if (!id_user) {
        console.log("Id do user \xE9 obrig\xE1torio");
        res.status(400).json({ error: "Id do user \xE9 obrig\xE1torio" });
      }
      const query = { id_user };
      const gastos = await gastoModel_default.findAll({ where: query });
      if (gastos.length === 0) {
        console.log("Nenhum gasto existente");
        return res.status(404).json({ error: "Nenhum gasto existente" });
      } else {
        console.log("Gasto exibido!");
        return res.status(200).json(gastos);
      }
    } catch (error) {
      console.error("Erro ao buscar Gastos:", error);
      return res.status(500).json({ error: "Erro ao buscar Gastos" });
    }
  }
  async DeletarGasto(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "O id \xE9 obrigat\xF3rio!" });
      }
      const gasto = await gastoModel_default.findByPk(id);
      if (!gasto) {
        return res.status(400).json({ error: "Gasto n\xE3o encontrado!" });
      }
      await gastoModel_default.destroy({
        where: { id }
      });
      return res.status(200).json({ message: "Gasto deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar gasto:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async AtualizarGasto(req, res) {
    const { id } = req.params;
    const { descricao, valor, categoria, tipo, id_user } = req.body;
    if (!id) {
      return res.status(400).json({ error: "O id \xE9 obrigat\xF3rio!" });
    }
    const gasto = await gastoModel_default.findByPk(id);
    if (!descricao || !valor || !categoria || !tipo || !id_user) {
      return res.status(400).json({ error: "Faltando informa\xE7\xF5es!" });
    }
    if (!gasto) {
      return res.status(404).json({ error: "Gasto n\xE3o encontrado!" });
    }
    await gastoModel_default.update({
      descricao,
      valor,
      categoria,
      tipo
    }, {
      where: { id }
    });
    const gastoAtualizado = await gastoModel_default.findByPk(id);
    return res.status(200).json({ message: gastoAtualizado });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GastosController
});
