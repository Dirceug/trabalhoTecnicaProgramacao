const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';

const routes = [
   
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.getProdutos,
            validate: produtoSchema.consultarProdutos
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos{id}`,
        options: {
            handler: produtoController.produtoPorId,
            validate: produtoSchema.consultaPorId
        }
    },
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: produtoSchema.createProduto
        }
    },
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deleteProduto,
            validate: produtoSchema.deleteProduto
        }
    },
    {
        method: 'GET',
        path: `${baseVersion}`,
        handler: (request, h) => {
            return '<!DOCTYPE html><html><body>' +
                '<a href="/v1/produtos">Produtos</a><br>' +
                '<a href="/v1/alunos">Alunos</a>' +
                '</body></html>';
        }
    }
];

module.exports = routes;