class Team
{
    constructor({name, leader, description, id, pokemons})
    {
        // debugger
        this.name = name;
        this.leader = leader;
        this.description = description;
        this.id = id;
        this.pokemons = pokemons;
    }

    teamSelection()
    {
        const selection = document.createElement("option");
        selection.value = this.id;
        selection.innertext = this.name;
        teamSelect.appendChild(selection);
    }

}