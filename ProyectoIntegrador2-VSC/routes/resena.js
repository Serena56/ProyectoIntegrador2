var express = require('express');
var router = express.Router();

//localhost:3000/resena
const controller = require('../controllers/resenaController');

//localhost:3000/resena/creaResena
router.post('/creaResena', controller.creaResena)

module.exports = router;