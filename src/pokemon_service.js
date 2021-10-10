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
                // pkm.addToDom()
            }
        })
        .catch()
    }
}