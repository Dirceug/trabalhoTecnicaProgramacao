const listaProdutos = [];
const produtoModel = require('./produto-model');

const save = async (produto) => {
    
    const saved = await produtoModel.Produto.create(produto);

    return produto;
}


const listAll = async(filters) => {
   
    return await produtoModel.Produto.findAll();
}

const deleteProduto = async (id) => {
    try {
        const produto = await produtoModel.Produto.findByPk(id);

        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        await produto.destroy();

        return { message: 'Produto deletado com sucesso' };
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        return { message: 'Erro ao deletar produto' };
    }
};

const list = async (filters) => {
    const where = {};
  
    if (filters.categoria) {
      where.categoria = filters.categoria;
    }
  
    if (filters.nome) {
      where.nome = { [Op.like]: `%${filters.nome}%` };
    }
  
    return await produtoModel.Produto.findAll({ where });
  };

module.exports = {save, list, listAll, deleteProduto };