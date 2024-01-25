const express = require("express");
const router = express.Router();
const {getCEP} = require('../services/cep')

router.get('/meuCep', getCEP)


module.exports = router;