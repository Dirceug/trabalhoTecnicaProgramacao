const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Produto = database.sequelize.define(
  "Produto",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
      field: "cod_produto",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "nome",
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "descricao",
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "categoria",
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "marca",
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: "preco",
    },
    quantidadeEstoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "quantidadeEstoque",
    },
    codigoBarras: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "codigoBarras",
    },
    dimensoes: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    peso: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataCadastro: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "dataCadastro",
    },
  },
  {
    tableName: "produto",
    timestamps: false, //desabilita o createdAt e updatedAt do sequelize
  }
);

module.exports = { Produto };
