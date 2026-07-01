// 2.1 Set que almacena cinco libros
let libros = new Set([
  "Cien años de soledad",
  "El principito",
  "1984",
  "Don Quijote de la Mancha",
  "Rayuela"
]);

const resultado = document.getElementById("resultado");

function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
}

function setATexto(set) {
  return `{ ${Array.from(set).join(", ")} }`;
}

// 2.2 Botón para añadir elementos
document.getElementById("btnAgregar").addEventListener("click", () => {
  const nuevoLibro = prompt("Escribe el nombre del libro que quieres añadir al set:");
  if (nuevoLibro) {
    if (libros.has(nuevoLibro)) {
      mostrarMensaje(`"${nuevoLibro}" ya existe en el set (los Sets no permiten duplicados).\nSet actual: ${setATexto(libros)}`);
    } else {
      libros.add(nuevoLibro);
      mostrarMensaje(`Se añadió "${nuevoLibro}" al set.\nSet actual: ${setATexto(libros)}`);
    }
  }
});

// 2.3 Botón para eliminar un libro a elección
document.getElementById("btnEliminar").addEventListener("click", () => {
  const libroAEliminar = prompt(`Escribe el nombre exacto del libro a eliminar:\n\nLibros disponibles: ${Array.from(libros).join(", ")}`);
  if (libroAEliminar) {
    if (libros.has(libroAEliminar)) {
      libros.delete(libroAEliminar);
      mostrarMensaje(`Se eliminó "${libroAEliminar}" del set.\nSet actual: ${setATexto(libros)}`);
    } else {
      mostrarMensaje(`"${libroAEliminar}" no se encuentra en el set.\nSet actual: ${setATexto(libros)}`);
    }
  }
});

// 2.4 Botón para imprimir el set en pantalla
document.getElementById("btnImprimir").addEventListener("click", () => {
  mostrarMensaje(`Set actual (${libros.size} libros): ${setATexto(libros)}`);
});
