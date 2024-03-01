const express = require("express")
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root" ,
    password: "vitormuniz",
    database: "financas",
})

app.get('/', (req,res) =>{
    db.query("INSERT INTO usuarios (nome , usuario , senha) VALUES ('vitor' , 'vitormuniz' , ')")
})

app.use(express.json());


// app.post("/cadastro", (req,res) =>{
//     const nome = req.body.nome;
//     const usuario = req.body.usuario;
//     const senha = req.body.senha;

//     db.query("SELECT * FROM usuarios WHERE usuario = ?" , [usuario], 
//     (err,result) => {
//         if(err){
//             res.send(err);
//         }
//         if(result.length == 0){
//             db.query("INSERT INTO usuarios (nome, usuario, senha) VALUES (? , ?, ?)", [nome , usuario, senha], (err,result) =>{
//                 if(err){
//                     res.send(err)
//                 }
//                 res.send({msg: "Cadastrado com sucesso"})
//             })
//         }
//     })
// })

app.listen(3001, () =>{
    console.log("Rodando na porta 3001")
});