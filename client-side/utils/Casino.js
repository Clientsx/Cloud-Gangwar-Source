mp.events.add("client:CasinogetPerfectGroundPosition", (x, y, z) => {
    var object = mp.objects.new(mp.game.joaat("p_ld_heist_bag_s_pro2_s"), new mp.Vector3(x, y, z));
    mp.events.callRemote("server:CasinoDropbag", object.position.x, object.position.y, object.position.z, object.getHeightAboveGround());
    object.destroy();
});

var positions = [
    new mp.Vector3(1118.3133544921875, 224.06954956054688, -49.926570892333984),
    new mp.Vector3(1099.8621826171875, 227.9193878173828, -49.92387008666992),
    new mp.Vector3(1108.105712890625, 247.5836944580078, -50.94070816040039),
    new mp.Vector3(1152.832763671875, 258.091552734375, -51.9408073425293)
];