const express = require ("express");
const router = express.Router();
// importa controlador 'apiController.js' da pasta: 
// "../controllers/apiController"
const apiController = require("./../controllers/apiControllers");
// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);
module.exports = router;