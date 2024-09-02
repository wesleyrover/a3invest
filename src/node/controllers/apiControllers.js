const Taxa = require('../models/taxa');
const movimentacao = require('../models/movimentacao');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
exports.test = function (req, res) {
    res.send("Olá! Teste ao Controller");
};

// TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
    res.send({ type: "GET" });
};
// TODO: adicionar novo ponto de interesse
exports.add = function (req, res) {
    res.send({ type: "POST" });
};
// TODO: atualizar ponto de interesse
exports.update = function (req, res) {
    res.send({ type: "PUT" });
};
// TODO: apagar ponto de interesse
exports.delete = function (req, res) {
    res.send({ type: "DELETE" });
};

async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime))
}

exports.taxaCreate = async function (req, res, next) {
    console.log("You made a POST request:", req.body);
    try {
        const a3invest = new Taxa(req.body);

        // Supondo que `stall` seja uma função assíncrona que retorna uma Promise
        await stall();

        // Salva a nova instância de Taxa no banco de dados
        const taxa = await a3invest.save();

        // Envia uma única resposta JSON
        res.status(201).json({
            msg: "Taxa criado com sucesso!",
            data: taxa
        });
    } catch (error) {
        // Passa o erro para o middleware de tratamento de erros
        next(error);
    }
};

exports.taxaUpdate = async function (req, res, next) {
    console.log("You made a Put request:", req.body);
    try {
        const a3invest = new Taxa(req.body);

        // Supondo que `stall` seja uma função assíncrona que retorna uma Promise
        await stall();
        a3invest._id = req.params.id;
        console.log(a3invest.id);
        // Salva a nova instância de Taxa no banco de dados
        const taxa = await Taxa.findByIdAndUpdate({ _id: req.params.id }, a3invest)

        // Envia uma única resposta JSON
        res.status(201).json({
            msg: "Taxa criado com sucesso!",
            data: taxa
        });
    } catch (error) {
        // Passa o erro para o middleware de tratamento de erros
        next(error);
    }
};

exports.movimentacaoCreate = async function (req, res, next) {
    console.log("You made a POST request:", req.body);
    try {
        const a3invest = new movimentacao(req.body);

        // Supondo que `stall` seja uma função assíncrona que retorna uma Promise
        await stall();

        // Salva a nova instância de Taxa no banco de dados
        const taxa = await a3invest.save();

        // Envia uma única resposta JSON
        res.status(201).json({
            msg: "Taxa criado com sucesso!",
            data: taxa
        });
    } catch (error) {
        // Passa o erro para o middleware de tratamento de erros
        next(error);
    }
};