# Sistema de Votación en JavaScript

Este proyecto es un sistema de votación que permite a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Se implementaron dos versiones con JavaScript: una basada en **Programación Orientada a Objetos (POO)** y otra en **Programación Funcional (PF)**.

## Estructura del Proyecto

sistema-votacion/ ├── poo/ # Implementación con POO │ ├── index.js │ ├── index.html ├── pf/ # Implementación con PF │ ├── index.js │ ├── index.html ├── README.md # Documentación del proyecto



## Objetivos del Proyecto

- Implementar conceptos clave de JavaScript.
- Manejar variables, constantes y operadores.
- Utilizar estructuras de control como condiciones y bucles.
- Trabajar con estructuras de datos como arrays y objetos.
- Aplicar funciones y programación modular.
- Comparar el uso de Programación Orientada a Objetos y Programación Funcional.
- Usar Git y GitHub como herramientas de control de versiones.

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
git clone https://github.com/alexancelovici/sistema-votacion.git



2. Abrir en el navegador:
- `poo/index.html` para la versión con POO.
- `pf/index.html` para la versión con PF.

3. Interactuar con la encuesta haciendo clic en los botones o ejecutando comandos en la consola del navegador.

## Explicación del Código

### Implementación con Programación Orientada a Objetos (POO)

En esta versión, la encuesta y su funcionalidad están organizadas en clases. Se crea una clase `Encuesta` que almacena el título, las opciones de respuesta y los votos. También se implementan métodos para registrar votos y mostrar los resultados.

```js
class Encuesta {
 constructor(titulo, opciones) {
     this.titulo = titulo;
     this.opciones = opciones.map(opcion => ({ nombre: opcion, votos: 0 }));
 }

 votar(opcion) {
     const opcionEncontrada = this.opciones.find(o => o.nombre === opcion);
     if (opcionEncontrada) {
         opcionEncontrada.votos++;
     }
 }

 mostrarResultados() {
     console.log(`Resultados de: ${this.titulo}`);
     this.opciones.forEach(opcion => {
         console.log(`${opcion.nombre}: ${opcion.votos} votos`);
     });
 }
}
Implementación con Programación Funcional (PF)
Aquí se utilizan funciones puras para manejar la lógica de votación sin modificar directamente los datos originales. Se definen funciones que permiten crear encuestas, registrar votos y mostrar los resultados.


const crearEncuesta = (titulo, opciones) => ({
    titulo,
    opciones: opciones.map(opcion => ({ nombre: opcion, votos: 0 }))
});

const votar = (encuesta, opcion) => ({
    ...encuesta,
    opciones: encuesta.opciones.map(o =>
        o.nombre === opcion ? { ...o, votos: o.votos + 1 } : o
    )
});

const mostrarResultados = encuesta => {
    console.log(`Resultados de: ${encuesta.titulo}`);
    encuesta.opciones.forEach(opcion => {
        console.log(`${opcion.nombre}: ${opcion.votos} votos`);
    });
};
Uso del Proyecto
Ejecutar en la Consola del Navegador

Programación Orientada a Objetos (POO)
const gestor = new GestorEncuestas();
const encuesta = gestor.crearEncuesta("¿Cuál es tu lenguaje favorito?", ["JavaScript", "Python", "Java"]);
encuesta.votar("JavaScript");
encuesta.mostrarResultados();

Programación Funcional (PF)
let encuesta = crearEncuesta("¿Cuál es tu framework favorito?", ["React", "Vue", "Angular"]);
encuesta = votar(encuesta, "React");
encuesta = votar(encuesta, "Vue");
mostrarResultados(encuesta);

Funcionalidades Implementadas
Creación de encuestas dinámicas.
Votación interactiva con botones en la interfaz gráfica.
Almacenamiento de datos utilizando localStorage.
Comparación entre Programación Orientada a Objetos y Programación Funcional.
