// 1.1 Array que almacena cinco animales
let animales = ["León", "Tigre", "Elefante", "Jirafa", "Delfín"];

const resultado = document.getElementById("resultado");

function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
}

// 1.2 Botón para añadir un elemento al inicio
document.getElementById("btnInicio").addEventListener("click", () => {
  const nuevoAnimal = prompt("Escribe el animal que quieres añadir al INICIO del array:");
  if (nuevoAnimal) {
    animales.unshift(nuevoAnimal);
    mostrarMensaje(`Se añadió "${nuevoAnimal}" al inicio.\nArray actual: [${animales.join(", ")}]`);
  }
});

// 1.3 Botón para añadir un elemento al final
document.getElementById("btnFinal").addEventListener("click", () => {
  const nuevoAnimal = prompt("Escribe el animal que quieres añadir al FINAL del array:");
  if (nuevoAnimal) {
    animales.push(nuevoAnimal);
    mostrarMensaje(`Se añadió "${nuevoAnimal}" al final.\nArray actual: [${animales.join(", ")}]`);
  }
});

// 1.4 Botón para eliminar el elemento en la tercera posición (índice 2)
document.getElementById("btnEliminar").addEventListener("click", () => {
  if (animales.length >= 3) {
    const eliminado = animales.splice(2, 1); // elimina 1 elemento en la posición índice 2
    mostrarMensaje(`Se eliminó el elemento en la 3ra posición: "${eliminado[0]}".\nArray actual: [${animales.join(", ")}]`);
  } else {
    mostrarMensaje("El array no tiene una tercera posición para eliminar.");
  }
});

// 1.5 Botón para imprimir el array en pantalla
document.getElementById("btnImprimir").addEventListener("click", () => {
  mostrarMensaje(`Array actual (${animales.length} elementos): [${animales.join(", ")}]`);
});
