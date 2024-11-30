const listaProdutos = [];

const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
    
    const result = await produtoBusiness.list(request.query);

    return result;
}

const produtoPorId = async (request, h) => {

    const idProduto = request.params.id;
    
    const produtoProcurado = listaProdutos.find(produto => produto.id == idProduto);
    if(produtoProcurado) {
        return h.response(produtoProcurado).code(200);
    } 

    return h.response().code(404);
}

const createProduto = async (request, h) => {
    //save in memory
    
    const result = await produtoBusiness.save(request.payload);

    return h.response(result).code(201);
}

module.exports = {getProdutos, createProduto, produtoPorId};
