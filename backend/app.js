import express from "express"
import cors from "cors"
import {userRouter} from "./src/router/userRouter.js"
import { postRouter } from "./src/router/postRouter.js"
const PORT = "3000"

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("ojeaogjae");
    
})

app.use(userRouter)
app.use(postRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
  });