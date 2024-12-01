# Web2024-2

## Descrição

Este é um projeto básico em Node.js utilizando o framework Hapi.js para gerenciamento de rotas e o Joi para validação de dados, construido na disciplina de Laboratório Web da Fatec Franca.

Apresenta estrutura base para desenvolvimento de apis.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório em sua máquina local:
   ```bash
   git clone git@github.com:fabiomedeirosf/lab-web-2024-2.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd web2024-2
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Scripts de Inicialização

- **Iniciar em Produção:**
  Para rodar o projeto no modo de produção, execute o comando:

  ```bash
  npm start
  ```

  Isso executará o arquivo `index.js` com o comando `node index.js`.

- **Modo de Desenvolvimento:**
  Para rodar o projeto com recarga automática no modo de desenvolvimento, use:

  ```bash
  npm run dev
  ```

  Este comando utiliza o flag `--watch` do Node.js para reiniciar automaticamente o servidor sempre que houver alterações no código.

- **Testes:**
- [ ] Implementar testes automatizados para endpoints principais

## Dependências Principais

- **@hapi/hapi**: Framework web para construir servidores e APIs.
- **joi**: Biblioteca para validação de dados no Node.js.

## Licença

Este projeto está sob a licença ISC.

## dotEnv
PORT=5005
HOST=0.0.0.0

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=Mari2Italo!

## Comando básico tabela aluno:

create table aluno (
cod_aluno SERIAL primary key,
nome VARCHAR (100) not null,
idade INTEGER
)

insert into aluno (nome, idade) VALUES ('João', 20);
insert into aluno (nome, idade) VALUES ('Maria', 25);

SELECT \* FROM aluno;

## Comando básico tabela produto:

create table produto (
	id SERIAL primary key,
	nome VARCHAR (100) not null,
	descricao varchar (100) not null,
	categoria varchar (50) not null,
	marca varchar (50) not null,
	preco numeric (10,2) not null,
	quantidadeEstoque int not null,
	codigoBarras varchar (50) not null,
	dimensoes JSONB not null,
	peso JSONB not null,
	status varchar (10),
	dataCadastro timestamp WITH TIME ZONE DEFAULT NOW()
)


INSERT INTO produto (
    nome, 
    descricao, 
    categoria, 
    marca, 
    preco, 
    quantidadeEstoque, 
    codigoBarras, 
    dimensoes, 
    peso, 
    status
) VALUES (
    "Televisor", 
    "50 polegadas LED",
    "Som e imagem",
    "Semp Toshiba",
    3999.90,  -- Preço
    100,      -- Quantidade em estoque
    "123456789101112",  -- Código de barras
    '{"altura": 80, "largura": 90, "comprimento": 20, "medida": "centímetros"}'::JSONB,
    '{"peso": 1500, "medida": "gramas"}'::JSONB,
    "ativo"
)

