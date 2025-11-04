import express from "express"
import { db } from "../config/db.js";

export const userRouter = express()

userRouter.get("/user", async (req, res) => {
  const [results] = await db.query("SELECT * FROM user");
  res.send(results);
});

userRouter.get("/user/:id", async (req, res)=>{
    try {
        const { id } = req.params;
        const [results] = await db.query("SELECT user.nome, user.senha, user.email, user.idade, (SELECT COUNT(post.id_user),  FROM biblofile_db.post WHERE biblofile_db.post.id_user = user.id_user) AS qtd_livros, (SELECT AVG(post.nota), FROM biblofile_db.post WHERE biblofile_db.post.id_user = user.id_user) AS media FROM user  WHERE id_user=?", id)
        res.send(results)
    } catch (error) {
        console.log(error);
        
    }
})

userRouter.post("/user", async (req, res)=>{
    try {
        const {body} = req
        const [results] = await db.query("INSERT INTO user(nome,idade, email, senha) VALUES(?,?,?,?)", [
            body.nome, body.idade, body.email, body.senha
        ])

        const [usuarioCriado] = await db.query(
            "Select * from user WHERE id_user=?",
            results.insertId
          );

          return res.status(201).json(usuarioCriado);
    } catch (error) {
        console.log(error);
        
    }
})