# API REST de Productos

Proyecto realizado para la actividad de desarrollo de API REST con Node.js y Express.

## Descripción

La aplicación trabaja con un listado de productos y permite consultar la información mediante diferentes rutas. Las operaciones corresponden a los puntos solicitados en el ejercicio: filtrado por precio, cálculo del inventario, identificación del mayor stock, filtrado por categoría, búsqueda por ID y agrupación por categoría.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- npm
- Supertest para las pruebas de las rutas

## Requisitos

- Node.js 18 o una versión superior
- npm

## Instalación

Clonar el repositorio y entrar a la carpeta del proyecto:

```bash
git clone https://github.com/juanhv1096/ACAFinal.git
cd ACAFInal
```

Instalar las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor:

```bash
npm start
```

La aplicación utiliza el puerto 3000 de forma local. También acepta la variable de entorno `PORT`, por lo que puede ejecutarse en servicios de alojamiento que asignen otro puerto.

```text
http://localhost:3000
```

Durante el desarrollo se puede utilizar:

```bash
npm run dev
```

## Rutas disponibles

| Método | Ruta | Función |
|---|---|---|
| GET | `/` | Muestra información básica de la API |
| GET | `/api/productos` | Consulta todos los productos |
| GET | `/api/productos/precio-mayor-100000` | Filtra productos con precio superior a $100.000 |
| GET | `/api/productos/inventario` | Calcula el valor del inventario y muestra el detalle |
| GET | `/api/productos/mayor-stock` | Consulta el producto con mayor stock |
| GET | `/api/productos/tecnologia` | Consulta los productos de Tecnología |
| GET | `/api/productos/agrupados-categoria` | Cuenta los productos por categoría |
| GET | `/api/productos/:id` | Busca un producto por su ID |

## Ejemplos de consulta

### Todos los productos

```text
GET http://localhost:3000/api/productos
```

### Productos con precio superior a $100.000

```text
GET http://localhost:3000/api/productos/precio-mayor-100000
```

### Valor del inventario

```text
GET http://localhost:3000/api/productos/inventario
```

### Producto con mayor stock

```text
GET http://localhost:3000/api/productos/mayor-stock
```

### Productos de Tecnología

```text
GET http://localhost:3000/api/productos/tecnologia
```

### Buscar por ID

```text
GET http://localhost:3000/api/productos/3
```

### Productos agrupados por categoría

```text
GET http://localhost:3000/api/productos/agrupados-categoria
```

## Resultado esperado de las operaciones

Con los datos incluidos en el ejercicio se obtienen los siguientes resultados principales:

- Total de productos: 8
- Productos con precio superior a $100.000: 8
- Valor total del inventario: $59.850.000
- Producto con mayor stock: Mouse Logitech, con 25 unidades
- Productos de Tecnología: 4
- Productos de Muebles: 2
- Productos de Audio: 2

## Pruebas

El proyecto incluye pruebas para verificar las rutas principales:

```bash
npm test
```

Las pruebas comprueban la respuesta de la API, el número de productos, los filtros, el cálculo del inventario, la búsqueda por ID, el producto con mayor stock, la agrupación por categoría y el caso de producto inexistente.

## Estructura del proyecto

```text
ACAFinal/
├── src/
│   ├── controllers/
│   │   └── productosController.js
│   ├── data/
│   │   └── productos.js
│   ├── routes/
│   │   └── productosRoutes.js
│   ├── app.js
│   └── server.js
├── test/
│   └── productos.test.js
├── .gitignore
├── package.json
├── render.yaml
└── README.md
```

## Manejo de errores

Cuando se solicita un ID que no existe, la API responde con código HTTP `404`. Si el ID enviado no es un número entero, responde con código `400`. Las rutas que no existen responden con código `404`.

## Datos del ejercicio

Los productos utilizados son los establecidos para la actividad, conservando sus nombres, precios, cantidades disponibles y categorías.
