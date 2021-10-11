 class Pokemon
 {
     static all = [];
     static cont = document.getElementById("pokemons-cont")

    constructor({id, name, pokemon_type, moves, abilities, national_pokedex_num,team_id, team})
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
        <h5>Pokemon Name: ${this.name}</h5>
        <h5>${this.pokemon_type}</h5>
        <h5>${this.moves}</h5>
        <h5>${this.abilities}</h5>
        <h5>${this.national_pokedex_num}</h5>
        <h5>${this.team_id}</h5>
        <h5>${this.team}</h5>
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