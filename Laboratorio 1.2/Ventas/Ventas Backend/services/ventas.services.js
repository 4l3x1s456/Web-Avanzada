const VentaRepository = require('../repositories/ventas.repository');

class VentaService {
  async obtenerTodas() {
    return await VentaRepository.obtenerTodas();
  }

  async crear(venta) {
    return await VentaRepository.crear(venta);
  }

  async obtenerPorId(id) {
    return await VentaRepository.obtenerPorId(id);
  }

  async actualizar(id, datos) {
    return await VentaRepository.actualizar(id, datos);
  }

  async eliminar(id) {
    return await VentaRepository.eliminar(id);
  }
}

module.exports = new VentaService();
