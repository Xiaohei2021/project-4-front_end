 class Pokemon
 {
     static all = [];
     static pokemon_box = document.getElementById("pokemons-cont")

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


        this.element = document.createElement('div')
        this.element.dataset['id'] = id;
        this.element.id = `pokemon-${id}`;
        this.element.addEventListener("click", this.handleClick)
        Pokemon.all.push(this)
        // debugger
    }

    render()
    {
        this.element.innerHTML = 
        `
        <div data-id="${this.id}">
            <h5 class="name">Pokemon Name: ${this.name}</h5>
            <h5 class="pokemon_type">Pokemon's Type: ${this.pokemon_type}</h5>
            <h5 class="moves">Pokemon's Moves: ${this.moves}</h5>
            <h5 class="abilities">Pokemon's Ability: ${this.abilities}</h5>
            <h5 class="national_pokedex_num">Pokedex National Dex Num#: ${this.national_pokedex_num}</h5>
            <h5 class="team_id">Team Id: ${this.team_id}</h5>
            <h5 class="team">Pokemon Team: ${this.team}</h5>
        </div>

        <button class = "edit" data-id=${this.id}>Swap Pokemon/Moves</button>
        <button class = "delete" data-id=${this.id}>Retire Pokemon</button>
        `
        return this.element
    }

    createEditForm()
    {
        const monInfo = this.element.querySelector("div");
        // debugger
        for (const element of monInfo.children)
        {
            let changingInfo = element.innerText;
            let name = element.classList[0];
            // let pokemon_type = element.classList[1];
            // let moves = element.classList[2];
            // let abilities = element.classList[3];
            // let national_pokedex_num = element.classList[4];

            // debugger

            element.outerHTML = `<input type="text" class="edit-${name}" value="${changingInfo}"/>`
            // element.outerHTML = `<input type="text" class="edit-${pokemon_type}" value="${changingInfo}"/>`
            // element.outerHTML = `<input type="text" class="edit-${moves}" value="${changingInfo}"/>`
            // element.outerHTML = `<input type="text" class="edit-${abilities}" value="${changingInfo}"/>`
            // element.outerHTML = `<input type="text" class="edit-${national_pokedex_num}" value="${changingInfo}"/>`
        }
        // debugger
    }

    changedMonInfo()
    {
        this.name = this.element.querySelector(".edit-name").value;
        this.pokemon_type = this.element.querySelector(".edit-pokemon_type").value;
        this.moves = this.element.querySelector(".edit-moves").value;
        this.abilities = this.element.querySelector(".edit-abilities").value;
        this.national_pokedex_num = this.element.querySelector(".edit-national_pokedex_num").value;
        // this.team_id = this.element.querySelector(".edit-team_id").value;
        // this.team = this.element.querySelector(".edit-team").value;
        // debugger
        pokemonCall.updateTeamRoster(this)
    }

    handleClick = (e) =>
    {
        if (e.target.innerText === "Swap Pokemon/Moves")
        {
            console.log(e.target)
            // debugger
            e.target.innerText = "Save Changes"
            this.createEditForm()
        }

        else if (e.target.innerText === "Save Changes")
        {
            console.log("working")
            e.target.innerText = "Swap Pokemon/Moves"
            // debugger
            this.changedMonInfo()
        }  

        else if (e.target.innerText === "Retire Pokemon")
        {
            console.log(e.target)
            pokemonCall.retireTeamMember(e)
        } 
    }

    addToDom()
    {
        // debugger
        Pokemon.pokemon_box.append(this.render())
    }


 }