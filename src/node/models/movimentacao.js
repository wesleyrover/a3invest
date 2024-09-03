const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// PI Schema
const MovimentacaoSchema = new Schema({
    taxa: { type: mongoose.ObjectId},
    operacao: { type: String, enum: ['Compra', 'Venda', 'Dividendo'] },
    data: { type: Date },
    ativo: { type: String },	
    cotas: { type: Number },	
    valorUnitario: { type: Number },
    valorTotal: { type: Number }
});

const Movimentacao = mongoose.model('Movimentacao', MovimentacaoSchema);
// exportar Modelo_PI
module.exports = Movimentacao;
