// 4.1 Crear un Array (con algún elemento repetido para evidenciar la conversión a Set)
let arrayOriginal = ["Manzana", "Pera", "Uva", "Manzana", "Kiwi", "Pera"];

let miSet = null; // se llenará al transformar a Set
let miMap = null; // se llenará al transformar a Map

const resultado = document.getElementById("resultado");

function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
}

function mapATexto(map) {
  let texto = "";
  for (const [clave, valor] of map) {
    texto += `${clave} => ${valor}\n`;
  }
  return texto.trim();
}

// 4.2 Botón para transformarlo a un Set
document.getElementById("btnASet").addEventListener("click", () => {
  miSet = new Set(arrayOriginal);
  mostrarMensaje(
    `Array original: [${arrayOriginal.join(", ")}]\n\n` +
    `Convertido a Set (elimina duplicados):\n{ ${Array.from(miSet).join(", ")} }`
  );
});

// 4.3 Botón para transformarlo en un Map
document.getElementById("btnAMap").addEventListener("click", () => {
  if (!miSet) {
    // Si aún no se ha creado el Set, lo creamos primero a partir del array
    miSet = new Set(arrayOriginal);
  }
  // Se crea el Map usando como clave el índice y como valor cada elemento único del Set
  miMap = new Map(Array.from(miSet).map((valor, indice) => [indice, valor]));
  mostrarMensaje(
    `Set actual: { ${Array.from(miSet).join(", ")} }\n\n` +
    `Convertido a Map (índice => valor):\n${mapATexto(miMap)}`
  );
});

// 4.4 Botón para imprimir el Map
document.getElementById("btnImprimir").addEventListener("click", () => {
  if (!miMap) {
    mostrarMensaje("Todavía no se ha creado el Map. Primero transforma el array a Set y luego a Map.");
  } else {
    mostrarMensaje(`Map actual (${miMap.size} entradas):\n${mapATexto(miMap)}`);
  }
});
