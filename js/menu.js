function actualizarMenu() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const menu = document.getElementById("menuPrincipal");

  if (usuario) {
    menu.innerHTML = `
      <a href="index.html">Inicio</a> |
      <a href="busqueda.html">Búsqueda Básica</a> |
      <a href="busqueda-avanzada.html">Búsqueda Avanzada</a> |
      <a href="carrito.html">Carrito 🛒</a> |
      <span>👤 ${usuario.nombre}</span> |
      <a href="#" onclick="cerrarSesion()">Cerrar sesión</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="index.html">Inicio</a> |
      <a href="busqueda.html">Búsqueda Básica</a> |
      <a href="busqueda-avanzada.html">Búsqueda Avanzada</a> |
      <a href="registro.html">Registro / Iniciar sesión</a>
    `;
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuarioLogueado");
  alert("Sesión cerrada exitosamente.");
  location.href = "index.html";
}
