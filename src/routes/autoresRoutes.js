import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

// criamos todas as rotas do crud aqui, onde em cada rota será efetuada uma função

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;