const controlsIds = {
    F7: 0x76,
    W: 32,
    S: 33,
    A: 34,
    D: 35,
    Space: 321,
    LCtrl: 326,
    LMB: 24,
    RMB: 25
};

global.fly = {
    flying: false,
    f: 2.0,
    w: 2.0,
    h: 2.0,
    point_distance: 1000,
};
global.gameplayCam = mp.cameras.new('gameplay');

let direction = null;
let coords = null;
let rotation = null;

function pointingAt(distance) {
    const farAway = new mp.Vector3((direction.x * distance) + (coords.x), (direction.y * distance) + (coords.y), (direction.z * distance) + (coords.z));

    const result = mp.raycasting.testPointToPoint(coords, farAway, [1, 16]);
    if (result === undefined) {
        return 'undefined';
    }
    return result;
}

mp.keys.bind(118, false, function() {

    const controls = mp.game.controls;
    const fly = global.fly;
    direction = global.gameplayCam.getDirection();
    coords = global.gameplayCam.getCoord();

    fly.flying = !fly.flying;

    const player = mp.players.local;

    if (mp.players.local.vehicle) {
        mp.players.local.vehicle.freezePosition(fly.flying);
    } else {
        player.freezePosition(fly.flying);
    }

    if (!fly.flying && !controls.isControlPressed(0, controlsIds.Space)) {
        const position = mp.players.local.position;
        position.z = mp.game.gameplay.getGroundZFor3dCoord(position.x, position.y, position.z, 0.0, false);

        if (mp.players.local.vehicle) {
            mp.players.local.vehicle.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
        } else {
            mp.players.local.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
        }
    }
});
mp.events.add('render', () => {
    if (fly.flying) {
        const controls = mp.game.controls;
        const fly = global.fly;
        direction = global.gameplayCam.getDirection();
        coords = global.gameplayCam.getCoord();
        rotation = global.gameplayCam.getRot(1);

        let updated = false;
        const position = mp.players.local.vehicle == null ? mp.players.local.position : mp.players.local.vehicle.position;
        var speed;


        if (mp.players.local.vehicle) {
            mp.players.local.vehicle.setRotation(rotation.x, rotation.y, rotation.z, 1, true);
        } else {
            mp.players.local.setRotation(rotation.x, rotation.y, rotation.z, 1, true);
        }

        if (controls.isControlPressed(0, controlsIds.LMB)) {
            speed = 1.0
        } else if (controls.isControlPressed(0, controlsIds.RMB)) {
            speed = 0.02
        } else {
            speed = 0.2
        }

        if (controls.isControlPressed(0, controlsIds.W)) {
            if (fly.f < 8.0) fly.f *= 1.025;
            position.x += direction.x * fly.f * speed;
            position.y += direction.y * fly.f * speed;
            position.z += direction.z * fly.f * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.S)) {
            if (fly.f < 8.0) fly.f *= 1.025;
            position.x -= direction.x * fly.f * speed;
            position.y -= direction.y * fly.f * speed;
            position.z -= direction.z * fly.f * speed;
            updated = true;
        } else fly.f = 2.0;
        if (controls.isControlPressed(0, controlsIds.A)) {
            if (fly.l < 8.0) fly.l *= 1.025;
            position.x += (-direction.y) * fly.l * speed;
            position.y += direction.x * fly.l * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.D)) {
            if (fly.l < 8.0) fly.l *= 1.05;
            position.x -= (-direction.y) * fly.l * speed;
            position.y -= direction.x * fly.l * speed;
            updated = true;
        } else fly.l = 2.0;
        if (controls.isControlPressed(0, controlsIds.Space)) {
            if (fly.h < 8.0) fly.h *= 1.025;
            position.z += fly.h * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.LCtrl)) {
            if (fly.h < 8.0) fly.h *= 1.05;
            position.z -= fly.h * speed;
            updated = true;
        } else fly.h = 2.0;
        if (updated) {
            if (mp.players.local.vehicle) {

                mp.players.local.vehicle.setCoordsNoOffset(position.x, position.y, position.z, true, true, false)
            } else {
                mp.players.local.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
            }
        }
    }
});