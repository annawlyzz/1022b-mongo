use("test")

db.createCollection("aluno");

db.aluno.insertMany([
    {nome:"João", idade:15},
    {nome:"Maria", idade:18},
    {nome:"Pedro", idade:14},
    {nome:"Guilherme", idade:19}
])

use("test")
db.aluno.find({},{"_id":0})

//Buscando onde o nome é igual a Maria
use("test")
db.aluno.find({nome:"Maria"},{"_id":0})

//db.aluno.find({WHERE},{PROJEÇÃO})

//Buscar idades maiores que 15
use("test")
db.aluno.find({"idade":{$gt:15}})


//Buscar idades maiores que 15
//E que o nome seja "Guilherme"
use("test")
db.aluno.find({"idade":{$gt:15},nome:"Guilherme"})


//Buscar idades maiores que 15 e menores ou iguais a 19
//Ou que o nome seja "João"
use("test")
db.aluno.find(
    { 
        $or:
        [
            {"idade":{$gt:15,$lte:19}},
            {"nome":"João"}
        ]
    },
    {"_id":0}
)

//Mude a idade da Maria para 22 anos
use("test")
db.aluno.find()

use("test")
db.alunos.find({"idade":{$gt:18},cidade:"Naviraí"})