const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// PI Schema
const MovimentacaoSchema = new Schema({
    operacao: { type: String },
    data: { type: Date },
    ativo: { type: String },	
    cotas: { type: Number },	
    valorUnitário: { type: Number },
    taxas: { type: Number },
    valorOperacao: { type: Number },	
    valortotal: { type: Number }
});

const Movimentacao = mongoose.model('Movimentacao', MovimentacaoSchema);
// exportar Modelo_PI
module.exports = Movimentacao;
