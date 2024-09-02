const express = require ("express");
const router = express.Router();
// importa controlador 'apiController.js' da pasta: 
// "../controllers/apiController"
const apiController = require("./../controllers/apiControllers");
// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);
// TODO: listar pontos de interesse da BD
router.get("/details",apiController.details);
// TODO: adicionar taxa
router.post("/taxa/create",apiController.taxaCreate);
router.put("/taxa/update/:id",apiController.taxaUpdate);
// TODO: adicionar Movimentacao
router.post('/movimentacao/create',apiController.movimentacaoCreate)
// TODO: atualizar ponto de interesse
router.put("/interest/:id",apiController.update);
// TODO: apagar ponto de interesse
router.delete("/interest/:id",apiController.delete);
module.exports = router;