// URL de la PokeAPI que proporciona una lista de Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener los datos de los Pokémon
function fetchPokemonData() {
    // Realiza una solicitud AJAX GET a la URL de la PokeAPI
    $.get(apiUrl, function (data) {
        // Verifica si la respuesta contiene datos y tiene una propiedad 'results'
        if (data && data.results) {
            // Recorre la lista de Pokémon obtenida en la respuesta
            data.results.forEach(function (pokemon) {
                // Imprime el nombre y la URL del Pokémon en la consola
                console.log(`Pokémon: ${pokemon.name}, URL: ${pokemon.url}`);
            });
        } else {
            // Muestra un mensaje de error si no se encontraron datos en la respuesta
            console.error("No se encontraron datos de Pokémon.");
        }
    }).fail(function (error) {
        // Captura y muestra un error en caso de fallo en la solicitud
        console.error("Error al cargar los datos de la PokeAPI:", error);
    });
}

// Llama a la función para ejecutar la solicitud y obtener los datos
fetchPokemonData();
