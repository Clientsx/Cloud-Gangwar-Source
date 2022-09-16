let killcamcamera = null;

mp.events.add("client:Killcam", (targetId) => {

    var playerObj = mp.players.atRemoteId(targetId);

    if (playerObj == mp.players.local)
        return false;

    if (!playerObj)
        return false;

    mp.gui.chat.show(false);

    mp.game.cam.doScreenFadeOut(500);

    setTimeout(() => {
        mp.game.cam.doScreenFadeIn(500);

        if (!mp.players.exists(playerObj))
            return false;

        if (killcamcamera)
        {
            killcamcamera.destroy();
            killcamcamera = null;
        }

        killcamcamera = mp.cameras.new("camera:Killcam", mp.players.local.position, new mp.Vector3(0, 0, 0), 50);
        killcamcamera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, false, false);

        if (mp.players.exists(playerObj))
            killcamcamera.pointAt(playerObj.handle, 0.0, 0.0, 0.0, true);
    }, 500);


});

mp.events.add("client:StopKillcam", () => {
    mp.gui.chat.show(true);
    if (killcamcamera)
    {
        killcamcamera.setActive(false);
        killcamcamera.destroy();
        killcamcamera = null;
        mp.game.cam.renderScriptCams(false, false, 0, false, false);
    }
});