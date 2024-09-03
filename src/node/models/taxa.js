const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// PI Schema
const TAXASchema = new Schema({
  operacao: {
  type: String,
  required: [true, '*Campo obrigatório!']
  },
  taxa: {
  type: Number
  },
  status: {
  type: Boolean,
  default: true
  },
  corretora:{
    type: String
  }
});
// criar Modelo_PI baseado em PISchema: 'PontosInteresse'->nome da // coleção
const TAXA = mongoose.model('Taxa', TAXASchema);
// exportar Modelo_PI
module.exports = TAXA;