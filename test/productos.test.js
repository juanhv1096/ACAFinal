const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / responde correctamente", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.body.version, "1.0.0");
});

test("GET /api/productos devuelve los 8 productos", async () => {
  const response = await request(app).get("/api/productos");

  assert.equal(response.status, 200);
  assert.equal(response.body.length, 8);
});

test("GET /api/productos/precio-mayor-100000 filtra correctamente", async () => {
  const response = await request(app).get("/api/productos/precio-mayor-100000");

  assert.equal(response.status, 200);
  assert.equal(response.body.length, 8);
  assert.ok(response.body.every((producto) => producto.precio > 100000));
});

test("GET /api/productos/inventario calcula el total", async () => {
  const response = await request(app).get("/api/productos/inventario");

  assert.equal(response.status, 200);
  assert.equal(response.body.total, 59850000);
  assert.equal(response.body.detalle.length, 8);
});

test("GET /api/productos/mayor-stock encuentra el producto correcto", async () => {
  const response = await request(app).get("/api/productos/mayor-stock");

  assert.equal(response.status, 200);
  assert.equal(response.body.id, 2);
  assert.equal(response.body.stock, 25);
});

test("GET /api/productos/tecnologia devuelve cuatro productos", async () => {
  const response = await request(app).get("/api/productos/tecnologia");

  assert.equal(response.status, 200);
  assert.equal(response.body.length, 4);
  assert.ok(response.body.every((producto) => producto.categoria === "Tecnología"));
});

test("GET /api/productos/3 busca por ID", async () => {
  const response = await request(app).get("/api/productos/3");

  assert.equal(response.status, 200);
  assert.equal(response.body.nombre, "Teclado Mecánico");
});

test("GET /api/productos/999 devuelve 404", async () => {
  const response = await request(app).get("/api/productos/999");

  assert.equal(response.status, 404);
});

test("GET /api/productos/agrupados-categoria agrupa correctamente", async () => {
  const response = await request(app).get("/api/productos/agrupados-categoria");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    "Tecnología": 4,
    "Muebles": 2,
    "Audio": 2
  });
});
