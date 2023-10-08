import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cors = require('cors');


const conexao = await conectaNaDatabase();

// on e once é uma função do mongoose que testa a conexão com o servidor e nos retorna a mensagem no terminal. 

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

app.use(cors());

routes(app);



export default app;

