// Definir la clase Encuesta
class Encuesta {
  constructor(titulo, opciones) {
    this.titulo = titulo;
    this.opciones = opciones.map(opcion => ({ nombre: opcion, votos: 0 }));
  }

  votar(opcion) {
    const opcionEncontrada = this.opciones.find(o => o.nombre === opcion);
    if (opcionEncontrada) {
      opcionEncontrada.votos++;
      console.log(`✅ Voto registrado para: ${opcion}`);
    } else {
      console.log("❌ Opción no válida.");
    }
  }

  mostrarResultados() {
    console.log(`📊 Resultados de: ${this.titulo}`);
    this.opciones.forEach(opcion => {
      console.log(`${opcion.nombre}: ${opcion.votos} votos`);
    });
  }
}

// Gestor de encuestas
class GestorEncuestas {
  constructor() {
    this.encuestas = [];
  }

  crearEncuesta(titulo, opciones) {
    const nuevaEncuesta = new Encuesta(titulo, opciones);
    this.encuestas.push(nuevaEncuesta);
    return nuevaEncuesta;
  }

  listarEncuestas() {
    return this.encuestas.map((e, index) => `${index + 1}. ${e.titulo}`).join("\n");
  }
}

// Prueba en consola
const gestor = new GestorEncuestas();
const encuesta = gestor.crearEncuesta("¿Cuál es tu lenguaje favorito?", ["JavaScript", "Python", "Java"]);
encuesta.votar("JavaScript");
encuesta.votar("Python");
encuesta.mostrarResultados();
