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

    addToTeamSelection()
    {
        const teamChoice = document.createElement("option");
        teamChoice.value = this.id;
        teamChoice.innerText = this.name;
        teamSelect.append(teamChoice);
    }

}