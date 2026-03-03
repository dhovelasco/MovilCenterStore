function registrar() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value;

  if (!nombre || !correo || !clave) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Validar si el correo ya está registrado
  if (usuarios.find(u => u.correo === correo)) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios.push({ nombre, correo, clave });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
}

function iniciarSesion() {
  const correo = document.getElementById("correoLogin").value.trim().toLowerCase();
  const clave = document.getElementById("claveLogin").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuario = usuarios.find(u => u.correo === correo && u.clave === clave);

  if (!usuario) {
    alert("Correo o contraseña incorrectos.");
    return;
  }

  // Guardar nombre del usuario logueado
  localStorage.setItem("usuarioLogueado", usuario.nombre);
  localStorage.setItem("mensajeBienvenida", `¡Bienvenido, ${usuario.nombre}!`);

  // Reagregar producto pendiente si lo había
  const pendiente = JSON.parse(localStorage.getItem("productoPendiente"));
  const debeAgregar = localStorage.getItem("reagregarDesdeLogin");

  if (pendiente && debeAgregar === "true") {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existente = carrito.find(p => p.id === pendiente.id);

    if (existente) {
      existente.cantidad += pendiente.cantidad;
    } else {
      carrito.push(pendiente); // ya tiene { id, nombre, precio, imagen, cantidad }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Limpiar flags
    localStorage.removeItem("productoPendiente");
    localStorage.removeItem("reagregarDesdeLogin");
  }

  window.location.href = "index.html";
}
