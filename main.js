const peliculas = [
  {
    id: 1,
    genero: "Acción",
    titulo: "Misión Imposible: Sentencia mortal",
  },
  { id: 1, genero: "Acción", titulo: "Duro de Matar" },
  { id: 1, genero: "Acción", titulo: "John Wick" },
  { id: 1, genero: "Acción", titulo: "Mad Max: Furia en el camino" },
  { id: 1, genero: "Acción", titulo: "Los Vengadores" },

  { id: 2, genero: "Comedia", titulo: "Sin malos rollos" },
  { id: 2, genero: "Comedia", titulo: "Superbad" },
  { id: 2, genero: "Comedia", titulo: "La La Land" },
  { id: 2, genero: "Comedia", titulo: "Borat" },
  { id: 2, genero: "Comedia", titulo: "Loco y Estúpido Amor" },

  { id: 3, genero: "Drama", titulo: "Tar" },
  { id: 3, genero: "Drama", titulo: "El Padrino" },
  { id: 3, genero: "Drama", titulo: "Forrest Gump" },
  { id: 3, genero: "Drama", titulo: "Titanic" },
  { id: 3, genero: "Drama", titulo: "El club de la pelea" },

  { id: 4, genero: "Ciencia ficción", titulo: "Godzilla Minus One" },
  { id: 4, genero: "Ciencia ficción", titulo: "Blade Runner" },
  { id: 4, genero: "Ciencia ficción", titulo: "Matrix" },
  { id: 4, genero: "Ciencia ficción", titulo: "Interestelar" },
  { id: 4, genero: "Ciencia ficción", titulo: "El Quinto Elemento" },

  { id: 5, genero: "Animación", titulo: "Elemental" },
  { id: 5, genero: "Animación", titulo: "Toy Story" },
  { id: 5, genero: "Animación", titulo: "Shrek" },
  { id: 5, genero: "Animación", titulo: "Frozen" },
  { id: 5, genero: "Animación", titulo: "Mi Vecino Totoro" },
];

// Función para recomendar películas
function recomendarPelicula(generoPelicula) {
  // Buscar la película en el array utilizando el método find
  const pelicula = peliculas.find((pelicula) => pelicula.id === generoPelicula);
  // Devolver el título de la película o un mensaje de error
  if (pelicula) {
    return pelicula.titulo;
  } else {
    return "Lo siento, no puedo recomendar una película para ese tipo.";
  }
}

// Función para mostrar lista de películas por género
function mostrarListaPorGenero(generoPelicula) {
  // Filtrar películas por género utilizando el método filter
  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.id === generoPelicula
  );

  // Devolver un array con los títulos de las películas o un mensaje de error
  if (peliculasFiltradas.length > 0) {
    return peliculasFiltradas.map((pelicula) => pelicula.titulo);
  } else {
    return "Lo siento, no hay películas disponibles para ese género.";
  }
}

// Ciclo para permitir que el usuario interactúe
let deseaSalir = false;

while (!deseaSalir) {
  // Obtener la opción del usuario
  let opcion = Number(
    prompt(
      "¿Qué deseas hacer? \n\n 1 - Recomiendame una pelicula \n 2 - Mostrar lista de películas por género"
    )
  );

  switch (opcion) {
    case 1:
      // Obtener el tipo de película deseado del usuario
      let generoPeliculaRecomendacion = Number(
        prompt(
          "¿Qué tipo de película te gustaría ver? \n\n -Elija un numero: \n 1 - Acción \n 2 - Comedia \n 3 - Drama \n 4 - Ciencia ficción \n 5 - Animación \n"
        )
      );

      // Obtener la recomendación de película
      let recomendacion = recomendarPelicula(generoPeliculaRecomendacion);

      // Mostrar la recomendación al usuario
      alert("Te recomendaría ver: " + recomendacion);
      break;

    case 2:
      // Obtener el tipo de película deseado del usuario
      let generoPeliculaLista = Number(
        prompt(
          "¿De qué género te gustaría ver la lista de películas? \n\n -Elija un numero: \n 1 - Acción \n 2 - Comedia \n 3 - Drama \n 4 - Ciencia ficción \n 5 - Animación \n"
        )
      );

      // Obtener la lista de películas por género
      let listaPorGenero = mostrarListaPorGenero(generoPeliculaLista);

      // Mostrar la lista al usuario
      if (Array.isArray(listaPorGenero)) {
        alert("Lista de películas: \n" + listaPorGenero.join("\n"));
      } else {
        alert(listaPorGenero);
      }
      break;

    default:
      alert("Opción no válida");
      break;
  }

  // Preguntar al usuario si desea salir del programa
  deseaSalir = confirm("¿Quieres salir del programa?");
}
