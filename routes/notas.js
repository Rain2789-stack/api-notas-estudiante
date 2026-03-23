const express = require('express');
const router = express.Router();
const controller = require('../controllers/notasController');

router.get('/', controller.obtenerNotas);
router.post('/', controller.agregarNota);
router.delete('/:id', controller.eliminarNota);

module.exports = router;
