const TeamHandler = require("../TeamHandler/index.js");
const AccountHandler = require("../AccountHandler/index.js");
const LobbyHandler = require("../LobbyHandler/index.js");

mp.events.add("playerQuit", (player) => {
    TeamHandler.removePlayerToTeam(player.getVariable("frakid"));
    AccountHandler.savePlayerAccountByQuit(player.kills, player.deaths, player.level, player.xp, player.maxxp, player.money, player.socialClub);

    if (player.isLobby)
    {
        LobbyHandler.RemovePLayerFromLobby(player.currentLobby);
    }

    mp.players.forEach((otherPlayer) => {
        delete otherPlayer.__killCounter[player.id];
    });
});