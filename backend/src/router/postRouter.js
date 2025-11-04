import express from "express"
import { db } from "../config/db.js";

export const postRouter = express()

postRouter.post("/post", async (req, res)=>{
        try {
            const {body} = req
            const [results] = await db.query("INSERT INTO post (titulo, autor, genero, paginas, nota, tempo, resenha, id_user) VALUES (?,?,?,?,?,?,?,?)", [body.titulo, body.autor, body.genero, body.paginas, body.nota, body.tempo, body.resenha, body.id_user])
            res.send("Livro cadastrado com sucesso")
        } catch (error) {
            console.log(error);
            
        }
})

postRouter.get("/post/:id", async (req, res)=>{
    try {
        const {id} = req.params
        const[results] = await db.query("SELECT * FROM post WHERE id_user = ?", id)
    } catch (error) {
            console.log(error);
            
    }
})