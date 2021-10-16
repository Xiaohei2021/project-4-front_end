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
                // debugger
                // pkm.
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
            // debugger
            const mon = new Pokemon(data)

            mon.addToDom();
            const team = Team.all.find(t => parseInt(t.id) === mon.team_id)
            // debugger
            if (team)
            {
                team.pokemons.push({id: mon.id, name: mon.name, pokemon_type: mon.pokemon_type, moves: mon.moves, abilities: mon.abilities, national_pokede_num: mon.national_pokedex_num}) 
                // debugger 
                team.showInDom();
                team.addToTeamSelection();
            }
        
            mon.addToDom(); /*adding newly created pokemon to the to pokemon-box div*/
          
    
        })
    }

    updateTeamRoster(pokemon)
    {
        const {name, pokemon_type, moves, abilities, national_pokedex_num, id} = pokemon;
        // debugger
        const pokemonData = 
        {
            name, 
            pokemon_type, 
            moves, 
            abilities, 
            national_pokedex_num
        }
        const configObject = 
        {
            method: "PATCH",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(pokemonData)
        }

        // debugger
        fetch(this.source + `/pokemons/${id}`, configObject)
        // .then(r=> r.json())
        // .then(data => 
        // {
        //     // const mon = new Pokemon(data)
        //     pokemon.render()
        // })
        //-----------------------------
        //or
        // .then(r=> {pokemon.render()})
        //-----------------------------
        //or
        // .then(()=> {pokemon.render()})
         //-----------------------------
        //or
        .then(pokemon.render())
    }

    retireTeamMember(e)
    {
        // debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.source + `/pokemons/${id}`, {method: "DELETE"})
        .then(r=> r.json())
        .then(data => alert(data.message))
    }
}