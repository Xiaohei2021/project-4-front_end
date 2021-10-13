let buildTeam = false;
let showTeam = false;
let showMons = false;

const source = `http://localhost:3000`;
const pokemonCall = new PokemonService(source);
const teamCall = new TeamService(source);

const buildBtn = document.getElementById("team-creator");
const showBtn1 = document.getElementById("show-teams")
const showBtn2 = document.getElementById("show-pokemons")

const formbBlock = document.getElementById("registration-block")
const teamBlock = document.getElementById("teams-cont")
const pokemonsBlock = document.getElementById("pokemons-cont")

const pokemonForm = document.getElementById("pokemon-builder");
const teamForm = document.getElementById("team-builder")
const teamSelect = document.getElementById("team-dropdown");


const monName = document.getElementById("pokemon-name");
const monType = document.getElementById("pokemon-type");
const monMoves = document.getElementById("pokemon-moves");
const monAbility = document.getElementById("pokemon-abilities");
const monDexNum = document.getElementById("pokemon-national_pokedex_num");

const teamName = document.getElementById("team-name")
const teamLeader = document.getElementById("team-leader")
const teamDescription = document.getElementById("team-description")


pokemonCall.getPokemons();
teamCall.getTeams();

pokemonForm.addEventListener("submit", handleSubmit1);
function handleSubmit1(e)
{
    e.preventDefault();
    // debugger
    pokemonCall.createPokemons();
}

teamForm.addEventListener("submit", handleSubmit2);
function handleSubmit2(e)
{
    e.preventDefault();
    teamCall.createTeams();
}


buildBtn.addEventListener("click", () =>
{
    buildTeam =! buildTeam;
    if (buildTeam)
    {
        formbBlock.style.display = "block";         
    }
    else
    {
        formbBlock.style.display = "none";
    }
})

showBtn1.addEventListener("click", () =>
{
    showTeam =! showTeam;
    if (showTeam)
    {
        teamBlock.style.display = "block";         
    }
    else
    {
        teamBlock.style.display = "none";
    }
})

showBtn2.addEventListener("click", () =>
{
    showMons =! showMons;
    if (showMons)
    {
        pokemonsBlock.style.display = "block";         
    }
    else
    {
        pokemonsBlock.style.display = "none";
    }
})