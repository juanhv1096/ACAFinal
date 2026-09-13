const express = require("express");
const {
  obtenerProductos,
  obtenerProductosPorPrecio,
  calcularInventario,
  obtenerMayorStock,
  obtenerTecnologia,
  buscarPorId,
  agruparPorCategoria
} = require("../controllers/productosController");

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/precio-mayor-100000", obtenerProductosPorPrecio);
router.get("/inventario", calcularInventario);
router.get("/mayor-stock", obtenerMayorStock);
router.get("/tecnologia", obtenerTecnologia);
router.get("/agrupados-categoria", agruparPorCategoria);
router.get("/:id", buscarPorId);

module.exports = router;
