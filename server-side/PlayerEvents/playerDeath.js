const TeamHandler = require("../TeamHandler/index.js");

let xpmultipler = 1;

// API
mp.Player.prototype.getKillsAgainst = function(player) {
    return this.__killCounter[player.id] || 0;
};

mp.events.add("playerDeath", (player, reason, killer) => {

    killer = player.lastHitter;
    let assistKiller = player.assistHitter;

    if (killer && mp.players.exists(killer))
    {
        if (killer.isFFA)
        {
            player.deaths++;
            player.killstreak = 0;
            player.outputChatBox(`Du wurdest von ${killer.name} getötet`);
            player.call("Client:SetStats", [player.kills, player.deaths]);
            player.call("client:Killcam", [killer]);

            killer.health = 100;
            killer.armour = 100;
            killer.money += 200;
            killer.xp += 100 * xpmultipler;
            killer.kills++;
            killer.killstreak++;
            checkLevelUp(killer);
            killer.call("Client:SetMoney", [killer.money]);
            killer.call("Client:SetStats", [killer.kills, killer.deaths]);

            if (hasKillStreak(killer.killstreak))
            {
                //Message
            }

            if (assistKiller != null && mp.players.exists(assistKiller))
            {
                assistKiller.money += 100;
                assistKiller.xp += 50 * xpmultipler;
                checkLevelUp(assistKiller);
                assistKiller.call("Client:SetMoney", [assistKiller.money]);
            }
        }
        else if (killer.isLobby)
        {
            player.outputChatBox(`Du wurdest von ${killer.name} getötet`);
            player.call("client:Killcam", [killer]);
            player.call("client:customEvalWithTimer", ["Server:SpawnPlayerToLobbySpawn", 2000]);

            killer.health = 100;
            killer.armour = 100;
            killer.xp += 50 * xpmultipler;
            checkLevelUp(killer);

            if (assistKiller != null && mp.players.exists(assistKiller))
            {
                assistKiller.xp += 25 * xpmultipler;
                checkLevelUp(assistKiller);
            }
        }
        else if (killer.isOneVsOne)
        {
            killer.__killCounter[player.id] = killer.getKillsAgainst(player) + 1;
            player.call("displayKillCounter", [ killer, killer.__killCounter[player.id], player.getKillsAgainst(killer) ]);
            killer.call("displayKillCounter", [ player, player.__killCounter[killer.id], killer.getKillsAgainst(player) ]);
        }
        else
        {
            player.isDead = true;
            player.deaths++;
            player.killstreak = 0;
            player.outputChatBox(`Du wurdest von ${killer.name} getötet`);
            player.call("Client:SetStats", [player.kills, player.deaths]);
            player.call("client:customEvalWithTimer", ["Server:SpawnPlayerToSpawn", 2000]);
            player.call("client:Killcam", [killer]);

            killer.money += 300;
            killer.xp += 150 * xpmultipler;
            killer.kills++;
            killer.killstreak++;
            checkLevelUp(killer);
            killer.call("Client:SetMoney", [killer.money]);
            killer.call("Client:SetStats", [killer.kills, killer.deaths]);

            if (hasKillStreak(killer.killstreak))
            {
                //Message
            }

            if (assistKiller != null && mp.players.exists(assistKiller))
            {
                assistKiller.money += 200;
                assistKiller.xp += 100 * xpmultipler;
                checkLevelUp(assistKiller);
                assistKiller.call("Client:SetMoney", [assistKiller.money]);
            }
        }
        player.lastHitter = null;
        player.assistHitter = null;
    }
    else
    {
        player.killstreak = 0;
        player.deaths++;
        player.call("Client:SetStats", [player.kills, player.deaths]); 
        if (player.isFFA)
        {

        }
        else if (player.isLobby)
        {
            player.call("client:customEvalWithTimer", ["Server:SpawnPlayerToLobbySpawn", 2000]);
        }
        else if (player.isOneVsOne)
        {

        }
        else
        {
            player.isDead = true;
            player.call("client:customEvalWithTimer", ["Server:SpawnPlayerToSpawn", 2000]);
        }
        player.lastHitter = null;
        player.assistHitter = null;
    }
});

function checkLevelUp(client)
{
    if (client.xp >= client.maxxp)
    {
        //Level Up
        client.xp -= client.maxxp;
        client.maxxp += client.maxxp;
        client.level++;
    }
    client.call("Client:SetStats2", [client.level, client.xp, client.maxxp]);
}

function setXpMultipler(player, value)
{
    xpmultipler = value;
    mp.players.broadcast(`[!{255, 0, 0}SERVER!{255, 255, 255}] Der XP-Multipler wurde von ${player.name} auf ${value} gestellt!`);
}

function hasKillStreak(value)
{
    if(value %= 6) 
        return false;

    return true;
}

mp.events.addCommand("setxpmulti", (player, value) => {
    if (player.admin >= 4)
    {
        setXpMultipler(player, value);
    }
});