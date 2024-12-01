const listaProdutos = [];

const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
  const filters = request.query;
  const result = await produtoBusiness.list(filters);

  if (Object.keys(filters).length === 0) {
    // Nenhum filtro foi fornecido, buscar todos os produtos
    const result = await produtoBusiness.listAll(); // Assumindo que listAll existe e não recebe parâmetros
  } else {
    // Há filtros, utilizar a função de listagem com filtros
    const result = await produtoBusiness.list(filters);
  }

  return result;
};

const produtoPorId = async (request, h) => {
  const idProduto = request.params.id;

  const produtoProcurado = listaProdutos.find(
    (produto) => produto.id == idProduto
  );
  if (produtoProcurado) {
    return h.response(produtoProcurado).code(200);
  }

  return h.response().code(404);
};

const createProduto = async (request, h) => {
  //save in memory

  const result = await produtoBusiness.save(request.payload);

  return h.response(result).code(201);
};

const deleteProduto = async (request, h) => {
  const idProduto = request.params.id;

  try {
    await produtoBusiness.delete(idProduto);
    return h.response().code(204); // No Content
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return h.response({ message: "Erro ao deletar produto" }).code(500);
  }
};

module.exports = { getProdutos, createProduto, produtoPorId, deleteProduto }; //
