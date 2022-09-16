const NATIVES = {
    SWITCH_OUT_PLAYER: '0xAAB3200ED59016BC',
    SWITCH_IN_PLAYER: '0xD8295AF639FD9CB8',
    IS_PLAYER_SWITCH_IN_PROGRESS: '0xD9D2CFFF49FAB35F'
};

class SkyCamera {
    constructor() {
        this.Active = false;
    }
    isInProgress() {
        return mp.game.invoke(NATIVES.IS_PLAYER_SWITCH_IN_PROGRESS);
    }
    switchOutPlayer() {
        this.Active = true;
        mp.game.invoke(NATIVES.SWITCH_OUT_PLAYER, mp.players.local.handle, 0, 1);
    }
    switchInPlayer() {
        if (this.Active) {
            this.Active = false;
            setTimeout(() => {
                mp.game.invoke(NATIVES.SWITCH_IN_PLAYER, mp.players.local.handle);
                setTimeout(() => {
                    mp.events.callRemote("OpenCharcreatorPlayer")
                }, 500);
            }, 5000);
        }
    }
}

var skyCam = new SkyCamera();

mp.events.add("Camera:StartCam", () => {
    if (skyCam) {
        skyCam.switchOutPlayer();
    }
});

mp.events.add("Camera:SpawnPlayer", () => {
    if (skyCam) {
        skyCam.switchInPlayer();
    }
});

mp.events.add("Camera:LoadCharacterCreator", () => {
    mp.events.callRemote("OpenCharcreatorPlayer")
});

mp.events.add("Camera:LoadCharacter", () => {
    mp.events.callRemote("Server:LoadCharacter")
});