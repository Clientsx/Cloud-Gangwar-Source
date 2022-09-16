class AntiCheat {
    constructor() {
        this.AllowedHealth = null
        this.LastBone = 0
        this.LastBoneCount = 0
        this.LastHitName = null
        this.BulletSeccondCount = 0
        this.OldPosition = null
        this.TeleportDistance = 0
        this.AutoDriveValue = 0
        this.PlayerVisibility = 0
        this.ClientVehicleCount = 0
        this.ResetSpawn = true
    }

    isWalking() {
        if (mp.players.local.isFalling() || mp.players.local.isRagdoll()) return false
        else if (!mp.players.local.vehicle) return true
    }

    checkPlayerHealth() {
        if (this.AllowedHealth == null) return;
        if ((mp.players.local.getHealth() + mp.players.local.getArmour()) > this.AllowedHealth) {
            this.callHealKeyDetection((mp.players.local.getHealth() + mp.players.local.getArmour()))
        }
    }

    callHealKeyDetection(health) {
        if (this.AllowedHealth == null) return;

        if(this.ResetSpawn === true) {
            this.ResetSpawn = false;
            return;
        }

        if ((health - this.AllowedHealth) === 0) {
            mp.events.callRemote("Server:AntiCheat:CallGodMode")
        } else {
            mp.events.callRemote("Server:AntiCheat:CallHealKey", this.AllowedHealth, health)
        }
    }

    // callAimBotWarning() {
    //     mp.events.callRemote("Server:AntiCheat:CallAimBotWarning", this.LastHitName, this.LastBone, this.LastBoneCount)
    // }

    callRapidFireDetection() {
        mp.events.callRemote("Server:AntiCheat:CallRapidFire", this.BulletSeccondCount)
    }

    callTeleportWarning() {
        mp.events.callRemote("Server:AntiCheat:CallTeleport", this.TeleportDistance)
    }

    callAutoDriveWarning() {

        if (mp.players.local.getIsTaskActive(169)) {
            this.AutoDriveValue++

                if (this.AutoDriveValue >= 3) {
                    mp.events.callRemote("Server:AntiCheat:CallAutoDrive")
                }
        }
    }

    checkPlayerVisibility() {
        if(mp.game.invoke("0x5A47B3B5E63E94C6", mp.players.local.handle) < 150 && mp.players.local.getVariable("PLAYER_IS_ADUTY") == false) {
            this.PlayerVisibility++
            if(this.PlayerVisibility >= 3) {
                mp.events.callRemote("Server:AntiCheat:VisibilityHack", mp.game.invoke("0x5A47B3B5E63E94C6", mp.players.local.handle))
            }
        }
    }

    callHeavyFistDetection(damage) {
        mp.events.callRemote("Server:AntiCheat:HeavyFist", damage)
    }

    checkCurrentVehicle() {
        if (mp.players.local.vehicle == null && mp.game.invoke("0x997ABD671D25CA0B", mp.players.local.handle, false) == true) {
            this.ClientVehicleCount++
            if(this.ClientVehicleCount >= 3) {
                mp.events.callRemote("Server:AntiCheat:SpawnedVehicle")
            }
        }
    }
}

const anticheat = new AntiCheat();

mp.events.add("playerSpawn", (player) => {
    anticheat.ResetSpawn = true;
    anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
});

mp.events.add("playerReady", (player) => {
    anticheat.ResetSpawn = true;
    anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
});

mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
    if (targetEntity.type === 'player' && sourcePlayer) {

        if (damage !== 0) {
            // if (anticheat.LastBone === boneIndex) {
            //     anticheat.LastBoneCount++
            // } else {
            //     anticheat.LastBoneCount = 0
            // }

            // anticheat.LastHitName = sourceEntity
            // anticheat.LastBone = boneIndex;

            anticheat.checkPlayerHealth()
            anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
        }
    }
});

mp.events.add("Client:AntiCheat:SetHealth", (health) => {
    mp.players.local.setHealth(100 + health)
    anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
});

mp.events.add("Client:AntiCheat:SetArmour", (armor) => {
    mp.players.local.setArmour(armor)
    anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
});

const meeles = {
    2460120199: {
        "name": "weapon_dagger"
    },
    2508868239: {
        "name": "weapon_bat"
    },
    4192643659: {
        "name": "weapon_bottle"
    },
    2227010557: {
        "name": "weapon_crowbar"
    },
    2725352035: {
        "name": "weapon_unarmed"
    },
    2343591895: {
        "name": "weapon_flashlight"
    },
    1141786504: {
        "name": "weapon_golfclub"
    },
    1317494643: {
        "name": "weapon_hammer"
    },
    4191993645: {
        "name": "weapon_hatchet"
    },
    3638508604: {
        "name": "weapon_knuckle"
    },
    2578778090: {
        "name": "weapon_knife"
    },
    3713923289: {
        "name": "weapon_machete"
    },
    3756226112: {
        "name": "weapon_switchblade"
    },
    1737195953: {
        "name": "weapon_nightstick"
    },
    419712736: {
        "name": "weapon_wrench"
    },
    3441901897: {
        "name": "weapon_battleaxe"
    },
    2484171525: {
        "name": "weapon_poolcue"
    },
    940833800: {
        "name": "weapon_stone_hatchet"
    }
}

mp.events.add("render", () => {
    if(mp.players.local.getVariable("PLAYER_IS_ADUTY") == true) return;
    
    mp.players.forEachInStreamRange(
        (player) => {
            if(player != mp.players.local && JSON.parse(player.getVariable("PLAYER_DEATH")).isDeath != true) {
                player.setHealth(Math.floor(Math.random() * 100) + 1);
                player.setArmour(Math.floor(Math.random() * 100) + 1);
                player.name = `${(Math.random() + 1).toString(36).substring(7)}`;
            }
        }
    )
})

mp.events.add('outgoingDamage', (sourceEntity, targetEntity, sourcePlayer, weapon, boneIndex, damage) => {
    if(weapon in meeles) {
        if(damage > 300) {
            anticheat.callHeavyFistDetection(damage)
            return true;
        }
    }
});

mp.events.add('playerWeaponShot', (targetPosition, targetEntity) => {
    anticheat.BulletSeccondCount++
});

setInterval(() => {
    if (anticheat.BulletSeccondCount >= 30) {
        anticheat.callRapidFireDetection()
    }
    anticheat.BulletSeccondCount = 0

    if (anticheat.OldPosition != null && anticheat.isWalking()) {
        anticheat.TeleportDistance = mp.game.gameplay.getDistanceBetweenCoords(anticheat.OldPosition.x, anticheat.OldPosition.y, anticheat.OldPosition.z, mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, false);

        if (anticheat.TeleportDistance > 25) {
            anticheat.callTeleportWarning()
        }
    }
    anticheat.OldPosition = mp.players.local.position

    anticheat.callAutoDriveWarning()

    anticheat.checkPlayerVisibility()

    anticheat.checkCurrentVehicle()

    anticheat.checkPlayerHealth()
    anticheat.AllowedHealth = (mp.players.local.getHealth() + mp.players.local.getArmour())
}, 1000);

// setInterval(() => {
//     if (anticheat.LastBoneCount >= 5) {
//         anticheat.callAimBotWarning()
//     }
//     anticheat.LastBoneCount = 0
// }, 5000);

// let browsercount = 0;

// mp.events.add('browserDomReady', (browser) => {
//     browsercount++
//     mp.console.logInfo("A " + browsercount, false, false)
//     mp.console.logInfo("B " + mp.browsers.length, false, false)

//     setTimeout(() => {
//         if(mp.browsers.length < browsercount){
//             mp.console.logInfo("Detection", false, false)
//             mp.console.logInfo("A " + browsercount, false, false)
//             mp.console.logInfo("B " + mp.browsers.length, false, false)

//         }
//     }, 100);
// });

// setInterval(() => {
//     mp.console.logInfo(`${mp.game.invoke("0x814C9D19DFD69679", mp.players.local.handle)}`, false, false)
// }, 1000);

// setInterval(() => {
//     let camera = mp.cameras.new("gameplay");


//     // let position = camera.getCoord();
//     // mp.console.logInfo(`CAMERA: ${JSON.parse(camera)}`, false, false)

//     // mp.console.logInfo(`POSITION-X: ${position.x}`, false, false)
//     // mp.console.logInfo(`POSITION-Y: ${position.y}`, false, false)
//     // mp.console.logInfo(`POSITION-Z: ${position.z}`, false, false)


// }, 1000);

// mp.events.add('playerWeaponShot', (targetPosition, targetEntity) => {
//     if(targetEntity != null){
//         TracerObject.push({
//             PositionFrom: mp.players.local.position,
//             PositionTo: targetPosition,
//             Name: targetEntity.name,
//             Time: Date.now() + 3000
//         })
//     }
// });

// mp.events.add("render", () => {
//         TracerObject.forEach(element => {
//             mp.game.graphics.drawLine(element.PositionFrom.x, element.PositionFrom.y + 0.15, element.PositionFrom.z + 0.5, element.PositionTo.x, element.PositionTo.y, element.PositionTo.z, 255, 255, 0, 255);
//             mp.game.graphics.drawText(element.Name, [element.PositionFrom.x, element.PositionFrom.y + 0.15, element.PositionFrom.z + 0.5], { font: 0, centre: true, color: [255, 255, 0, 180], scale: [0.2, 0.2], outline: true });

//             if (element.Time < Date.now()) {
//                 var index = TracerObject.findIndex(target => target == element);
//                 TracerObject.splice(index, 1);
//             }        
//         }
//     )
// });

// const TracerObject = []