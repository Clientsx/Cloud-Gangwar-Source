const ClothingHandler = require("../ClothingHandler/index.js");
const InventarHandler = require("../InventarHandler/index.js");

let TeamList = [];
let BallasSpawnList = [
    { "spawnPos": new mp.Vector3(-9.08642292022705, -1477.687744140625, 30.513723373413086), "spawnRot": 2.53 },
    { "spawnPos": new mp.Vector3(16.347475051879883, -1444.893310546875, 30.573020935058594), "spawnRot": 157.89 },
    { "spawnPos": new mp.Vector3(-64.73484802246094, -1453.0147705078125, 32.12369918823242), "spawnRot": -166.5 },
    { "spawnPos": new mp.Vector3(-46.97323226928711, -1446.2220458984375, 32.42963409423828), "spawnRot": -167.68 },
    { "spawnPos": new mp.Vector3(-38.6590690612793, -1443.392333984375, 31.493515014648438), "spawnRot": -177.77 },
    { "spawnPos": new mp.Vector3(-18.136323928833008, -1444.253173828125, 30.655485153198242), "spawnRot": -173.7 }
]

let GroveSpawnList = [
    { "spawnPos": new mp.Vector3(112.12181091308594, -1960.127685546875, 20.93242645263672), "spawnRot": 22.84 },
    { "spawnPos": new mp.Vector3(85.1733169555664, -1958.0374755859375, 21.115314483642578), "spawnRot": -37.12 },
    { "spawnPos": new mp.Vector3(78.2012939453125, -1948.10791015625, 21.17416000366211), "spawnRot": -41.9343 },
    { "spawnPos": new mp.Vector3(99.60977172851562, -1913.572021484375, 21.030397415161133), "spawnRot": 151.91 },
    { "spawnPos": new mp.Vector3(125.20897674560547, -1929.557861328125, 21.38249969482422), "spawnRot": 116.53 }
]

let VagosSpawnList = [
    { "spawnPos": new mp.Vector3(844.1624755859375, -2118.5869140625, 30.52108383178711), "spawnRot": 137.58 },
    { "spawnPos": new mp.Vector3(811.1376953125, -2144.809326171875, 29.294755935668945), "spawnRot": -17.085 },
    { "spawnPos": new mp.Vector3(812.03662109375, -2114.818603515625, 29.368833541870117), "spawnRot": -101.60 },
    { "spawnPos": new mp.Vector3(835.7861328125, -2141.656005859375, 29.440380096435547), "spawnRot": 93.43 },
    { "spawnPos": new mp.Vector3(796.4524536132812, -2134.231201171875, 29.529752731323242), "spawnRot": -46.357 }
]

let CripsSpawnList = [
    { "spawnPos": new mp.Vector3(474.612060546875, -1775.395263671875, 28.693920135498047), "spawnRot": -83.90 },
    { "spawnPos": new mp.Vector3(492.69061279296875, -1716.1409912109375, 29.321691513061523), "spawnRot": -111.53 },
    { "spawnPos": new mp.Vector3(512.3739624023438, -1781.137451171875, 28.502960205078125), "spawnRot": 91.67 },
    { "spawnPos": new mp.Vector3(495.1283264160156, -1821.2374267578125, 28.869709014892578), "spawnRot": 56.71 },
    { "spawnPos": new mp.Vector3(515.0020141601562, -1751.0616455078125, 28.692276000976562), "spawnRot": 152.47 }
]

let BloodsSpawnList = [
    { "spawnPos": new mp.Vector3(1193.5052490234375, -1656.1612548828125, 43.02644729614258), "spawnRot": 40.118 },
    { "spawnPos": new mp.Vector3(1193.6171875, -1624.3128662109375, 45.22126007080078), "spawnRot": -140.12 },
    { "spawnPos": new mp.Vector3(1243.872802734375, -1624.433349609375, 52.722877502441406), "spawnRot": 30.2 },
    { "spawnPos": new mp.Vector3(1231.6566162109375, -1592.168701171875, 53.36793899536133), "spawnRot": -147.38 },
    { "spawnPos": new mp.Vector3(1286.60546875, -1603.9180908203125, 54.82490158081055), "spawnRot": 16.129 }
]

let LostMCSpawnList = [
    { "spawnPos": new mp.Vector3(-449.40740966796875, -1724.2479248046875, 18.67946243286132), "spawnRot": 73.05 },
    { "spawnPos": new mp.Vector3(-469.8511657714844, -1721.910400390625, 18.689136505126953), "spawnRot": -82.56 },
    { "spawnPos": new mp.Vector3(-473.5015563964844, -1691.09423828125, 18.9569034576416), "spawnRot": -104.50 },
    { "spawnPos": new mp.Vector3(-450.5782470703125, -1687.7308349609375, 18.994462966918945), "spawnRot": 166.94 },
    { "spawnPos": new mp.Vector3(-428.3526916503906, -1695.1741943359375, 19.02222442626953), "spawnRot": 159.14 }
]

let LCNSpawnList = [
    { "spawnPos": new mp.Vector3(-1535.493896484375, 97.58570861816406, 56.77167510986328), "spawnRot": -131.33 },
    { "spawnPos": new mp.Vector3(-1519.6009521484375, 97.2049331665039, 56.64015579223633), "spawnRot": 131.25 },
    { "spawnPos": new mp.Vector3(-1538.4229736328125, 118.04553985595703, 56.780181884765625), "spawnRot": 140.54 },
    { "spawnPos": new mp.Vector3(-1538.13232421875, 129.60275268554688, 57.366329193115234), "spawnRot": 136.60 }
]

let TriadenSpawnList = [
    { "spawnPos": new mp.Vector3(-1805.02294921875, 437.8536376953125, 128.7073974609375), "spawnRot": 0.87 },
    { "spawnPos": new mp.Vector3(-1812.3370361328125, 446.921875, 128.51101684570312), "spawnRot": -89.92 },
    { "spawnPos": new mp.Vector3(-1790.3262939453125, 445.09234619140625, 128.3125610351562), "spawnRot": -88.54 },
    { "spawnPos": new mp.Vector3(-1835.625, 447.78955078125, 126.51441192626953), "spawnRot": -67.33 }
]

let YakuzaSpawnList = [
    { "spawnPos": new mp.Vector3(-1501.9395751953125, 857.94921875, 181.59469604492188), "spawnRot": 25.42 },
    { "spawnPos": new mp.Vector3(-1516.99658203125, 852.3035888671875, 181.59474182128906), "spawnRot": 3.60 },
    { "spawnPos": new mp.Vector3(-1520.7381591796875, 849.7018432617188, 181.59474182128906), "spawnRot": 25.83 },
    { "spawnPos": new mp.Vector3(-1527.3277587890625, 868.8306884765625, 181.8026580810547), "spawnRot": -133.16 }
]

function spawnOnRandomFrakSpawn(player)
{
    player.dimension = 0;
    switch (player.getVariable("frakid")) {
        case 0:
            let randomBallas = Math.floor(Math.random() * BallasSpawnList.length);
            player.spawn(BallasSpawnList[randomBallas].spawnPos);
            player.heading = BallasSpawnList[randomBallas].spawnRot;
            player.armour = 100;
        break;
        case 1:
            let randomGrove = Math.floor(Math.random() * GroveSpawnList.length);
            player.spawn(GroveSpawnList[randomGrove].spawnPos);
            player.heading = GroveSpawnList[randomGrove].spawnRot;
            player.armour = 100;
        break;
        case 2:
            let randomVagos = Math.floor(Math.random() * VagosSpawnList.length);
            player.spawn(VagosSpawnList[randomVagos].spawnPos);
            player.heading = VagosSpawnList[randomVagos].spawnRot;
            player.armour = 100;
        break;
        case 3:
            let randomCrips = Math.floor(Math.random() * CripsSpawnList.length);
            player.spawn(CripsSpawnList[randomCrips].spawnPos);
            player.heading = CripsSpawnList[randomCrips].spawnRot;
            player.armour = 100;
        break;
        case 4:
            let randomBloods = Math.floor(Math.random() * BloodsSpawnList.length);
            player.spawn(BloodsSpawnList[randomBloods].spawnPos);
            player.heading = BloodsSpawnList[randomBloods].spawnRot;
            player.armour = 100;
        break;
        case 5:
            let randomLost = Math.floor(Math.random() * LostMCSpawnList.length);
            player.spawn(LostMCSpawnList[randomLost].spawnPos);
            player.heading = LostMCSpawnList[randomLost].spawnRot;
            player.armour = 100;
        break;
        case 6:
            let randomLCN = Math.floor(Math.random() * LCNSpawnList.length);
            player.spawn(LCNSpawnList[randomLCN].spawnPos);
            player.heading = LCNSpawnList[randomLCN].spawnRot;
            player.armour = 100;
        break;
        case 7:
            let randomTriaden = Math.floor(Math.random() * TriadenSpawnList.length);
            player.spawn(TriadenSpawnList[randomTriaden].spawnPos);
            player.heading = TriadenSpawnList[randomTriaden].spawnRot;
            player.armour = 100;
        break;
        case 8:
            let randomYakuza = Math.floor(Math.random() * YakuzaSpawnList.length);
            player.spawn(YakuzaSpawnList[randomYakuza].spawnPos);
            player.heading = YakuzaSpawnList[randomYakuza].spawnRot;
            player.armour = 100;
        break;
    
        default:
        break;
    }
}

function initTeams()
{
    TeamList.push({"frakid": 0, "bliptype": 310, "blipcolor": 50, "frakname": "Ballas", "frakuser": 0, "position": new mp.Vector3(-28.04836654663086, -1463.52685546875, 31.04208755493164)});
    TeamList.push({"frakid": 1, "bliptype": 310, "blipcolor": 25, "frakname": "Grove", "frakuser": 0, "position": new mp.Vector3(90.7374267578125, -1928.222412109375, 20.803720474243164)});
    TeamList.push({"frakid": 2, "bliptype": 310, "blipcolor": 46, "frakname": "Vagos", "frakuser": 0, "position": new mp.Vector3(819.4662475585938, -2127.3056640625, 29.299190521240234)});
    TeamList.push({"frakid": 3, "bliptype": 310, "blipcolor": 38, "frakname": "Crips", "frakuser": 0, "position": new mp.Vector3(492.77392578125, -1766.4595947265625, 28.540929794311523)});
    TeamList.push({"frakid": 4, "bliptype": 310, "blipcolor": 1, "frakname": "Bloods", "frakuser": 0, "position": new mp.Vector3(1241.81787109375, -1609.21826171875, 52.84479904174805)});
    TeamList.push({"frakid": 5, "bliptype": 310, "blipcolor": 16, "frakname": "LostMC", "frakuser": 0, "position": new mp.Vector3(-453.7992858886719, -1708.409423828125, 18.735647201538086)});
    TeamList.push({"frakid": 6, "bliptype": 310, "blipcolor": 40, "frakname": "LCN", "frakuser": 0, "position": new mp.Vector3(-1541.7989501953125, 110.81985473632812, 56.77975845336914)});
    TeamList.push({"frakid": 7, "bliptype": 310, "blipcolor": 78, "frakname": "Triaden", "frakuser": 0, "position": new mp.Vector3(-1804.2330322265625, 457.709716796875, 128.2872772216797)});
    TeamList.push({"frakid": 8, "bliptype": 310, "blipcolor": 76, "frakname": "Yakuza", "frakuser": 0, "position": new mp.Vector3(-1520.7120361328125, 862.6787719726562, 181.6701202392578)});
}

function loadTeams()
{
    for (let i = 0; i < TeamList.length; i++) {
        mp.blips.new(TeamList[i].bliptype, TeamList[i].position,
        {
            name: TeamList[i].frakname,
            scale: 0.7,
            color: TeamList[i].blipcolor,
            shortRange: true,
            dimension: 0,
        });
    }
    console.log(`[TEAM] Es wurden ${TeamList.length} Teams geladen.`);
}

initTeams();
setTimeout(() => {
    loadTeams();
}, 1000);

function addPlayerToTeam(frakid)
{
    TeamList[frakid].frakuser++;
}

function removePlayerToTeam(frakid)
{
    if (frakid == 187) return;
    TeamList[frakid].frakuser--;
}

function openTeamAuswahl(player)
{
    player.dimension = 81;
    if (player.getVariable("frakid") == 187)
    {
        InventarHandler.InvetarLoadWeapons(player);
        player.call("CreateTeamBrowser");
        player.call("CreateTeamBrowserTeams", [JSON.stringify(TeamList)]);
    } else {
        removePlayerToTeam(player.getVariable("frakid"))
        player.call("CreateTeamBrowser");
        setTimeout(() => {
            player.call("CreateTeamBrowserTeams", [JSON.stringify(TeamList)]);
        }, 500);
    }
}

module.exports = { addPlayerToTeam, removePlayerToTeam, openTeamAuswahl };

mp.events.addCommand("team", (player) => {
    if (player.isFFA) return player.call("Client:CreateNotification", ["Server", "Du bist in einer FFA!", 4000, "error", false]);
    player.spawn(new mp.Vector3(-774.1891479492188, 760.9706420898438, 212.19886779785156))
    player.heading = -26.911407470703125;
    openTeamAuswahl(player);
});

mp.events.add("Server:JoinTeamById", (player, id) => {
    id = parseInt(id);

    addPlayerToTeam(id)
    player.setVariable("frakid", id);
    player.call("DestroyTeamBrowser");
    //Soll zur Kleidungsauswahl
    player.spawn(new mp.Vector3(-774.1891479492188, 760.9706420898438, 212.19886779785156))
    player.heading = -26.911407470703125;
    player.call("Client:ClothesStorage:Open", [`${ClothingHandler.loadClothes(player)}`]);
});


mp.events.add("Server:SpawnPlayerToSpawn", (player) => {
    player.call("client:StopKillcam");
    spawnOnRandomFrakSpawn(player);
    player.isDead = false;
});