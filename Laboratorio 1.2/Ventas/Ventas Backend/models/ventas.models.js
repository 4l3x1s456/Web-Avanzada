class Ventas {
    constructor(id, tipo, nombre, precio, fecha, hora, detalles, stock, creado_en) {
      this.id = id;
      this.tipo = tipo;
      this.nombre = nombre;
      this.precio = precio;
      this.fecha = fecha;
      this.hora = hora;
      this.detalles = detalles;
      this.stock = stock;
      this.creado_en = creado_en;
    }
  }
  
  module.exports = Ventas;
  