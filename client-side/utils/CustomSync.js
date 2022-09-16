const customDamageWeapon = {
    "453432689":{
        "name": "Pistol",
        "damage": 12,
        "headshot": 20
    },
    "3219281620":{
        "name": "Pistol Mk II",
        "damage": 15,
        "headshot": 23
    },
    "1593441988":{
        "name": "Combat Pistol",
        "damage": 13,
        "headshot": 21
    },
    "584646201":{
        "name": "AP Pistol",
        "damage": 13,
        "headshot": 21
    },
    "911657153":{
        "name": "Stun Gun",
        "damage": 1,
        "headshot": 1
    },
    "2578377531":{
        "name": "Pistol .50",
        "damage": 17,
        "headshot":25
    },
    "3523564046":{
        "name": "Heavy Pistol",
        "damage": 18,
        "headshot": 26
    },
    "3249783761":{
        "name": "Heavy Revolver",
        "damage": 50,
        "headshot": 120
    },
    "324215364":{
        "name": "Micro SMG",
        "damage": 16,
        "headshot": 23
    },
    "736523883":{
        "name": "SMG",
        "damage": 18,
        "headshot": 25
    },
    "2024373456":{
        "name": "SMG Mk II",
        "damage": 14,
        "headshot": 27
    },
    "4024951519":{
        "name": "Assault SMG",
        "damage": 19,
        "headshot": 28
    },
    "171789620":{
        "name": "Combat PDW",
        "damage": 22,
        "headshot": 30
    },
    "3675956304":{
        "name": "Machine Pistol",
        "damage": 13,
        "headshot": 18
    },
    "3173288789":{
        "name": "Mini SMG",
        "damage": 18,
        "headshot": 27
    },
    "94989220":{
        "name": "Combat Shotgun",
        "damage": (90  / 8),
        "headshot": (120 / 8)
    },
    "984333226":{
        "name": "Heavy Shotgun",
        "damage": (85  / 8),
        "headshot": (115 / 8)
    },
    "2828843422":{
        "name": "Musket",
        "damage": 110,
        "headshot": 180
    },
    "1627465347":{
        "name": "Gusenberg Sweeper",
        "damage": 18,
        "headshot": 33
    },
    "3342088282":{
        "name": "Marksman Rifle",
        "damage": 80,
        "headshot": 120
    },
    "3220176749":{
        "name": "Assault Rifle",
        "damage": 16,
        "headshot": 24
    },
    "961495388":{
        "name": "Assault Rifle Mk II",
        "damage": 18,
        "headshot": 26
    },
    "2210333304":{
        "name": "Carbine Rifle",
        "damage": 17,
        "headshot": 25
    },
    "4208062921":{
        "name": "Carbine Rifle Mk II",
        "damage": 19,
        "headshot": 28
    },
    "2937143193":{
        "name": "Advanced Rifle",
        "damage": 18,
        "headshot": 26
    },
    "3231910285":{
        "name": "Special Carbine",
        "damage": 17,
        "headshot": 26
    },
    "2526821735":{
        "name": "Special Carbine Mk II",
        "damage": 19,
        "headshot": 27
    },
    "2132975508":{
        "name": "Bullpup Rifle",
        "damage": 17,
        "headshot": 25
    },
    "1649403952":{
        "name": "Compact Rifle",
        "damage": 13,
        "headshot": 22
    },
    "2636060646":{
        "name": "Military Rifle",
        "damage": 19,
        "headshot": 25
    },
    "-1746263880":{
        "name": "Double Action Revolver",
        "damage": 48,
        "headshot": 78
    },
    "487013001":{
        "name": "Pump Shotgun",
        "damage": (120  / 8),
        "headshot": (160  / 8)
    }
}

function getHitRotationFrom(position) {

    var absolutePosition = new mp.Vector3(position.x - mp.players.local.position.x, position.y - mp.players.local.position.y, position.z - mp.players.local.position.z);

    var angle = Math.atan2(absolutePosition.y, absolutePosition.x);

    angle = (angle * 180 / Math.PI);

    var outputRotation = (angle - mp.game.cam.getGameplayCamRot(0).z);

    if (outputRotation < 0)
        outputRotation = outputRotation + 360;

    return outputRotation;
}

function setHitIndicator(position) {
    var rotation = getHitRotationFrom(new mp.Vector3(position.x, position.y, position.z));

    if (extrasBrowser)
    {
        if (rotation > 45 && rotation < 135)
            extrasBrowser.execute("hitTop();");

        if (rotation > 135 && rotation < 225)
            extrasBrowser.execute("hitLeft();");

        if (rotation > 225 && rotation < 315)
            extrasBrowser.execute("hitBottom();");

        if (rotation > 315 && rotation < 360)
            extrasBrowser.execute("hitRight();");
    }
}

function setHitmarker() {
    if (extrasBrowser)
    {
        extrasBrowser.execute("hitMarker();");
    }
}

function setHeadshotSound() {
    if (extrasBrowser)
    {
        extrasBrowser.execute("headshot();");
    }
}

mp.events.add('outgoingDamage', (sourceEntity, targetEntity, sourcePlayer, weapon, boneIndex, damage) => {
    if (targetEntity.type === 'player') {
        let damage = 0;
        let headshotdamage = 0;

        if (weapon in customDamageWeapon)
        {
            damage = customDamageWeapon[weapon].damage;
            headshotdamage = customDamageWeapon[weapon].headshot;
        }

        switch (boneIndex) {
            case 20:
                setHeadshotSound();
                mp.events.callRemote("CloudGW:CustomSync:HitPlayer", targetEntity, parseInt(headshotdamage))
            break;
            case 19:
                setHeadshotSound();
                mp.events.callRemote("CloudGW:CustomSync:HitPlayer", targetEntity, parseInt(headshotdamage))
            break;
            default:
                mp.events.callRemote("CloudGW:CustomSync:HitPlayer", targetEntity, parseInt(damage))
            break;
        }

        setHitmarker();
    }
});

mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
    return true;
});

mp.events.add('applyCustomDamage', (damageamount, x, y, z) => {
    setHitIndicator(new mp.Vector3(x, y, z));

    if (mp.players.local.getArmour() > 0)
        mp.players.local.setArmour(mp.players.local.getArmour() - damageamount);
    else
        mp.players.local.applyDamageTo(damageamount, false);

    mp.game.invoke("0xBC9AE166038A5CEC", mp.players.local.handle, 6, 1.0, 0);
});