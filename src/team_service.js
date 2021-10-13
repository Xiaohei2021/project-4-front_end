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
            // debugger
            data.forEach(team => 
            {
            // for(const team of data)
            // {
                // debugger
                const roster = new Team(team)
                // debugger
                roster.addToTeamSelection()
                roster.showInDom()
                
            })
        })
        .catch()
    }


    
}