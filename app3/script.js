// 3.1 Mapa que asocia el número del mes a su nombre. Ej: 1 => Enero
let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);

const resultado = document.getElementById("resultado");

function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
}

function mapATexto(map) {
  let texto = "";
  for (const [clave, valor] of map) {
    texto += `${clave} => ${Array.isArray(valor) ? "[" + valor.join(", ") + "]" : valor}\n`;
  }
  return texto.trim();
}

// 3.2 Botón que comprueba si el mes número 5 existe en el map e imprime su valor
document.getElementById("btnComprobar").addEventListener("click", () => {
  if (meses.has(5)) {
    mostrarMensaje(`El mes número 5 SÍ existe en el map.\nSu valor es: "${meses.get(5)}"`);
  } else {
    mostrarMensaje("El mes número 5 NO existe en el map.");
  }
});

// 3.3 Botón para añadir al mapa una clave con un array que almacene los meses de verano
document.getElementById("btnAgregarVerano").addEventListener("click", () => {
  const mesesVerano = ["Junio", "Julio", "Agosto"];
  meses.set("verano", mesesVerano);
  mostrarMensaje(`Se añadió la clave "verano" con el valor [${mesesVerano.join(", ")}].\n\nMap actual:\n${mapATexto(meses)}`);
});

// 3.4 Botón para imprimir el mapa en pantalla
document.getElementById("btnImprimir").addEventListener("click", () => {
  mostrarMensaje(`Map actual (${meses.size} entradas):\n${mapATexto(meses)}`);
});
