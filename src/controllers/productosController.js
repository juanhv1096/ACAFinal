const productos = require("../data/productos");

function obtenerProductos(req, res) {
  res.status(200).json(productos);
}

function obtenerProductosPorPrecio(req, res) {
  const productosFiltrados = productos.filter((producto) => producto.precio > 100000);
  res.status(200).json(productosFiltrados);
}

function calcularInventario(req, res) {
  const detalle = productos.map((producto) => ({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    stock: producto.stock,
    valor: producto.precio * producto.stock
  }));

  const total = detalle.reduce((acumulado, producto) => acumulado + producto.valor, 0);

  res.status(200).json({
    total,
    detalle
  });
}

function obtenerMayorStock(req, res) {
  const producto = productos.reduce((mayor, actual) =>
    actual.stock > mayor.stock ? actual : mayor
  );

  res.status(200).json(producto);
}

function obtenerTecnologia(req, res) {
  const resultado = productos.filter(
    (producto) => producto.categoria === "Tecnología"
  );

  res.status(200).json(resultado);
}

function buscarPorId(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      mensaje: "El ID debe ser un número entero."
    });
  }

  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({
      mensaje: "Producto no encontrado."
    });
  }

  res.status(200).json(producto);
}

function agruparPorCategoria(req, res) {
  const categorias = productos.reduce((resultado, producto) => {
    const categoria = producto.categoria;
    resultado[categoria] = (resultado[categoria] || 0) + 1;
    return resultado;
  }, {});

  res.status(200).json(categorias);
}

module.exports = {
  obtenerProductos,
  obtenerProductosPorPrecio,
  calcularInventario,
  obtenerMayorStock,
  obtenerTecnologia,
  buscarPorId,
  agruparPorCategoria
};
