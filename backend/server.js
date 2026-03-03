const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('../')); // Sirve archivos HTML/CSS/JS desde la carpeta raíz

// ==============================
// DATOS DE PRUEBA (20 productos del backup)
// ==============================
let productos = [
  { id:1, nombre:'Smartphone Galaxy A14', precio:750000, stock:10, imagen:'img/galaxy.jpg' },
  { id:2, nombre:'Laptop Lenovo IdeaPad', precio:2200000, stock:5, imagen:'img/laptop.jpg' },
  { id:3, nombre:'Audífonos Bluetooth Sony', precio:350000, stock:15, imagen:'img/audifonos.jpg' },
  { id:4, nombre:'Camisa Casual Hombre', precio:80000, stock:20, imagen:'img/camisa.jpg' },
  { id:5, nombre:'Jean Mujer Tiro Alto', precio:120000, stock:12, imagen:'img/jean.jpg' },
  { id:6, nombre:'Zapatos Deportivos Nike', precio:210000, stock:8, imagen:'img/zapatos.jpg' },
  { id:7, nombre:'Libro Cien Años de Soledad', precio:45000, stock:30, imagen:'img/cien_anos.jpg' },
  { id:8, nombre:'Libro El Principito', precio:35000, stock:25, imagen:'img/principito.jpg' },
  { id:9, nombre:'Tablet Samsung Galaxy Tab A8', precio:899000, stock:6, imagen:'img/tablet.jpg' },
  { id:10, nombre:'Smartwatch Xiaomi Mi Band 7', precio:200000, stock:14, imagen:'img/smartwatch.jpg' },
  { id:11, nombre:'Vestido Largo Mujer', precio:95000, stock:10, imagen:'img/vestido.jpg' },
  { id:12, nombre:'Chaqueta Impermeable Hombre', precio:180000, stock:7, imagen:'img/chaqueta.jpg' },
  { id:13, nombre:'Libro La Sombra del Viento', precio:47000, stock:20, imagen:'img/sombra_viento.jpg' },
  { id:14, nombre:'Batería Externa 10000mAh', precio:60000, stock:18, imagen:'img/powerbank.jpg' },
  { id:15, nombre:'Polo Deportivo Hombre', precio:40000, stock:16, imagen:'img/polo.jpg' },
  { id:16, nombre:'Libro El Poder del Ahora', precio:39000, stock:22, imagen:'img/poder_ahora.jpg' },
  { id:17, nombre:'Monitor LG 24" Full HD', precio:550000, stock:9, imagen:'img/monitor.jpg' },
  { id:18, nombre:'Teclado Gamer Retroiluminado', precio:110000, stock:13, imagen:'img/teclado.jpg' },
  { id:19, nombre:'Pantalón Jogger Hombre', precio:75000, stock:11, imagen:'img/jogger.jpg' },
  { id:20, nombre:'Libro Hábitos Atómicos', precio:43000, stock:28, imagen:'img/habitos.jpg' }
];

// ==============================
// ENDPOINTS
// ==============================

// Obtener todos los productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Obtener un producto por ID
app.get('/api/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
  res.json(producto);
});

// Finalizar compra y descontar stock
app.post('/api/comprar', (req, res) => {
  const carrito = req.body;

  if (!Array.isArray(carrito) || carrito.length === 0) {
    return res.status(400).json({ error: 'Carrito vacío o inválido' });
  }

  const erroresStock = [];

  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    if (!producto || producto.stock < item.cantidad) {
      erroresStock.push(`Producto ID ${item.id} sin stock suficiente (disponible: ${producto?.stock ?? 0})`);
    }
  });

  if (erroresStock.length > 0) {
    return res.status(400).json({ error: 'Stock insuficiente', detalles: erroresStock });
  }

  // Descontar stock
  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    producto.stock -= item.cantidad;
  });

  res.json({ mensaje: 'Compra realizada y stock actualizado con éxito.' });
});

// ==============================
// INICIAR SERVIDOR
// ==============================
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});