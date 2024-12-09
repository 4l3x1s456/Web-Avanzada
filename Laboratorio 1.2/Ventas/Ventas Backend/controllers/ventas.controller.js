const VentaService = require('../services/ventas.services');

class VentaController {
  async obtenerTodas(req, res) {
    const ventas = await VentaService.obtenerTodas();
    res.json(ventas);
  }

  async crear(req, res) {
    const nuevaVenta = req.body;
    const id = await VentaService.crear(nuevaVenta);
    res.status(201).json({ id, ...nuevaVenta });
  }

  async obtenerPorId(req, res) {
    const venta = await VentaService.obtenerPorId(req.params.id);
    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }
    res.json(venta);
  }

  async actualizar(req, res) {
    await VentaService.actualizar(req.params.id, req.body);
    res.json({ mensaje: 'Venta actualizada' });
  }

  async eliminar(req, res) {
    await VentaService.eliminar(req.params.id);
    res.json({ mensaje: 'Venta eliminada' });
  }
}

module.exports = new VentaController();