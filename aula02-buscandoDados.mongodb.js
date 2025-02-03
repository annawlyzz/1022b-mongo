//Como criar um banco de dados no mongodb?
use('dbtigrinho')

//tabelas  -> Collections ou coleções
// Depositos
// saques
// conta   "saldo"
// usuariop

//Como criar uma collection?
db.createCollection("conta")

//Como inserir dados na colection?
db.getCollection("conta").insertOne({
    saldo:100,
    usuariop:{
        nome:"Guilherme",
        sobrenome:"Terenciani",
        login:"guilhermeterenciani",
        senha:"1234",
        email:"guilherme.terenciani@ifms.edu.br"
    },
    depositos:[
        {data:"2024-02-01",valor:50},
        {data:"2024-10-02",valor:50},
        {data:"2024-10-01",valor:50}
    ],
    saques:[
        {data:"2024-10-02",valor:50}
    ]
})

//Crie mais uma conta no dbtigrinho.
//5min para fazer até 08:25
use("dbtigrinho")
db.getCollection("conta").insertOne({
    saldo:100,
    usuariop:{
        nome:"João",
        sobrenome:"Silva",
        login:"joaosilva",
        senha:"1234",
        email:"joao.silva@ifms.edu.br"
    },
    depositos:[
        {data:"2024-02-01",valor:50},
        {data:"2024-10-02",valor:50},
        {data:"2024-10-01",valor:50}
    ],
    saques:[
        {data:"2024-10-02",valor:50}
    ]
})


//Crie mais uma conta no dbtigrinho.
//Tem que ter pelo menos 4 depositos.
//Tem que ter pelo menos 2 saques.
//5min para fazer até 08:33
use("dbtigrinho")
db.getCollection("conta").insertOne({
    saldo:100,
    usuariop:{
        nome:"Maria",
        sobrenome:"Silva",
        login:"mariasilva",
        senha:"1234",
        email:"maria.silva@ifms.edu.br"
    },
    depositos:[
        {data:"2024-02-01",valor:50},
        {data:"2024-10-02",valor:50},
        {data:"2024-10-01",valor:50},
        {data:"2024-10-01",valor:50}
    ],
    saques:[
        {data:"2024-10-02",valor:50},
        {data:"2024-10-02",valor:50}
    ]
})

/**********  Apagando o banco inteiro.      *******/
//db.dropDatabase("dbtigrinho")

/**********  Apagando a collection inteira. *******/
//db.conta.drop()


/**********  Inserir 2 dados(Documents) de uma vez *******/

db.createCollection("professor")
db.professor.insertMany([
    {
        nome:"tere"
    },
    {
        nome:"Danilo"
    }
])

/**********  
 * Inserir 2 dados(Documents) 
 * de uma vez na tabela conta 
 * até 08:55
 * *******/


use("dbtigrinho")
db.conta.insertMany([
    {
        saldo:100,
        usuariop:{
            nome:"Maria",
            sobrenome:"Silva",
            login:"mariasilva",
            senha:"1234",
            email:"maria.silva@ifms.edu.br"
        },
        depositos:[
            {data:"2024-02-01",valor:50},
            {data:"2024-10-02",valor:50},
            {data:"2024-10-01",valor:50},
            {data:"2024-10-01",valor:50}
        ],
        saques:[
            {data:"2024-10-02",valor:50},
            {data:"2024-10-02",valor:50}
        ]
    },
    {
        saldo:100,
        usuariop:{
            nome:"Maria",
            sobrenome:"Silva",
            login:"mariasilva",
            senha:"1234",
            email:"maria.silva@ifms.edu.br"
        },
        depositos:[
            {data:"2024-02-01",valor:50},
            {data:"2024-10-02",valor:50},
            {data:"2024-10-01",valor:50},
            {data:"2024-10-01",valor:50}
        ],
        saques:[
            {data:"2024-10-02",valor:50},
            {data:"2024-10-02",valor:50}
        ]
    },
    {
        saldo:100,
        usuariop:{
            nome:"Maria",
            sobrenome:"Silva",
            login:"mariasilva",
            senha:"1234",
            email:"maria.silva@ifms.edu.br"
        },
        depositos:[
            {data:"2024-02-01",valor:50},
            {data:"2024-10-02",valor:50},
            {data:"2024-10-01",valor:50},
            {data:"2024-10-01",valor:50}
        ],
        saques:[
            {data:"2024-10-02",valor:50},
            {data:"2024-10-02",valor:50}
        ]
    }
])

//Para buscar os Documentos no banco de dados
//Dentro de uma collection
use("dbtigrinho")
db.conta.find()