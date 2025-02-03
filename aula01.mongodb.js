/* Cria um banco de dados se não existir
// ou usa um banco criado anteriormente se já existir.
use('ifms');

// Collection equivale a uma tabela no banco de dados MYSQL
// Código que cria uma Collection no mongoDB
db.createCollection("estudante");

db.getCollection('estudante').insertOne({
    nome:"Guilherme",
    idade: 29,
    cpf: "038.294.458-40",
    telefone: "67996561345"
});
-> PROFESSOR
nome
idade
email
endereco

-> Insira pelo menos 1 professor no banco*/