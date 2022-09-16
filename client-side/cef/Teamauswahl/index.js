let team = null;

mp.events.add('CreateTeamBrowser', () => {
    if (!team)
    {
        team = mp.browsers.new('package://cef/Teamauswahl/index.html')
        setTimeout(() => {
            mp.gui.chat.activate(false);
            mp.gui.chat.show(false);
            mp.gui.cursor.show(true, true)
            mp.gui.cursor.visible = true;
        }, 500);
        mp.players.local.freezePosition(true)
    }
})

mp.events.add('DestroyTeamBrowser', () => {
    if (team)
    {
        team.destroy()
        team = null
        mp.gui.cursor.show(false, false);
        mp.gui.chat.activate(true);
        mp.gui.chat.show(true);
        mp.players.local.freezePosition(false);
    }
})

mp.events.add('JoinTeamById', (id) => {
    if (team)
    {
        mp.events.callRemote('Server:JoinTeamById', parseInt(id));
    }
})

mp.events.add("CreateTeamBrowserTeams", (teamdata) => {
    if (team)
    {
        team.execute(`createTeams('${teamdata}');`);
    }
});