let lobbyList = {"Lobbys": [], "Maps": ["Würfelpark", "LS Supply", "LSPD", "Projects"], "Weapons": ["Pistol", "Combatpistol", "Pistol50", "Heavypistol", "Vintagepistol", "Appistol", "Revolver"]};

let WuerfelparkSpawnList = [
    { "spawnPos": new mp.Vector3(158.68072509765625, -998.3629760742188, 29.35004425048828), "spawnRot": -20.47 },
    { "spawnPos": new mp.Vector3(152.5721893310547, -964.1041870117188, 30.092144012451172), "spawnRot": -99.19 },
    { "spawnPos": new mp.Vector3(203.17227172851562, -996.0103759765625, 30.091920852661133), "spawnRot": 69.33 },
    { "spawnPos": new mp.Vector3(230.35089111328125, -958.1395874023438, 29.338459014892578), "spawnRot": 53.70 },
    { "spawnPos": new mp.Vector3(207.67152404785156, -922.5108642578125, 30.6920166015625), "spawnRot": 146.54 },
    { "spawnPos": new mp.Vector3(157.06552124023438, -912.2677001953125, 30.186527252197266), "spawnRot": -112.91 },
    { "spawnPos": new mp.Vector3(186.8592987060547, -849.7002563476562, 31.166662216186523), "spawnRot": 24.48 },
    { "spawnPos": new mp.Vector3(262.0793762207031, -872.6028442382812, 29.1851749420166), "spawnRot": -145.93 },
    { "spawnPos": new mp.Vector3(238.12234497070312, -907.900146484375, 28.7424259185791), "spawnRot": -35.563 }
]

let LSSupplySpawnList = [
    { "spawnPos": new mp.Vector3(1198.4443359375, -1273.8748779296875, 35.223331451416016), "spawnRot": -91.15 },
    { "spawnPos": new mp.Vector3(1188.540283203125, -1298.63037109375, 34.9166374206543), "spawnRot": -125.20 },
    { "spawnPos": new mp.Vector3(1214.9818115234375, -1362.9559326171875, 35.226348876953125), "spawnRot": 40.40 },
    { "spawnPos": new mp.Vector3(1141.6103515625, -1358.707763671875, 34.61713790893555), "spawnRot": -92.92 },
    { "spawnPos": new mp.Vector3(1152.96826171875, -1328.0516357421875, 34.69598388671875), "spawnRot": -92.15 },
    { "spawnPos": new mp.Vector3(1176.1922607421875, -1273.322021484375, 34.79974365234375), "spawnRot": 172.55 },
    { "spawnPos": new mp.Vector3(1182.10205078125, -1360.7198486328125, 34.89548110961914), "spawnRot": -50.47 },
    { "spawnPos": new mp.Vector3(1218.593505859375, -1373.3404541015625, 35.097938537597656), "spawnRot": 81 },
    { "spawnPos": new mp.Vector3(1176.650146484375, -1410.1953125, 34.829368591308594), "spawnRot": -115.55 }
]

let LSPDSpawnList = [
    { "spawnPos": new mp.Vector3(409.3192138671875, -962.6931762695312, 29.492141723632812), "spawnRot": -147.33 },
    { "spawnPos": new mp.Vector3(451.3009338378906, -974.7776489257812, 30.689579010009766), "spawnRot": 132.07 },
    { "spawnPos": new mp.Vector3(458.68011474609375, -991.4248046875, 30.689605712890625), "spawnRot": 79.41 },
    { "spawnPos": new mp.Vector3(438.90740966796875, -991.7324829101562, 30.689603805541992), "spawnRot": -110.69 },
    { "spawnPos": new mp.Vector3(458.6649475097656, -1001.5715942382812, 24.914865493774414), "spawnRot": -89.03 },
    { "spawnPos": new mp.Vector3(463.4643249511719, -1009.6831665039062, 25.562177658081055), "spawnRot": -41.60 },
    { "spawnPos": new mp.Vector3(474.1879577636719, -1019.0736083984375, 28.05853271484375), "spawnRot": -139.42 },
    { "spawnPos": new mp.Vector3(451.75885009765625, -1024.50048828125, 28.537582397460938), "spawnRot": 44.40 },
    { "spawnPos": new mp.Vector3(450.02459716796875, -1004.3184204101562, 26.779579162597656), "spawnRot": 178.24 },
    { "spawnPos": new mp.Vector3(434.0322570800781, -1004.2986450195312, 26.78179168701172), "spawnRot": 175.54 },
    { "spawnPos": new mp.Vector3(442.37548828125, -1001.0255126953125, 30.7198543548584), "spawnRot": 175.54 },
    { "spawnPos": new mp.Vector3(422.4784851074219, -1064.8544921875, 29.21346092224121), "spawnRot": 178.132 },
    { "spawnPos": new mp.Vector3(469.63238525390625, -1062.5814208984375, 29.211698532104492), "spawnRot": -171.06 },
    { "spawnPos": new mp.Vector3(486.69683837890625, -1081.3909912109375, 29.201322555541992), "spawnRot": 84.75 },
    { "spawnPos": new mp.Vector3(489.1794128417969, -1119.31494140625, 29.408781051635742), "spawnRot": -124.78 },
    { "spawnPos": new mp.Vector3(434.6791076660156, -1122.754638671875, 29.41895866394043), "spawnRot": 169.59 },
    { "spawnPos": new mp.Vector3(415.6197509765625, -1089.1612548828125, 30.057844161987305), "spawnRot": 101.04 }
]

let ProjectsSpawnList = [
    { "spawnPos": new mp.Vector3(-226.7412567138672, -1719.822021484375, 32.815513610839844), "spawnRot": -1.73 },
    { "spawnPos": new mp.Vector3(-216.78900146484375, -1651.9014892578125, 34.463314056396484), "spawnRot": 174.76 },
    { "spawnPos": new mp.Vector3(-211.81906127929688, -1635.423095703125, 33.58340835571289), "spawnRot": -90.53 },
    { "spawnPos": new mp.Vector3(-214.6099090576172, -1588.1466064453125, 34.86931610107422), "spawnRot": -14.47 },
    { "spawnPos": new mp.Vector3(-246.26095581054688, -1548.0394287109375, 31.732694625854492), "spawnRot": -140.78 },
    { "spawnPos": new mp.Vector3(-172.57594299316406, -1506.70068359375, 32.913597106933594), "spawnRot": -145.34 },
    { "spawnPos": new mp.Vector3(-116.1800308227539, -1553.218505859375, 33.96177673339844), "spawnRot": 96.94 },
    { "spawnPos": new mp.Vector3(-50.915489196777344, -1611.2591552734375, 29.26930046081543), "spawnRot": 97.59 },
    { "spawnPos": new mp.Vector3(-98.00008392333984, -1636.5797119140625, 32.10601806640625), "spawnRot": 7 },
    { "spawnPos": new mp.Vector3(-121.67083740234375, -1635.2713623046875, 32.17066955566406), "spawnRot": 59.75 },
    { "spawnPos": new mp.Vector3(-142.62655639648438, -1704.613037109375, 30.69638442993164), "spawnRot": 145.18 }
]

const InventarHandler = require("../InventarHandler/index.js");

function giveLobbyWeapons(player, arenaId)
{
    player.removeAllWeapons();
    for (let i = 0; i < lobbyList.Lobbys[arenaId].Weapons.length; i++) {
        player.giveWeapon(mp.joaat("weapon_"+lobbyList.Lobbys[arenaId].Weapons[i].Weaponname), 99999)
    }
}

function DefaultJoinLobby(player, arenaId)
{
    giveLobbyWeapons(player, arenaId)
    player.isLobby = true;
    player.currentLobby = arenaId;
    player.currentLobbyMap = lobbyList.Lobbys[arenaId].Map;
    player.dimension = arenaId + 200;
    spawnPlayerOnLobbySpawn(player);
}

function createLobby(player, array)
{
    array = JSON.parse(array);

    let result = lobbyList.Lobbys.find(element => element.Creator == player.name);
    let result2 = lobbyList.Lobbys.find(element => element.Name == array.Name);

    if (result)
    {
        player.call("DestroyPaintballBrowser");
        player.call("Client:CreateNotification", ["Server", "Du hast bereits eine Lobby!", 4000, "error", false])
    }
    else
    {
        if (result2 != null)
        {
            player.call("DestroyPaintballBrowser");
            player.call("Client:CreateNotification", ["Server", "Es existiert bereits ein Lobby mit diesem Namen!", 4000, "error", false])
        }
        else
        {
            lobbyList.Lobbys.push({"Name": array.Name, "Password": array.Password, "MaxPlayers": array.MaxPlayers, "MaxHealth": array.MaxHealth, "Map": array.Map, "Weapons": array.Weapons, "Players": 1, "Creator": player.name, "Private": true});
            player.call("DestroyPaintballBrowser");
            player.call("Client:CreateNotification", ["Server", "Du hast erfolgreich eine Lobby erstellt!", 4000, "success", false]);
            let arid = lobbyList.Lobbys.length - 1;
            DefaultJoinLobby(player, parseInt(arid));
        }
    }
}

function RemovePLayerFromLobby(lobbyid)
{
    lobbyid = parseInt(lobbyid);
    lobbyList.Lobbys[lobbyid].Players--;
    if (lobbyList.Lobbys[lobbyid].Players == 0)
    {
        //Lobby soll gelöscht werden
        lobbyList.Lobbys.splice(lobbyid, 1);
    }
}

function AddPlayerToLobby(lobbyid)
{
    lobbyid = parseInt(lobbyid);

    if (lobbyList.Lobbys[lobbyid].Players >= lobbyList.Lobbys[lobbyid].MaxPlayers) return player.call("Client:CreateNotification", ["Server", "Diese Lobby ist bereits voll!", 4000, "error", false]);
    lobbyList.Lobbys[lobbyid].Players++;
}

function spawnPlayerOnLobbySpawn(player)
{
    if (player.isLobby)
    {
        let rd;
        switch (player.currentLobbyMap) {
            case "Würfelpark":
                rd = Math.floor(Math.random() * WuerfelparkSpawnList.length);
                player.spawn(WuerfelparkSpawnList[rd].spawnPos);
                player.heading = WuerfelparkSpawnList[rd].spawnRot;
                player.armour = 100;
            break;
        
            case "LS Supply":
                rd = Math.floor(Math.random() * LSSupplySpawnList.length);
                player.spawn(LSSupplySpawnList[rd].spawnPos);
                player.heading = LSSupplySpawnList[rd].spawnRot;
                player.armour = 100;
            break;

            case "LSPD":
                rd = Math.floor(Math.random() * LSPDSpawnList.length);
                player.spawn(LSPDSpawnList[rd].spawnPos);
                player.heading = LSPDSpawnList[rd].spawnRot;
                player.armour = 100;
            break;

            case "Projects":
                rd = Math.floor(Math.random() * ProjectsSpawnList.length);
                player.spawn(ProjectsSpawnList[rd].spawnPos);
                player.heading = ProjectsSpawnList[rd].spawnRot;
                player.armour = 100;
            break;
            
            default:
            break;
        }
    }
}

mp.events.add("Server:SpawnPlayerToLobbySpawn", (player) => {
    if (player != null)
    {
        spawnPlayerOnLobbySpawn(player);
    }
});

module.exports = { RemovePLayerFromLobby, AddPlayerToLobby, spawnPlayerOnLobbySpawn }

mp.events.addCommand("lobby", (player) => {
    if (player.isFFA) return;
    if (player.isLobby) return;
    if (player.isOneVsOne) return;

    player.call("CreatePaintballBrowser", [`${JSON.stringify(lobbyList)}`]);
});

mp.events.addCommand("quitlobby", (player) => {
    if (player.isLobby)
    {
        player.dimension = 0;
        RemovePLayerFromLobby(player.currentLobby);
        player.isLobby = false;
        player.currentLobby = 0;
        player.currentLobbyMap = null;
        player.call("client:customEvalWithTimer", ["Server:SpawnPlayerToSpawn", 500]);
        player.call("Client:CreateNotification", ["Server", "Du hast erfolgreich die Lobby verlassen!", 4000, "success", false]);
        player.removeAllWeapons();
        InventarHandler.InvetarLoadWeapons(player);
    }
    else
    {
        player.call("Client:CreateNotification", ["Server", "Du bist in keiner Lobby!", 4000, "error", false])
    }
});

mp.events.add("Server:CreateLobby", (player, data) => {
    createLobby(player, data);
});

mp.events.add('Server:JoinLobby', (player, arenaId, password) => {
    if (player)
    {
        arenaId = parseInt(arenaId);
        try {
        if (lobbyList.Lobbys[arenaId].Password != password) return player.call("Client:CreateNotification", ["Server", "Das Passwort stimmt nicht überein!", 4000, "error", false]), player.call("DestroyPaintballBrowser");

        player.isLobby = true;
        player.currentLobby = arenaId;
        player.currentLobbyMap = lobbyList.Lobbys[arenaId].Map;
        player.dimension = arenaId + 200;
        player.call("DestroyPaintballBrowser");
        player.call("Client:CreateNotification", ["Server", "Du hast erfolgreich die Lobby betreten!", 4000, "success", false]);
        AddPlayerToLobby(arenaId);
        giveLobbyWeapons(player, arenaId)

        } catch (error) {
            console.log(error)
        }
    }
});