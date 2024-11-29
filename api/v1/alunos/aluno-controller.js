//const listaAlunos = [];
const alunoModel = require('./aluno-model'); 
const alunoBusiness = require("./aluno-business");

const getAlunos = async (request, h) => {
  const result = await alunoBusiness.list(request.query);

  return result;
};

const alunoPorId = async (request, h) => {
  const idAluno = request.params.id;

  try {
    const alunoProcurado = await alunoModel.Aluno.findByPk(idAluno);
    if (alunoProcurado) {
      return h.response(alunoProcurado).code(200);
    }
    return h.response().code(404);
  } catch (error) {
    console.error("Erro ao buscar aluno", error);
    return h.response("Erro interno do servidor").code(500);
  }
};

const createAluno = async (request, h) => {
  //save in memory

  const result = await alunoBusiness.save(request.payload);

  return h.response(result).code(201);
};


module.exports = { getAlunos, createAluno, alunoPorId };
