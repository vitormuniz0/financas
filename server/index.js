const express = require("express")
const app = express();
const mysql = require("mysql2");
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root" ,
    password: "vitormuniz",
    database: "financas",
})

db.getConnection((err , connection) =>{
    if(err){
        console.error("Conexão deu erro" , err)
    } else {
        console.log("Correto")
    }
})


app.use(express.json());
app.use(cors());




app.post("/cadastro", (req,res) =>{
    const nome = req.body.nome;
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    db.query("SELECT * FROM `usuarios` WHERE `usuario` = ?" , [usuario], 
    (err,response) => {
        if(err){
            res.send(err);
        }
        res.send(response)
        if(result.length == 0){
            db.query("INSERT INTO `usuarios` (`nome`, `usuario`, `senha`) VALUES (? , ?, ?)", [nome , usuario, senha], (err,res) =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({msg: "Cadastrado com sucesso"})
                } 
            })
        } else {
            console.log("Usuário cadastrado")
        }
    })
})

app.post("/login" , (req,res) =>{
    const usuario = req.body.usuario;
    const senha = req.body.usuario;

    db.query("SELECT * FROM  `usuarios` WHERE `usuario` = ? AND `senha` = ? " , [usuario,senha], (err , result) =>{
        if(err) {
            res.send(err)
        }
        if(result.length > 0){
            res.send("usuario logado")
        } else {
            res.send("Usuario não encontrado")
        }
    })
})

app.listen(3002, () => {
    console.log("Rodando na porta 3002")
});