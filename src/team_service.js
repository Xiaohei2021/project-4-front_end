class TeamService
{
    constructor(source)
    {
        this.source = source;
    }

    getTeams()
    {
        fetch(`${this.source}/teams`)
        .then(r => r.json())
        .then(data => 
        {
            // console.log(data)
            for(const team of data)
            {
                let roster = new Team(team)
                debugger

                // roster.addToDom()
            }
        })
        .catch()
    }
}