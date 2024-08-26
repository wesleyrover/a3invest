// associar as dependências instaladas
const express = require('express');
// inicializar app express
const app = express();
const mongoose = require('mongoose');
// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect('mongodb://root:MongoDB2019@localhost:27017');
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'test');
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});
// "END POINT INVÁLIDO!"
app.get("/", function (req, res) {
    res.send("END POINT INVÁLIDO!");
});
// todo o url começado por "/api" chama as rotas em "./routes/api"
const routes = require("./routes/api");
app.use("/api", routes);
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
let port = 5000;
// servidor á escuta no porto 5000
// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução no porto: ' + port);
});