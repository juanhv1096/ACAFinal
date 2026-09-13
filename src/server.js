const express = require("express");
const productos = require("./data/productos");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "API de productos funcionando correctamente",
    version: "1.0.0",
    endpoints: {
      productos: "/api/productos",
      precioMayor: "/api/productos/precio-mayor-100000",
      inventario: "/api/productos/inventario",
      mayorStock: "/api/productos/mayor-stock",
      tecnologia: "/api/productos/tecnologia",
      buscarId: "/api/productos/:id",
      categorias: "/api/productos/agrupados-categoria"
    }
  });
});

app.get("/api/productos", (req, res) => {
  res.json({ total: productos.length, productos });
});

app.get("/api/productos/precio-mayor-100000", (req, res) => {
  const resultado = productos.filter((producto) => producto.precio > 100000);
  res.json({ total: resultado.length, productos: resultado });
});

app.get("/api/productos/inventario", (req, res) => {
  const detalle = productos.map((producto) => ({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    stock: producto.stock,
    valorInventario: producto.precio * producto.stock
  }));

  const valorTotal = detalle.reduce(
    (total, producto) => total + producto.valorInventario,
    0
  );

  res.json({ valorTotal, detalle });
});

app.get("/api/productos/mayor-stock", (req, res) => {
  const producto = productos.reduce((mayor, actual) =>
    actual.stock > mayor.stock ? actual : mayor
  );

  res.json(producto);
});

app.get("/api/productos/tecnologia", (req, res) => {
  const resultado = productos.filter(
    (producto) => producto.categoria === "Tecnología"
  );

  res.json({ total: resultado.length, productos: resultado });
});

app.get("/api/productos/agrupados-categoria", (req, res) => {
  const agrupados = productos.reduce((resultado, producto) => {
    const categoria = producto.categoria;
    resultado[categoria] = (resultado[categoria] || 0) + 1;
    return resultado;
  }, {});

  res.json(agrupados);
});

app.get("/api/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({
      error: "Producto no encontrado",
      id
    });
  }

  res.json(producto);
});

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
