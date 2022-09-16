var paintball = null

mp.events.add('CreatePaintballBrowser', (data) => {
    paintball = mp.browsers.new('package://cef/Lobbys/index.html')
    mp.gui.cursor.show(true, true)
    mp.players.local.freezePosition(true)
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    let intervall = setInterval(() => {
        if(paintball != null) {
            clearInterval(intervall)
            paintball.execute(`SetPaintballData('${data}')`)
        }
    }, 10)
    setTimeout(() => {
        mp.gui.cursor.visible = true;
    }, 500);
})

mp.events.add('DestroyPaintballBrowser', (data) => {
    paintball.destroy();
    paintball = null
    mp.gui.cursor.show(false, false)
    mp.gui.cursor.visible = false;
    mp.players.local.freezePosition(false)
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
})

mp.events.add('CreatePaintballLobby', (data) => {
    if(data != '')
        mp.events.callRemote('Server:CreateLobby', data)
})

mp.events.add('JoinPaintballArena', (arenaId, password) => {
    mp.events.callRemote('Server:JoinLobby', arenaId, password);
})