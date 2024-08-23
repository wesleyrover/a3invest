// associar as dependências instaladas
const express = require('express');
// inicializar app express
const app = express();
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