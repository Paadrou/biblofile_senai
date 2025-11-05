import express from "express"
import { db } from "../config/db.js";

export const postRouter = express()

postRouter.get("/post", async (req, res)=>{
    try {
        const[results] = await db.query("SELECT post.titulo, post.autor, post.genero, post.paginas, post.nota, post.tempo, post.resenha, post.id_user, (SELECT count(*) FROM recomendar WHERE post.id_post =  recomendar.id_post) AS likes, (SELECT count(*) FROM `comment` WHERE post.id_post =  comment.id_post) AS resenhas FROM post")
        res.send(results)
    } catch (error) {
            console.log(error);
    }
})

postRouter.post("/post", async (req, res)=>{
        try {
            const {body} = req
            const [results] = await db.query("INSERT INTO post (titulo, autor, genero, paginas, nota, tempo, resenha, id_user) VALUES (?,?,?,?,?,?,?,?)", [body.titulo, body.autor, body.genero, body.paginas, body.nota, body.tempo, body.resenha, body.id_user])
            res.send("Livro cadastrado com sucesso")
        } catch (error) {
            console.log(error);
            
        }
})
