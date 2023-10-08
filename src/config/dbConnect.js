import mongoose from "mongoose";

async function conectaNaDatabase() {
    // criamos uma variavel de ambiente no arquivo .env para nao enviar a senha de conexao para o github e adicionamos aqui abaixo essa string criada la
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};


// Adicionamos a senha que criamos após o admin: e acrescentamos o livraria após o .net/

export default conectaNaDatabase;