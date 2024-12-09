const db = require('../config/db');

class VentaRepository {
  async obtenerTodas() {
    const [ventas] = await db.query('SELECT * FROM productos');
    return ventas;
  }

  async crear(venta) {
    const [resultado] = await db.query('INSERT INTO productos SET ?', venta);
    return resultado.insertId;
  }

  async obtenerPorId(id) {
    const [ventas] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    return ventas[0];
  }

  async actualizar(id, datos) {
    await db.query('UPDATE productos SET ? WHERE id = ?', [datos, id]);
  }

  async eliminar(id) {
    await db.query('DELETE FROM productos WHERE id = ?', [id]);
  }
}

module.exports = new VentaRepository();