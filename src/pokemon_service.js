class PokemonService
{
    constructor(source)
    {
        this.source = source;
    }

    getPokemons()
    {
        fetch(this.source + `/pokemons`)
        .then(r => r.json())
        .then(data => 
        {
            // console.log(data)
            for(const pokemon of data)
            {
                // debugger
                let pkm = new Pokemon(pokemon)
                pkm.addToDom()
            }
        })
        .catch()
    }

    createPokemons()
    {
        const pokemonInfo = 
        {
            pokemon:
            {
                name:, 
                pokemon_type:, 
                moves:, 
                abilities:, 
                national_pokedex_num:, 
            }
        }
        // debugger
        fetch(this.source + `/pokemons`)
        .then(r=> r.json())
        .then(data => console.log(data))
    }
}