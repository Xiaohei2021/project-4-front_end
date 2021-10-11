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
            // debugger
            pokemon:
            {
                name: monName.value, 
                pokemon_type: monType.value, 
                moves: monMoves.value, 
                abilities: monAbility.value, 
                national_pokedex_num: monDexNum.value,
                team_id: teamSelect.value 
            }
        } 
        // debugger

        const configObject = 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(pokemonInfo)
        }
        // debugger

        

        fetch(this.source + `/pokemons`, configObject)
        .then(r=> r.json())
        // .then(data => console.log(data))
        .then(data => 
        {
            const mon = new Pokemon(data)
            mon.addToDom()
        })
    }
}