function buscarBasica() {
  const texto = document.getElementById("buscarNombre").value.toLowerCase();

  const resultados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(texto)
  );

  mostrarCatalogo(resultados);
}

function buscarAvanzada() {
  const categoria = document.getElementById("categoria").value;
  const precioMax = parseFloat(document.getElementById("precioMax").value) || Infinity;

  const resultados = productos.filter(prod =>
    prod.categoria === categoria && prod.precio <= precioMax
  );

  mostrarCatalogo(resultados);
}

function mostrarCatalogo(lista) {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = ""; // Limpia el catálogo actual

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  lista.forEach(prod => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${prod.imagen}" alt="${prod.nombre}" onclick="verArticulo(${prod.id})" />
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      </div>
    `;
  });
}
