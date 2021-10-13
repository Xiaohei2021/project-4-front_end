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
        this.element.dataset['id'] = id;
        this.element.id = `team-${id}`;
        this.element.addEventListener("click", this.handleClick)
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
        <div data-id="${this.id}">
            <h5 class="name">${this.name}</h5>
            <h5 class="team_leader">${this.leader}</h5>
            <h5 class="description">${this.description}</h5>
            <h5 class="id">${this.id}</h5>
            <h5 class="pokemons">${this.pokemons}</h5>
        </div>
        <button class = "edit" data-id=${this.id}>Edit Team info</button>
        <button class = "delete" data-id=${this.id}>Disband Team</button>
        `
        return this.element;
    }

    enableEditForm()
    {
        const teamInfo = this.element.querySelector("div");
        debugger
        for (const element of teamInfo.children)
        {
            let changingInfo = element.innerText;
            let name = element.classList[0];
            // debugger

            element.outerHTML = `<input type="text" class="edit-${name}" value="${changingInfo}"/>`
        }
        // debugger
    }

    showInDom()
    {
        Team.team_box.append(this.render())
    }

}