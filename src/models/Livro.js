import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

// Aqui vamos criar um modelo para nosso banco de dados.

// mongoose.Schema é a forma que será criado o objeto no mongodb

// Required: true é porque é obrigatorio criar com um titulo ex

// autorSchema pega o model criado do autor.js e coloca nesse model de livros

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number},
    paginas: { type: Number},
    autor: autorSchema
}, { versionKey: false });


// Livros aqui é a coleção que criamos la no mongodb
// Colocamos livroSchema para referenciar as propriedades do livro que vamos criar na coleção livros.
const livro = mongoose.model("livros", livroSchema);

export default livro;