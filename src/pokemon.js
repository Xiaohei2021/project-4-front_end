 class Pokemon
 {
     static all = [];

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


 }