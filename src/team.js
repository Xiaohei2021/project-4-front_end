class Team
{
    static all = [];
    static team_box = document.getElementById("teams-cont")

    constructor({name, leader, description, id, pokemons})
    {
        // debugger
        this.name = name;
        this.leader = leader;
        this.description = description;
        this.id = id;
        this.pokemons = pokemons;
        
        this.element = document.createElement('div')
        Team.all.push(this)
        // debugger
    }

    addToTeamSelection()
    {
        const teamChoice = document.createElement("option");
        teamChoice.value = this.id;
        teamChoice.innerText = this.name;
        teamSelect.append(teamChoice);
    }

    render()
    {
        this.element.innerHTML = 
        `
            <h5 class="name">${this.name}</h5>
            <h5 class="team_leader">${this.leader}</h5>
            <h5 class="description">${this.description}</h5>
            <h5 class="id">${this.id}</h5>
            <h5 class="pokemons">${this.pokemons}</h5>
        `
        return this.element;
    }

    showInDom()
    {
        Team.team_box.append(this.render())
    }

}