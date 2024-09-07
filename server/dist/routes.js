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

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  router: () => router
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/controller/userController.ts
var import_bcryptjs = require("bcryptjs");

// src/models/userModel.ts
var import_sequelize2 = require("sequelize");

// src/connection/index.ts
var import_sequelize = require("sequelize");
var sequelize = new import_sequelize.Sequelize("financas", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

// src/models/userModel.ts
var Users = sequelize.define("usuarios", {
  id: {
    type: import_sequelize2.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: import_sequelize2.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: import_sequelize2.DataTypes.STRING,
    allowNull: false
  },
  password: {
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
});
var userModel_default = Users;

// src/controller/userController.ts
var UserController = class {
  async index(req, res) {
    try {
      const users = await userModel_default.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ error: "Nome, email, e senha \xE9 Obrigat\xF3rio" });
      }
      const userExists = await userModel_default.findOne({ where: { email } });
      if (userExists) {
        console.log("Usuario j\xE1 Existe!");
        return res.status(400).json({ error: "Este Usu\xE1rio j\xE1 existe" });
      }
      const has_password = await (0, import_bcryptjs.hash)(password, 8);
      const user = await userModel_default.create({
        //se não existir ele vai criar
        name,
        email,
        password: has_password
      });
      return res.status(201).json({ user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};

// src/controller/AuthController.ts
var import_bcryptjs2 = require("bcryptjs");
var import_jsonwebtoken = require("jsonwebtoken");
var AuthController = class {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Nome e  email \xE9 Obrigat\xF3rio" });
      }
      const user = await userModel_default.findOne({ where: { email } });
      if (!user) {
        return res.json({ error: "Usu\xE1rio n\xE3o existe!" });
      }
      const isValuePassword = await (0, import_bcryptjs2.compare)(password, user.password);
      if (!isValuePassword) {
        return res.json({ error: "Senha  Invalida" });
      }
      const secret = process.env.SECRET;
      const token = (0, import_jsonwebtoken.sign)({ id: user.id }, secret, { expiresIn: "1d" });
      const { id, email: userEmail } = user;
      return res.json({ user: { id, email: userEmail }, token });
    } catch (error) {
      console.error("Error during authentication:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};

// src/middlewares/auth.ts
var import_jsonwebtoken2 = require("jsonwebtoken");
function AuthMiddlewares(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Token not provider" });
  }
  const [, token] = authorization.split(" ");
  try {
    const secret = process.env.SECRET;
    const decoded = (0, import_jsonwebtoken2.verify)(token, secret);
    const { id } = decoded;
    req.userId = id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
}

// src/models/gastoModel.ts
var import_sequelize3 = require("sequelize");
var Gastos = sequelize.define("Gastos", {
  id: {
    type: import_sequelize3.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: import_sequelize3.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      // Nome da tabela de referencia
      key: "id"
      // Nome da coluna
    }
  },
  descricao: {
    type: import_sequelize3.DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: import_sequelize3.DataTypes.DOUBLE,
    allowNull: false
  },
  categoria: {
    type: import_sequelize3.DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: import_sequelize3.DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: import_sequelize3.DataTypes.DATE,
    allowNull: false,
    defaultValue: import_sequelize3.DataTypes.NOW
  },
  updatedAt: {
    type: import_sequelize3.DataTypes.DATE,
    allowNull: false,
    defaultValue: import_sequelize3.DataTypes.NOW
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

// src/routes.ts
var userController = new UserController();
var authController = new AuthController();
var gastosController = new GastosController();
var router = (0, import_express.Router)();
router.post("/create", userController.store);
router.get("/users", AuthMiddlewares, userController.index);
router.post("/auth", authController.authenticate);
router.post("/criarGasto", gastosController.CriarGasto);
router.get("/buscarGasto/:id_user", gastosController.BuscarGasto);
router.put("/atualizarGasto/:id", gastosController.AtualizarGasto);
router.delete("/deletarGasto/:id", gastosController.DeletarGasto);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
