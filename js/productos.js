let productos = [];

// Carga productos desde el backend
function cargarProductosDesdeBackend(callback) {
  fetch("http://localhost:3000/api/productos")
    .then(res => res.json())
    .then(data => {
      productos = data;
      if (typeof callback === 'function') callback();
    })
    .catch(error => {
      console.error("Error al obtener productos:", error);
    });
}

// Carga los productos en el catálogo
function cargarCatalogo() {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach(prod => {
    contenedor.innerHTML += `
      <div class="producto">
        <a href="detalle.html?id=${prod.id}">
          <img src="${prod.imagen}" alt="${prod.nombre}">
        </a>
        <h3>${prod.nombre}</h3>
        <p><strong>Marca:</strong> ${prod.marca || "Sin marca"}</p>
        <p><strong>Precio:</strong> $${prod.precio.toLocaleString()}</p>
      </div>
    `;
  });
}
