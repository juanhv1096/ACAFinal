# API REST de Productos

Proyecto académico desarrollado con Node.js y Express para exponer información de productos mediante una API REST.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución

Para iniciar el servidor:

```bash
npm start
```

El servidor quedará disponible en `http://localhost:3000`.

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Información general de la API |
| GET | `/api/productos` | Lista todos los productos |
| GET | `/api/productos/precio-mayor-100000` | Productos con precio superior a $100.000 |
| GET | `/api/productos/inventario` | Valor del inventario y detalle por producto |
| GET | `/api/productos/mayor-stock` | Producto con mayor cantidad disponible |
| GET | `/api/productos/tecnologia` | Productos de la categoría Tecnología |
| GET | `/api/productos/:id` | Busca un producto por ID |
| GET | `/api/productos/agrupados-categoria` | Cantidad de productos por categoría |

## Ejemplos

### Buscar por ID

```text
GET /api/productos/3
```

### Productos de Tecnología

```text
GET /api/productos/tecnologia
```

### Inventario

```text
GET /api/productos/inventario
```

## Datos utilizados

La API utiliza los productos definidos en el ejercicio académico suministrado para la actividad, conservando sus nombres, precios, stock y categorías.

## Estructura

```text
ACAFinal/
├── src/
│   ├── data/
│   │   └── productos.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

## Pruebas

Las rutas son de tipo GET, por lo que pueden probarse desde el navegador, Postman o cualquier cliente HTTP.

Para una prueba local, iniciar el servidor y consultar:

```text
http://localhost:3000/api/productos
```
