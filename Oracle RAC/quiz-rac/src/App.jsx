import { useState } from "react";
import "./App.css";

const preguntas = [
  {
    pregunta: "¿Qué ocurre si la red interconectada (Interconnect) entre los nodos de un clúster Oracle RAC falla?",
    opciones: [
      "A) Los nodos dejan de responder y el clúster se apaga.",
      "B) Los nodos intentan reconectarse automáticamente, pero las sesiones activas se pierden.",
      "C) El Global Resource Directory (GRD) se sincroniza automáticamente en discos compartidos para evitar problemas de consistencia.",
      "D) El clúster sigue funcionando, pero con una latencia significativamente alta.",
    ],
    correcta: 2,
  },
  {
    pregunta: "En un entorno Oracle RAC, ¿cuál es el propósito del Global Cache Management (GCM)?",
    opciones: [
      "A) Coordinar el acceso concurrente a bloques de datos entre los nodos del clúster.Almacenar los datos",
      "B) Proveer una copia de seguridad automática de la base de datos compartida.",
      "C) Optimizar la transferencia de datos entre los clientes y el clúster.",
      "D) Gestionar la escalabilidad horizontal del sistema operativo.",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Qué componente gestiona el almacenamiento en RAC?",
    opciones: [
      "ASM",
      "GES",
      "Global Cache",
      "Clusterware",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Qué pasa si un nodo falla en Oracle RAC?",
    opciones: [
      "La base de datos se detiene",
      "Las transacciones se pierden",
      "Otros nodos asumen la carga",
      "Los datos se eliminan",
    ],
    correcta: 2,
  },
  {
    pregunta: "En un sistema Oracle RAC, ¿qué beneficio proporciona ASM (Automatic Storage Management) en comparación con otros métodos de almacenamiento?",
    opciones: [
      "A) Evita la necesidad de red interconectada.",
      "B) Optimiza el rendimiento del clúster al realizar balanceo de carga dinámico en los discos.",
      "C) Elimina por completo la posibilidad de fallos de almacenamiento.",
      "D) Reduce la necesidad de nodos adicionales en el clúster.",
    ],
    correcta: 1,
  },
];

function App() {
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);

  const manejarRespuesta = (indiceOpcion) => {
    const esCorrecta = indiceOpcion === preguntas[indicePregunta].correcta;
    setRespuestaCorrecta(esCorrecta);
    setMostrarResultado(true);
  };

  const siguientePregunta = () => {
    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta(indicePregunta + 1);
      setMostrarResultado(false);
    } else {
      setMostrarResultado(false);
      alert("Muchas gracias por su atencion prestada, Doc Varela :)");
    }
  };

  return (
    <div className="App">
      <h1>Cuestionario Oracle RAC</h1>
      {mostrarResultado ? (
        <div>
          <h2>
            {respuestaCorrecta
              ? "¡La respuesta es correctaaaaa! 🎉"
              : "Boooh respuesta mala 😞"}
          </h2>
          <button onClick={siguientePregunta}>
            {indicePregunta < preguntas.length - 1
              ? "Siguiente Pregunta"
              : "Finalizar"}
          </button>
        </div>
      ) : (
        <div>
          <h2>{preguntas[indicePregunta].pregunta}</h2>
          <div className="opciones">
            {preguntas[indicePregunta].opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="opcion"
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
