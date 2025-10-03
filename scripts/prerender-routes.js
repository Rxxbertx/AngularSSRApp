
const TOTAL_POKEMON = 151; // Total number of Pokémon to generate routes for
const TOTAL_PAGES = 5; // Total number of pages to generate routes for

(async()=>{



  const fs = require('fs')

  const pokemonIds = Array.from({length:TOTAL_POKEMON}, (_, i) => i + 1);
  const pageNumbers = Array.from({length: TOTAL_PAGES}, (_, i) => i + 1);

  let fileContent = pokemonIds.map(pokemonId => `pokemons/${pokemonId}`).join("\n");

  fileContent += "\n"; // Add a newline for separation

  fileContent += pageNumbers.map(pageNumber => `pokemons/page/${pageNumber}`).join("\n");


  const pokemonNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMON}`)
    .then(response => response.json())
    .then(data => data.results.map(pokemon => `pokemons/${pokemon.name}`));

  fileContent += "\n"; // Add a newline for separation

  fileContent += pokemonNames.join("\n");


  fs.writeFileSync('routes.txt',fileContent);

})()
