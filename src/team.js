class Team
{
    static all = [];
    static team_box = document.getElementById("teams-cont")

    constructor({id, name, leader, description, pokemons})
    {
        // debugger
        this.id = id;
        this.name = name;
        this.leader = leader;
        this.description = description;
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
        // debugger
        this.element.innerHTML = 


        `
        <div data-id="${this.id}">
            <h5 class="name">Team Title: ${this.name}</h5>
            <h5 class="team_leader">Team Leader: ${this.leader}</h5>
            <h5 class="description">Team Description: ${this.description}</h5>
            <h3> ${this.name}'s Pokemons: </h3>
            <h5 class="pokemons"></h5>
        </div>
        <button class = "edit" data-id=${this.id}>Edit Team info</button>
        <button class = "delete" data-id=${this.id}>Disband Team</button>
        `
        let teamRoster =this.element.querySelector(".pokemons")
        this.showTeam(teamRoster)
        // debugger
        return this.element;
    }

    showTeam(teamRoster)
    {
        for (const element of this.pokemons)
        {
            let poke = document.createElement("div")
            poke.innerHTML = `
                <ul style="font-family:'Courier New'">
                    <li>
                        Pokemon's Name: ${element.name}
                    </li>
                    <li>
                        Pokemon's Type: ${element.pokemon_type}
                    </li>
                    <li>
                        Pokemon's Moves: ${element.moves}
                    </li>
                    <li>
                        Pokemon's Ability: ${element.abilities}
                    </li>
                    <li>
                        Pokedex National Dex Num#: ${element.national_pokedex_num}
                    </li>
                </ul>
            `
            teamRoster.append(poke);
        }


        // debugger
    }
    showEditForm()
    {
        const teamInfo = this.element.querySelector("div");
        // debugger
        for (const element of teamInfo.children)
        {
            let changingInfo = element.innerText;
            let name = element.classList[0];
            // debugger

            element.outerHTML = `<input type="text" class="edit-${name}" value="${changingInfo}"/>`
        }
        // debugger
    }

    changedTeamInfo()
    {
        this.name = this.element.querySelector(".edit-name").value;
        this.leader = this.element.querySelector(".edit-team_leader").value;
        this.description = this.element.querySelector(".edit-description").value;
        // debugger
        teamCall.updateTeamInfo(this)
    }


    handleClick = (e) =>
    {
        if (e.target.innerText === "Edit Team info")
        {
            console.log(e.target)
            // debugger
            e.target.innerText = "Save Changes"
            this.showEditForm()
        }

        else if (e.target.innerText === "Save Changes")
        {
            console.log("working")
            e.target.innerText = "Edit Team info"
            // debugger
            this.changedTeamInfo()
        }  

        else if (e.target.innerText === "Disband Team")
        {
            console.log(e.target)
            teamCall.disbandTeam(e)
        } 
    }


    showInDom()
    {
        Team.team_box.append(this.render())
    }

}