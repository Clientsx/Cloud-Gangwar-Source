mp.nametags.enabled = false;
mp.players.local.setSuffersCriticalHits(false);
//mp.discord.update("Cloud Gangwar", "discord.gg/cloudgangwar");
mp.players.local.setConfigFlag(429, true);

mp.events.add('playerReady', () => {
    mp.game.invoke('0xF314CF4F0211894E', 143, 2, 121, 185, 180); // SET_HUD_COLOUR
    //mp.game.invoke('0xEBD76F2359F190AC', mp.players.local.handle, false);
    mp.game.gxt.set('PM_PAUSE_HDR', "Cloud Gangwar");
})

let controlsToDisable = [12, 13, 14, 15, 16, 17, 24, 25, 37, 45, 47, 58, 69, 70, 92, 114, 140, 141, 142, 143, 257, 263, 264, 331]
let controlsLength = controlsToDisable.length
let disableControlsState = false
let isFreezedByController = false

setInterval(() => {
    if (mp.game.gameplay.getProfileSetting(0) == 0 || mp.game.gameplay.getProfileSetting(0) == 1 || mp.game.gameplay.getProfileSetting(0) == 2) {
        disableControlsState = true
        mp.events.call("Client:CreateNotification", "Information", "Bitte ändere deinen Zielmodus in den Einstellungen.", 5000, "error", false)
        if (isFreezedByController == false) {
            isFreezedByController = true
            mp.players.local.freezePosition(true)
        }
    } else {
        disableControlsState = false
        if (isFreezedByController == true) {
            isFreezedByController = false
            mp.players.local.freezePosition(false)
        }
    }
}, 5000);

mp.events.add("client:disableAllControls", (state) => {
    disableControlsState = state;
});

mp.events.add('render', () => {
    mp.game.player.setHealthRechargeMultiplier(0);
    mp.game.controls.disableControlAction(2, 44, true);

    let isArmedExceptMelee = mp.game.invoke('0x475768A975D5AD17', mp.players.local.handle, 6); // IS_PED_ARMED
    if (isArmedExceptMelee) {
        mp.game.controls.disableControlAction(0, 140, true);
        mp.game.controls.disableControlAction(0, 141, true);
        mp.game.controls.disableControlAction(0, 142, true);
    }

    if (!mp.players.local.vehicle)
        mp.game.invoke("0xDE2EF5DA284CC8DF", []);

    mp.game.player.restoreStamina(100);

    mp.game.ui.hideHudComponentThisFrame(6)
    mp.game.ui.hideHudComponentThisFrame(7)
    mp.game.ui.hideHudComponentThisFrame(8)
    mp.game.ui.hideHudComponentThisFrame(9)

    if (disableControlsState == true) {
        for (let i = 0; i < controlsLength; i++) {
            mp.game.controls.disableControlAction(2, controlsToDisable[i], disableControlsState);
        }
    }

    if (mp.players.local.isUsingActionMode()) {
        mp.players.local.setUsingActionMode(false, -1, "DEFAULT_ACTION");
    }

    if (mp.players.local.vehicle)
    {
        mp.game.audio.setUserRadioControlEnabled(false);
        mp.game.audio.setRadioToStationName("OFF");
    }
});

mp.events.add("client:gui:addWayPoint", (x, y) => {
    mp.game.ui.setNewWaypoint(x, y);
});

mp.events.add("client:toggleGodmode", state => {
    mp.game.player.setInvincible(state)
});

mp.events.add("client:freezePlayer", state => {
    mp.players.local.freezePosition(state)
});

mp.events.add("client:setRagdoll", (time, type) => {
    mp.players.local.setToRagdoll(time, time, type, true, true, true);
});

mp.game.streaming.requestIpl("vw_casino_main");
mp.game.streaming.removeIpl("rc12b_default");
mp.game.streaming.removeIpl("rc12b_destroyed");
mp.game.streaming.removeIpl("rc12b_fixed");
mp.game.streaming.removeIpl("rc12b_hospitalinterior");