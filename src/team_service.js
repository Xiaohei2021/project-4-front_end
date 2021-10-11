class TeamService
{
    constructor(source)
    {
        this.source = source;
    }

    getTeams()
    {
        fetch(this.source + `/teams` /*`${this.source}/teams`*/)
        .then(r => r.json())
        // .then(data => {debugger})
        .then(data => 
        {
            // console.log(data)
            // for(const team of data)
            // {
            data.forEach(team => 
            {
                // debugger
                const roster = new Team(team)
                // debugger
                roster.addToTeamSelection()
                
            })
        })
        .catch()
    }
}