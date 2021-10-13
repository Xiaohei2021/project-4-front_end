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

    createTeams()
    {
        const teamInfo = 
        {
            team:
            {
                name: teamName.value,
                leader: teamLeader.value,
                description: teamDescription.value  
            }
        }
    
 
    const configObject = 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(teamInfo)
        }
        // debugger

        fetch(this.source + `/teams`, configObject)
        .then(r=> r.json())
        // .then(data => console.log(data))
        .then(data => 
        {
            const team = new Team(data)
            team.addToDom()
        })
    }
    
}