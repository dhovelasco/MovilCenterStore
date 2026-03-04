# Movil Center Store

Tienda virtual desarrollada como proyecto universitario para demostrar conocimientos en desarrollo web full-stack.

## Tecnologías
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js (`server.js`) con productos en memoria para demo
- **Base de datos original:** SQLite/MySQL (`movilcenter_backup.sql`) 

## Estructura de carpetas
MovilCenterStore/
├─ index.html  
├─ articulo.html  
├─ busqueda.html  
├─ busqueda-avanzada.html  
├─ carrito.html  
├─ detalle.html  
├─ login.html  
├─ registro.html  
├─ css/  
│   └─ estilos.css  
├─ js/  
│   ├─ autenticacion.js  
│   ├─ buscador.js  
│   ├─ carrito.js  
│   ├─ menu.js  
│   └─ productos.js  
├─ img/  
└─ backend/  
    ├─ server.js  
    └─ DB/  
        ├─ conexion.py  
        └─ movilcenter_backup.sql  

## Cómo ejecutar el proyecto (modo demo funcional sin MySQL)
1. Clona el repositorio.  
2. Instala Node.js si no lo tienes: [https://nodejs.org](https://nodejs.org)  
3. Abre CMD en la carpeta `backend`:
   ```bash
   cd "C:\Users\dahov\Desktop\MovilCenterStore\backend"
4. Ejecuta el servidor Node.js: node server.js
5. Abre index.html en Visual Studio Code y lanza Live Server.
6. Navega por la tienda: catálogo, carrito y compra funcionan con los 20 productos reales.

# Notas

- Todos los productos están cargados desde server.js en memoria para que funcione sin MySQL.
- Si quieres usar la base de datos original, puedes restaurar movilcenter_backup.sql y actualizar server.js para conectarse a MySQL.
- Proyecto de estudio universitario, no comercial.
- Demuestra habilidades en frontend, backend, manejo de API y persistencia de datos.
- Puede usarse como referencia para mostrar experiencia práctica en un portafolio profesional.
