let buildTeam = true;

const source = `http://localhost:3000`;
const pokemonCall = new PokemonService(source);
const teamCall = new TeamService(source);

const buildbtn = document.getElementById("team-creator");
const formbBlock = document.getElementById("registration-block")
const pokemonForm = document.getElementById("pokemon-builder");
const teamSelect = document.getElementById("team-dropdown");

const monName = document.getElementById("pokemon-name");
const monType = document.getElementById("pokemon-type");
const monMoves = document.getElementById("pokemon-moves");
const monAbility = document.getElementById("pokemon-abilities");
const monDexNum = document.getElementById("pokemon-national_pokedex_num");

pokemonCall.getPokemons();
teamCall.getTeams();

pokemonForm.addEventListener("submit", handleSubmit);

function handleSubmit(e)
{
    e.preventDefault();
    // debugger
    pokemonCall.createPokemons();
}

buildbtn.addEventListener("click", handleBuild);

function handleBuild(e)
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
}