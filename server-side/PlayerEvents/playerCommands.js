const GiftHandler = require("../GiftHandler/index.js");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let GiftList = [
    { "Giftname": "20000$", "Action": "GivePlayerMoney", "Arg1": 20000, "Arg2": null },
    { "Giftname": "40000$", "Action": "GivePlayerMoney", "Arg1": 40000, "Arg2": null },
    { "Giftname": "3 Token", "Action": "GivePlayerToken", "Arg1": 3, "Arg2": null },
    { "Giftname": "6 Token", "Action": "GivePlayerToken", "Arg1": 6, "Arg2": null },
    { "Giftname": "1 Level", "Action": "GivePlayerLevel", "Arg1": 1, "Arg2": null },
    { "Giftname": "100 XP", "Action": "GivePlayerXP", "Arg1": 100, "Arg2": null },
    { "Giftname": "500 XP", "Action": "GivePlayerXP", "Arg1": 500, "Arg2": null },
    { "Giftname": "20000$", "Action": "GivePlayerMoney", "Arg1": 20000, "Arg2": null },
    { "Giftname": "20000$", "Action": "GivePlayerMoney", "Arg1": 20000, "Arg2": null },
    { "Giftname": "20000$", "Action": "GivePlayerMoney", "Arg1": 20000, "Arg2": null },
    { "Giftname": "20000$", "Action": "GivePlayerMoney", "Arg1": 20000, "Arg2": null }
]

mp.events.addCommand("gift", async (player) => {
    if (player.isLoggedIn)
    {
        if (await GiftHandler.hasgiftused(player.accountid))
        {
            let randomGift = getRandomInt(0, 10);
            player.call("Client:CreateNotification", ["Gift", `Du hast ${GiftList[randomGift].Giftname} erhalten!`, 4000, "success", false]);
            player.eval("mp.events.callRemote('" + GiftList[randomGift].Action + "', '" + GiftList[randomGift].Arg1 + "');");
            GiftHandler.creategift(player.accountid, GiftList[randomGift].Giftname);
        }
        else
        {
            player.call("Client:CreateNotification", ["Gift", "Du hast dein Gift bereits abgeholt!", 4000, "error", false])
        }
    }
});

mp.events.add("GivePlayerMoney", (player, arg1) => {
    if (player.isLoggedIn)
    {
        arg1 = parseInt(arg1);
        player.money += arg1;
    }
});

mp.events.add("GivePlayerLevel", (player, arg1) => {
    if (player.isLoggedIn)
    {
        arg1 = parseInt(arg1);
        player.level += arg1;
        client.call("Client:SetStats2", [player.level, player.xp, player.maxxp]);
    }
});

mp.events.add("GivePlayerXP", (player, arg1) => {
    if (player.isLoggedIn)
    {
        arg1 = parseInt(arg1);
        player.xp += arg1;
        checkLevelUp(player)
    }
});

mp.events.add("GivePlayerToken", (player, arg1) => {
    if (player.isLoggedIn)
    {
        arg1 = parseInt(arg1);

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

mp.events.add("report", (player, args) => {
    if (player.isLoggedIn)
    {
        //soll nachricht an admins senden
    }
});