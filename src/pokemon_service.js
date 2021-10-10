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
        .then(data => console.log(data))
        .catch()
    }
}