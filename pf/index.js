// Función para crear una encuesta
const crearEncuesta = (titulo, opciones) => ({
  titulo,
  opciones: opciones.map(opcion => ({ nombre: opcion, votos: 0 }))
});

// Función para registrar un voto (crea un nuevo objeto sin modificar el original)
const votar = (encuesta, opcion) => ({
  ...encuesta,
  opciones: encuesta.opciones.map(o =>
    o.nombre === opcion ? { ...o, votos: o.votos + 1 } : o
  )
});

// Función para mostrar los resultados
const mostrarResultados = encuesta => {
  console.log(`📊 Resultados de: ${encuesta.titulo}`);
  encuesta.opciones.forEach(opcion => {
    console.log(`${opcion.nombre}: ${opcion.votos} votos`);
  });
};

// Prueba en consola
let encuesta = crearEncuesta("¿Cuál es tu framework favorito?", ["React", "Vue", "Angular"]);
encuesta = votar(encuesta, "React");
encuesta = votar(encuesta, "Vue");
mostrarResultados(encuesta);
