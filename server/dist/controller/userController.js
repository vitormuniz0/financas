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

// src/controller/userController.ts
var userController_exports = {};
__export(userController_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(userController_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
