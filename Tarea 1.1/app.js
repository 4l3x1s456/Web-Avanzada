// Simulación de productos disponibles (puede ser reemplazada por una API real)
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 25 },
    { id: 2, nombre: 'Pantalón', precio: 45 },
    { id: 3, nombre: 'Zapatos', precio: 60 },
    { id: 4, nombre: 'Sombrero', precio: 15 },
    { id: 5, nombre: 'Bufanda', precio: 10 },
    { id: 6, nombre: 'Guantes', precio: 12 }
  ];
  
  // Cargar productos de manera asincrónica
  async function cargarProductos() {
    try {
      // Simulamos una operación asincrónica, como una llamada a API
      const productosData = await new Promise((resolve) => {
        setTimeout(() => resolve(productos), 1500);
      });
  
      const contenedorProductos = document.getElementById('product-container');
      contenedorProductos.innerHTML = ''; // Limpiar la lista de productos
  
      productosData.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('product');
  
        productoElement.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
  
        contenedorProductos.appendChild(productoElement);
      });
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }
  
  // Agregar productos al carrito
  let carrito = [];
  
  function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
      carrito.push(producto);
      mostrarCarrito();
    }
  }
  
  // Eliminar productos del carrito
  function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto en el índice especificado
    mostrarCarrito();
  }
  
  // Mostrar productos en el carrito
  function mostrarCarrito() {
    const carritoElement = document.getElementById('cart-items');
    carritoElement.innerHTML = ''; // Limpiar el contenido del carrito
  
    if (carrito.length > 0) {
      carrito.forEach((producto, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <p>${producto.nombre} - $${producto.precio}</p>
          <button class="remove-btn" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoElement.appendChild(itemElement);
      });
    } else {
      carritoElement.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
  }
  
  // Función de pago (simulada)
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }
  
    alert('¡Gracias por tu compra!');
    carrito = []; // Limpiar carrito después del pago
    mostrarCarrito();
  });
  
  // Cargar productos al inicio
  cargarProductos();
  