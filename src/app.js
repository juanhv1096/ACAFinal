const express = require("express");
const productosRoutes = require("./routes/productosRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "API de productos activa",
    version: "1.0.0",
    rutas: [
      "GET /api/productos",
      "GET /api/productos/precio-mayor-100000",
      "GET /api/productos/inventario",
      "GET /api/productos/mayor-stock",
      "GET /api/productos/tecnologia",
      "GET /api/productos/agrupados-categoria",
      "GET /api/productos/:id"
    ]
  });
});

app.use("/api/productos", productosRoutes);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "La ruta solicitada no existe."
  });
});

module.exports = app;
