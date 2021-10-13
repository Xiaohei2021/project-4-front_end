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
        teamCall.updateTeam(this)
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