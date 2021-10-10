const source = `http://localhost:3000`;
const pokemonCall = new PokemonService(source);
const pokemonForm = document.getElementById("pokemon-builder")
const teamSelect = document.getElementById("team-dropdown")


pokemonCall.getPokemons()

pokemonForm.addEventListener("submit", handlesubmit)

