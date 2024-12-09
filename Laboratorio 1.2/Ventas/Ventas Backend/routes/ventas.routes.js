const express = require('express');
const VentaController = require('../controllers/ventas.controller');
const router = express.Router();

router.get('/', VentaController.obtenerTodas);
router.post('/', VentaController.crear); // Debe existir esta ruta
router.get('/:id', VentaController.obtenerPorId);
router.put('/:id', VentaController.actualizar);
router.delete('/:id', VentaController.eliminar);

module.exports = router;
