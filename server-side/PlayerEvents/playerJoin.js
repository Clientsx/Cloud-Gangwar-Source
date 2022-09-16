const AccountHandler = require("../AccountHandler/index.js");
const TeamHandler = require("../TeamHandler/index.js");
const ClothingHandler = require("../ClothingHandler/index.js");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

mp.events.add('playerJoin', async (player) => {
    player.spawn(new mp.Vector3(-774.1891479492188, 760.9706420898438, 212.19886779785156))
    player.heading = -26.911407470703125;
    player.setVariable("frakid", 187);
    player.isLoggedIn = false;
    player.__killCounter = {};
    if (await AccountHandler.isSocialClubExist(player.socialClub))
    {
        if (await AccountHandler.isPlayerBanned(player.serial))
        {
            //Kick weil gebannt
        }
        else
        {
            player.call("Client:CreateHud");
            await AccountHandler.loadPlayerAccountBySocialClub(player);
        }
    }
    else if (await AccountHandler.isSerialExist(player.socialClub, player.serial))
    {
        if (await AccountHandler.isPlayerBanned(player.serial))
        {
            //Kick weil gebannt
        }
        else
        {
            player.call("Client:CreateHud");
            await AccountHandler.loadPlayerAccountBySocialClub(player);
        }
    }
    else
    {
        player.dimension = getRandomInt(400, 1000);
        player.call("Camera:StartCam")
        let dialog = [{"title": "Registrieren", "discription": "Gib ein Benutzername ein", "buttons": [{"name": "Bestätigen", "eventname": "Server:TryRegister", "value": "", "arguments": ""}]}];
        player.call("Client:CreateHud");
        player.call("Client:DialogInput:Create", [`${JSON.stringify(dialog)}`]);
    }
});

mp.events.add('Server:TryRegister', async (player, value, ...args) => {
    if (player)
    {
        try {
            if (await AccountHandler.isUsernameExist(value))
            {
                //Username existiert bereits
                player.call("Client:CreateNotification", ["Server", "Dieser Benutzername existiert bereits", 4000, "error", false])
            }
            else
            {
                player.call("Camera:SpawnPlayer");
                player.call("Client:Dialog:Destory");
                player.call("Client:CreateNotification", ["Server", "Du hast erfolgreich ein Account erstellt!", 4000, "success", false]);
                AccountHandler.createPlayerAccount(value, player.socialClub, player.serial);
                await AccountHandler.loadPlayerAccountBySocialClub(player);
                //Soll zum Charcreator
            }
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('OpenCharcreatorPlayer', (player) => {
    if (player)
    {
        try {
            player.spawn(new mp.Vector3(258.62967, 216.20663, 101.68338));
            player.heading = 69.018906;
            player.call("Client:CharCreator:OpenWindow");
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Server:CharCreator:Leave', async (player, json) => {
    if (player)
    {
        try {
            json = JSON.parse(json);
            AccountHandler.savePlayerCharacter(player, player.socialClub, json);
            player.call("Client:CharCreator:DestroyWindow");
            if (json[0].gender == 0)
            {
                ClothingHandler.saveStandardClothesWomen(player);
            }
            else
            {
                ClothingHandler.saveStandardClothesMen(player);
            }

        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Server:LoadCharacter', async (player) => {
    if (player)
    {
        try {
            await AccountHandler.loadPlayerCharacter(player);
            TeamHandler.openTeamAuswahl(player);

        } catch (error) {
            console.log(error)
        }
    }
});