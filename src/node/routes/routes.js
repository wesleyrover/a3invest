const express = require('express');
const router = express.Router();
//post Model
const operacao = require('../models/Operacao');
const mongoose = require('mongoose');
/**
* @swagger
* paths:
*   /operacao:
*     get:
*       tags:
*       - Opearacao
*       summary: Listar todos Opearacao
*       description: Listar todos Opearacao
*       operationId: getOpearacao
*       produces:
*       - application/json
*       - application/xml
*       responses:
*         '200':
*           description: sucess
*           schema:
*             $ref: '#definitions/operacao'
*         '500':
*           description: error
*/
router.get('/operacao', async (req, res) => {
    const query = req.query;
    try {
        const collection = await operacao.find(query);
        if (!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});
/**
* @swagger
* paths:
*   /operacao:
*     post:
*       tags:
*       - Operacao
*       summary: add new operacao
*       operationId: operacao
*       requestBody:
*         description: Created user object
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Operacao'
*       responses:
*         default:
*           description: successful operation
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Operacao'
*/
router.post('/operacao', async (req, res) => {
    const newServico = new operacao(req.body);
    try {
        // await newServico.createCollection().then(function (collection) { 
        //     console.log('Collection is created!'); 
        // });
        const collection = await newServico.save();
        if (!collection) throw Error('Something went wrong while saving the post');
        res.status(200).json(collection);
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: err });
    }
});
module.exports = router;