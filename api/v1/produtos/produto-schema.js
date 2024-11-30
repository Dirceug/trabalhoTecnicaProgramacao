const Joi = require("joi");

const createProduto = {
  payload: Joi.object({
    nome: Joi.string().min(2).required(),
    descricao: Joi.string().min(2).required(),
    categoria: Joi.string().min(2).required(),
    marca: Joi.string().min(2).required(),
    preco: Joi.number().positive().required(),//.decimal()
    quantidadeEstoque: Joi.number().integer().positive().max(9999).required(),
    codigoBarras: Joi.string().min(8).required(),
    dimensoes: Joi.object({
      altura: Joi.number().positive().required(),
      largura: Joi.number().positive().required(),
      profundidade: Joi.number().positive().required(),
      unidadeMedida: Joi.string().required(),
    }).required(),
    peso: Joi.object({
      valor: Joi.number().positive().required(),
      unidadeMedida: Joi.string().required(),
    }).required(),
    status: Joi.string().min(2).required(),
  }),
};

const consultaPorId = {
  params: Joi.object({
    id: Joi.number().integer().positive().required(),
  }),
};

const consultarProdutos = {
  query: Joi.object({
    idade: Joi.number().integer().max(130),
    nome: Joi.string().min(3).max(100),
    status: Joi.string().valid("ATIVO", "INATIVO", "SUSPENSO").default("ATIVO"),
  }),
};

module.exports = { createProduto, consultaPorId, consultarProdutos };
