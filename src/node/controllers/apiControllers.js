const Taxa = require('../models/taxa');
const movimentacao = require('../models/movimentacao');
var bodyParser = require('body-parser');
const Movimentacao = require('../models/movimentacao');
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
        const a3invest = new Movimentacao(req.body);
        a3invest.valorTotal = (a3invest.cotas * a3invest.valorUnitario).toFixed(2);
        const taxaSoma = await Taxa.findById(a3invest.taxa);

        // Certifique-se de criar o índice apenas uma vez e fora da operação de agregação
        await Movimentacao.collection.createIndex({ taxa: "text" });

        // Usando uma abordagem de busca com índice de texto, em vez de $search
        const sumMov = await Movimentacao.aggregate([
            {
                $match: { taxa: a3invest.taxa } // Filtro para selecionar documentos com a taxa específica
            },
            {
                $group: {
                    _id: null,
                    valorTotal: { $sum: '$valorTotal' }
                }
            }
        ]).exec();
        let valorSum = 0.0; 
        if (sumMov.length !== 0) {
            valorSum = sumMov[0].valorTotal + a3invest.valorTotal;
            a3invest.taxas = ((a3invest.valorTotal / (sumMov[0].valorTotal + a3invest.valorTotal)) * taxaSoma.taxa);
        } else {
            valorSum = a3invest.valorTotal;
            a3invest.taxas = ((a3invest.valorTotal / (a3invest.valorTotal)) * taxaSoma.taxa);
        }

        const movUpdate = await Movimentacao.find({ taxa: a3invest.taxa })
      
        // Supondo que `stall` seja uma função assíncrona que retorna uma Promise
        await stall();

        // Salva a nova instância de Movimentacao no banco de dados
        const taxa = await a3invest.save();
        movUpdate.forEach(async (doc) => {
            doc.taxas = ((doc.valorTotal / valorSum) * taxaSoma.taxa);
            doc.save()
        });
        // Envia uma única resposta JSON
        res.status(201).json({
            msg: "Movimentacao criado com sucesso!",
            data: taxa
        });
    } catch (error) {
        // Passa o erro para o middleware de tratamento de erros
        next(error);
    }
};