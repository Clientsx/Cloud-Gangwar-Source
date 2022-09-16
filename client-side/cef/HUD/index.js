var Hud = null;

// CEF Browser

mp.events.add('Client:CreateHud', () => {
    if (Hud != null) return;
    Hud = mp.browsers.new("package://cef/HUD/index.html");
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
    mp.players.local.freezePosition(false);
});

mp.events.add('Client:DestoryHud', () => {
    if (Hud == null) return;
    Hud.destroy();
    Hud = null;
});

mp.events.add("Client:ShowIdCard", (rawJson) => {
    if (Hud == null) return;
    Hud.execute(`toggleIdCard('[${rawJson}]')`)
})

mp.events.add("Client:ShowLicenses", (rawJson) => {
    if (Hud == null) return;
    Hud.execute(`toggleLicenceCard('[${rawJson}]')`)
})

// Minimap Fix

function getMinimapAnchor() {
    let sfX = 1.0 / 20.0;
    let sfY = 1.0 / 20.0;
    let safeZone = mp.game.graphics.getSafeZoneSize();
    let aspectRatio = mp.game.graphics.getScreenAspectRatio(false);
    let resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
    let scaleX = 1.0 / resolution.x;
    let scaleY = 1.0 / resolution.y;

    let minimap = {
        width: scaleX * (resolution.x / (4 * aspectRatio)),
        height: scaleY * (resolution.y / 5.674),
        scaleX: scaleX,
        scaleY: scaleY,
        leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}

setInterval(() => {
    setTimeout(() => {
        var minimap = getMinimapAnchor();
        if (Hud != null) {
            setTimeout(() => {
                if (Hud != null) {
                    Hud.execute(`FixMessages(${minimap.leftX * 150}, ${minimap.topY * 25}, ${minimap.width * 176.5})`);
                }
            }, 500);
        }
    }, 500);
}, 1500);

// Notifys

mp.events.add('Client:CreateNotification', (title, message, time, type, adminNotify) => {
    try {
        if (Hud != null) {
            Hud.execute(`playerNotify('${title}','${message}',${time},'${type}', ${adminNotify})`);
        }
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

mp.events.add('Client:CreateGlobalNotification', (title, message, time) => {
    try {
        if (Hud != null) {
            Hud.execute(`globalNotify('${title}','${message}',${time}`);
        }
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

// Speedometer
let isSpeedoVisible = false;
mp.events.add("render", () => {
    if (Hud != null) {
        if (mp.players.local.vehicle && mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle) {
            mp.game.invoke("0x5E6CC07646BBEAB8", mp.players.local, true);
            let currentspeed = mp.players.local.vehicle.getSpeed() * 3.6;
            if (!isSpeedoVisible)
            {
                isSpeedoVisible = true;
                let maxSpeed = mp.game.vehicle.getVehicleModelMaxSpeed(mp.players.local.vehicle.getModel()) * 3.6;
                Hud.execute(`showspeedometer('0 KM', '100', '${parseInt(maxSpeed)}')`)
            }
            Hud.execute(`updateSpeed(${currentspeed.toFixed(0)});`);

            if (mp.players.local.vehicle.getDoorLockStatus() == 2) {
                Hud.execute(`setvehiclelockstate('${true}')`)
            } else {
                Hud.execute(`setvehiclelockstate('${false}')`)
            }

            if (mp.players.local.vehicle.getIsEngineRunning() == true) {
                Hud.execute(`setenginestate('${true}')`)
            } else {
                Hud.execute(`setenginestate('${false}')`)
            }
        } else {
            if (isSpeedoVisible)
            {
                isSpeedoVisible = false;
                Hud.execute(`hidespeedometer()`);
            }
        }
    }
});

function getProzentOfValue(minimal, maximal) {
    return ((minimal / maximal) * 100).toFixed(2);
}

// Weapon Anzeige

mp.events.add('render', () => {
    let player = mp.players.local;
    if (player == null) return;
    let pedWeapon = mp.game.invoke('0x0A6DB4965674D243', player.handle);
    if (pedWeapon == null) return;
    let groupHash = mp.game.weapon.getWeapontypeGroup(pedWeapon);

    if (groupHash != '2685387236') {
        let pedWeaponAmmo = mp.game.invoke('0x015A522136D7F951', player.handle, pedWeapon >> 0)
        let pedWeaponClip = mp.players.local.getAmmoInClip(pedWeapon);
        if (Hud != null && (pedWeaponAmmo != NaN && pedWeaponAmmo != undefined) && (pedWeaponClip != NaN && pedWeaponClip != undefined)) {
            Hud.execute(`ToggleWeaponAmmoHud(true)`)
            Hud.execute(`UpdateWeaponAmmoAtHud('${pedWeaponClip}','${pedWeaponAmmo - pedWeaponClip}')`)
        }
    } else {
        if (Hud != null) {
            Hud.execute(`ToggleWeaponAmmoHud(false)`)
        }
    }
    mp.game.ui.hideHudComponentThisFrame(20);
    mp.game.ui.hideHudComponentThisFrame(3);
    mp.game.ui.hideHudComponentThisFrame(22);
    mp.game.ui.hideHudComponentThisFrame(2);

    mp.game.ui.hideHudComponentThisFrame(7);
    mp.game.ui.hideHudComponentThisFrame(6);
    mp.game.ui.hideHudComponentThisFrame(9);
    mp.game.ui.hideHudComponentThisFrame(8);
    mp.game.ui.hideHudComponentThisFrame(10);
});

// Dialogfenster

mp.events.add('Client:Dialog:Call:Event', (eventname, ...args) => {
    if (Hud != null) {
        mp.events.callRemote(eventname, ...args)
    }
});

mp.events.add('Client:Dialog:Create', (rawData) => {
    if (Hud != null) {

        Hud.execute(`toggleDialogWindow('${rawData}')`)
        setTimeout(() => {
            mp.gui.cursor.visible = true;
            mp.game.ui.displayRadar(false);
            mp.game.ui.displayHud(false);
        }, 200);
    }
});

mp.events.add('Client:Dialog:Destory', () => {
    if (Hud != null) {
        Hud.execute(`closeDialogWindow()`);
        mp.gui.cursor.show(false, false);
        mp.game.ui.displayRadar(true);
        mp.game.ui.displayHud(true);
    }
});

mp.events.add('Client:DialogInput:Call:Event', (eventname, value, ...args) => {
    if (Hud != null) {
        mp.events.callRemote(eventname, value, ...args)
    }
});

mp.events.add('Client:DialogInput:Create', (rawData) => {
    if (Hud != null) {
        Hud.execute(`toggleDialogInputWindow('${rawData}')`)
        setTimeout(() => {
            mp.gui.cursor.visible = true;
            mp.game.ui.displayRadar(false);
            mp.game.ui.displayHud(false);
        }, 200);
    }
});

// HUD INFO

mp.events.add('Client:Hud:InitHud', (playerId) => {
    if (Hud != null) {
        Hud.execute(`InitHud(${playerId})`);
    }
});

// MONEY
mp.events.add("Client:SetMoney", (money) => {
    if (Hud != null) {
        Hud.execute(`setMoney(${money})`);
    }
});

// STATS
mp.events.add("Client:SetStats", (kills, deaths) => {
    if (Hud != null) {
        Hud.execute(`setInfo(${kills}, ${deaths})`);
    }
});

mp.events.add("Client:SetStats2", (level, xp, maxxp) => {
    if (Hud != null) {
        Hud.execute(`setInfo2(${level}, ${xp}, ${maxxp})`);
    }
});

// Voicestuff

mp.events.add("Client:ToggleHudRadio", (toggle) => {
    Hud.execute(`showRadio(${toggle})`);
});

mp.events.add("Client:SetHudRadio", (value) => {
    Hud.execute(`setRadioState(${value})`);
});

mp.events.add("Client:SetHudVoice", (value) => {
    Hud.execute(`setVoiceState(${value})`);
});

mp.events.add("Client:ToggleHud", (toggle) => {
    if (Hud != null) {
        Hud.active = toggle;
    }
});

// Nativemenu
let showNativeMenu = false
mp.events.add('Client:NativeMenu:Create', (menu) => {
    if (Hud != null && showNativeMenu == false) {
        Hud.execute(`openNativeMenu('${menu}')`);
        showNativeMenu = true
    }
});

mp.events.add('Client:NativeMenu:Destory', () => {
    if (Hud != null && showNativeMenu == true) {
        Hud.execute(`hideNativeMenu()`)
        mp.gui.cursor.show(false, false);
        showNativeMenu = false
    }
});

mp.events.add('Client:NativeMenu:CallEvent', (eventname, ...args) => {
    if (Hud != null) {
        mp.events.callRemote(eventname, ...args);
    }
});

mp.events.add('Client:ShowCursor', () => {
    if (Hud != null) {
        mp.gui.cursor.show(true, true);
    }
});

// Gangwar

mp.events.add('Client:CreateGangwarUI', (firstTeamName, firstTeamColor, firstTeamFontColor, secondTeamName, secondTeamColor, secondTeamFontColor, duration) => {
    if (Hud != null) {
        Hud.execute(`setTeams('${firstTeamName}' ,'${firstTeamColor}', '${firstTeamFontColor}', '${secondTeamName}' ,'${secondTeamColor}', '${secondTeamFontColor}', '${duration}')`);
    }
});

mp.events.add("Client:Gangwar:UpdatePoints", (firstTeamPoints, secondTeamPoints) => {
    if (Hud != null) {
        Hud.execute(`updatePoints('${firstTeamPoints}', '${secondTeamPoints}')`);
    }
});

mp.events.add('Client:DestroyGangwarUI', () => {
    if (Hud != null) {
        Hud.execute(`hideGangwar()`)

    }
});

// Progressbar 

mp.events.add(`Client:StartProgress`, (time) => {
    if (Hud != null) {
        Hud.execute(`startProgress(${time})`)
    }
});