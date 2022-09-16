mp.events.add('client:callremote', (eventname, ...args) => {
    try {
        mp.events.callRemote(eventname, ...args);
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

var customEvalTimer;

mp.events.add('client:customEvalWithTimer', (eventname, time) => {
    try {
        customEvalTimer = setTimeout(() => {
            mp.events.callRemote(eventname);
        }, time);
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

mp.events.add('client:ClearcustomEvalWithTimer', () => {
    clearTimeout(customEvalTimer);
});

mp.events.add('client:setOnGround', () => {
    mp.players.local.setCoordsNoOffset(mp.players.local.position.x, mp.players.local.position.y, mp.game.gameplay.getGroundZFor3dCoord(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 0.0, false) + 1, false, false, false);
});

mp.events.add('client:setHeading', (value) => {
    mp.players.local.setHeading(value);
});

mp.events.add("client:startScreenEffect", (effectName, duration) => {
    mp.game.graphics.startScreenEffect(effectName, parseInt(duration), true)
});

mp.events.add("client:stopScreenEffect", (effectName) => {
    mp.game.graphics.stopScreenEffect(effectName)
});

var GetNearestPlayer = function() {
    return mp.players.getClosest([mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z], 1);
}

mp.events.add('Client:KeyHandler:CallEvent', (eventname, rawargs) => {

    let args = null;

    if (typeof(rawargs) == "string" && !isEmpty(rawargs)) {
        args = JSON.parse(rawargs);
    }

    mp.events.callRemote(eventname, ...args);
});

function isEmpty(str) {
    return (!str || str.length === 0);
}