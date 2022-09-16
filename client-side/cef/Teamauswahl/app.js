function createTeams(teamdata){
    teamdata = JSON.parse(teamdata);

    for (let i = 0; i < teamdata.length; i++) {
        var $html = $(`
        <div class="team-teamcontent">
            <p class="team-contentinfo">${teamdata[i].frakname}</p>
            <div class="team-players">
                <p class="team-contentplayers">SPIELER: ${teamdata[i].frakuser}</p>
                <div class="imageContainer">
                <img class="teamicon" src="./img/${teamdata[i].frakname}.png" alt="" />
                </div>
                <button class="team-contentbutton" onclick="JoinFraktionById(${teamdata[i].frakid})">Team beitreten</button>
            </div>
        </div>
        `)
    $("#team-list").append($html)
    }
}

function JoinFraktionById(id)
{
    mp.trigger('JoinTeamById', id)
}