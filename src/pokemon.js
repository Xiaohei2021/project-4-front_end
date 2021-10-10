 class Pokemon
 {
     static all = [];
     static cont = document.getElementById("pokemons-cont")

    constructor({id, name, pokemon_type, moves, abilities, national_pokedex_num, team_id, team})
    {
        this.id = id
        this.name = name
        this.pokemon_type = pokemon_type
        this.moves = moves
        this.abilities = abilities
        this.national_pokedex_num = national_pokedex_num 
        this.team_id = team_id
        this.team = team
        this.element = document.createElement('li')
        this.element.dataset['id'] = id;
        this.element.id = `pokemon-${id}`;
        Pokemon.all.push(this)
        // debugger
    }

    render()
    {
        this.element.innerHTML = 
        `
        <div data-id="${this.id}">
        <h3>Pokemon Name: ${this.name}</h3>
        <h3>${this.pokemon_type}</h3>
        <h3>${this.moves}</h3>
        <h3>${this.abilities}</h3>
        <h3>${this.national_pokedex_num}</h3>
        <h3>${this.team_id}</h3>
        <h3>${this.team}</h3>
        </div>
        `
        return this.element

    }

    addToDom()
    {
        // debugger
        Pokemon.cont.append(this.render())
    }


 }