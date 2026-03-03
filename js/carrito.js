// Recuperar carrito del localStorage o inicializar vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(idProducto) {
  const usuario = localStorage.getItem("usuarioLogueado");
  const producto = productos.find(p => p.id === idProducto);

  if (!usuario) {
    // Guardar producto completo como pendiente
    const productoPendiente = { ...producto, cantidad: 1 };
    localStorage.setItem("productoPendiente", JSON.stringify(productoPendiente));
    localStorage.setItem("reagregarDesdeLogin", "true");

    alert("Debes iniciar sesión para agregar productos al carrito.");
    window.location.href = "registro.html";
    return;
  }

  // Ya logueado, agregar al carrito normalmente
  const existente = carrito.find(item => item.id === idProducto);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} fue agregado al carrito.`);
}

// Mostrar carrito en carrito.html
function mostrarCarrito() {
  // Asegurarse de actualizar la variable carrito desde localStorage
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const contenedor = document.getElementById("carrito");
  const totalSpan = document.getElementById("total");
  contenedor.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    totalSpan.textContent = "$0";
    return;
  }

  carrito.forEach(prod => {
    const subtotal = prod.precio * prod.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="producto-carrito">
        <img src="${prod.imagen}" alt="${prod.nombre}" />
        <div>
          <h3>${prod.nombre}</h3>
          <p>Cantidad: ${prod.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
          <button onclick="eliminarDelCarrito(${prod.id})">Eliminar</button>
        </div>
      </div>
    `;
  });

  totalSpan.textContent = `$${total}`;
}

function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter(p => p.id !== idProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
