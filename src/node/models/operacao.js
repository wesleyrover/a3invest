var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const Schema = mongoose.Schema;
/**
* @swagger
* components:
*   schemas:
*     Operacao:
*       type: object
*       properties:
*         operacao:
*           type: string
*         taxa:
*           type: string
*/
const OperacaoSchema = new mongoose.Document({}, new Schema({
    operacao: String,
    taxa: String,
    }));
    console.log(OperacaoSchema.validateSync());
    // const operacaoLocal = mongoose.model('Operacao', OperacaoSchema);
    // operacaoLocal.createCollection().then(function (collection) { 
    //     console.log('Collection is created!'); 
    // });
module.exports = OperacaoSchema;// mongoose.model('operacao', OperacaoSchema);