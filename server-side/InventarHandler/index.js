const AccountHandler = require("../AccountHandler/index.js");

mp.events.add('Server:Inventory:UseItemOnSlot', (player, id) => {
    if (player)
    {
        try {
            id = parseInt(id);
            if (id == 0)
            {
                player.call("Client:StartProgress", [3.5]);
                player.playAnimation('amb@medic@standing@kneel@idle_a', 'idle_a', 50, 15);
            }
            else if (id == 1)
            {
                player.call("Client:StartProgress", [3.5]);
                player.playAnimation('anim@heists@narcotics@funding@gang_idle', 'gang_chatting_idle01', 50, 15);
            }
            else
            {
                player.call("Client:StartProgress", [4]);
                player.playAnimation('mini@repair', 'fixing_a_ped', 10, 15);
            }
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Server:Inventory:FinishUseItemOnSlot', (player, id, obj) => {
    if (player)
    {
        try {
            id = parseInt(id);
            if (id == 0)
            {
                player.stopAnimation();
                player.health = 100;
                player.call("Client:CreateNotification", ["Inventar", "Du hast erfolgreich ein Verbanskasten gezogen!", 4000, "success", false]);
            }
            else if (id == 1)
            {
                player.stopAnimation();
                player.armour = 100;
                player.call("Client:CreateNotification", ["Inventar", "Du hast erfolgreich eine Schutzweste gezogen!", 4000, "success", false]);
            }
            else
            {
                player.stopAnimation();
                if (obj != null && mp.vehicles.exists(obj))
                {
                    obj.repair();
                    player.call("Client:CreateNotification", ["Inventar", "Du hast erfolgreich das Fahrzeug repariert!", 4000, "success", false]);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Server:KeyHandler:I', (player) => {
    if (player)
    {
        try {
            if (player.isDead) return;
            if (player.isFFA) return;
            if (player.isLobby) return;
            if (player.isOneVsOne) return;

            player.call("Client:Inventory:TriggerInventory", [`${player.name}`, `${player.money}`, `${JSON.stringify(player.inventar)}`])

        } catch (error) {
            console.log(error)
        }
    }
});

function InvetarLoadWeapons(player)
{
    if (player != null && mp.players.exists(player))
    {
        player.removeAllWeapons();
        for (let i = 0; i < player.inventar[0].Slots.length; i++) {
            if (player.inventar[0].Slots[i].Item != null)
            {
                player.giveWeapon(mp.joaat("weapon_"+player.inventar[0].Slots[i].Item.Image), 99999);
            }
        }
    }
}

module.exports = { InvetarLoadWeapons }

let ItemList = [
    { "Id": 1, "Name": "Pistole", "Weight": 0, "MaxCount":1, "Image":"pistol", "Is_Weapon":true, "Type":4, "ItemScript":"pistol" },
    { "Id": 2, "Name": "MiniSMG", "Weight": 0, "MaxCount":1, "Image":"minismg", "Is_Weapon":true, "Type":4, "ItemScript":"minismg" },
    { "Id": 3, "Name": "Assaultrifle", "Weight": 0, "MaxCount":1, "Image":"assaultrifle", "Is_Weapon":true, "Type":4, "ItemScript":"assaultrifle" },
    { "Id": 4, "Name": "Bullpuprifle", "Weight": 0, "MaxCount":1, "Image":"bullpuprifle", "Is_Weapon":true, "Type":4, "ItemScript":"bullpuprifle" },
    { "Id": 5, "Name": "Carbinerifle", "Weight": 0, "MaxCount":1, "Image":"carbinerifle", "Is_Weapon":true, "Type":4, "ItemScript":"carbinerifle" },
    { "Id": 6, "Name": "Specialcarbine", "Weight": 0, "MaxCount":1, "Image":"specialcarbine", "Is_Weapon":true, "Type":4, "ItemScript":"specialcarbine" },
    { "Id": 7, "Name": "Compactrifle", "Weight": 0, "MaxCount":1, "Image":"compactrifle", "Is_Weapon":true, "Type":4, "ItemScript":"compactrifle" },
    { "Id": 8, "Name": "Militaryrifle", "Weight": 0, "MaxCount":1, "Image":"militaryrifle", "Is_Weapon":true, "Type":4, "ItemScript":"militaryrifle" },
    { "Id": 9, "Name": "Heavyrifle", "Weight": 0, "MaxCount":1, "Image":"heavyrifle", "Is_Weapon":true, "Type":4, "ItemScript":"heavyrifle" },
    { "Id": 10, "Name": "Tacticalrifle", "Weight": 0, "MaxCount":1, "Image":"tacticalrifle", "Is_Weapon":true, "Type":4, "ItemScript":"tacticalrifle" },
    { "Id": 11, "Name": "Gusenberg", "Weight": 0, "MaxCount":1, "Image":"gusenberg", "Is_Weapon":true, "Type":4, "ItemScript":"gusenberg" },
    { "Id": 12, "Name": "Advancedrifle", "Weight": 0, "MaxCount":1, "Image":"advancedrifle", "Is_Weapon":true, "Type":4, "ItemScript":"advancedrifle" }
]

mp.events.add('Server:Inventory:MoveItem', (player, currentSlot, newSlot, currentContainer, newContainer, oldItemID, newItemID, externalOldID, externalOldType, externalNewID, externalNewType) => {
    if (player)
    {
        if (player.isDead) return;
        if (player.isFFA) return;
        if (player.isLobby) return;
        if (player.isOneVsOne) return;
        
        newItemID = parseInt(newItemID);
        oldItemID = parseInt(oldItemID)
        currentSlot = parseInt(currentSlot);
        newSlot = parseInt(newSlot);
        currentContainer = parseInt(currentContainer);
        newContainer = parseInt(newContainer);
        try {
            if (currentContainer != newContainer)
            {
                oldItemID--;
                currentContainer--;
                newContainer--;
                player.inventar[currentContainer].Slots[currentSlot].Item = null;
                player.inventar[newContainer].Slots[newSlot].Item = { "Id": ItemList[oldItemID].Id, "Name": ItemList[oldItemID].Name, "Weight": 0, "MaxCount":1, "Image": ItemList[oldItemID].Image, "Is_Weapon":true, "Type":4, "ItemScript": ItemList[oldItemID].ItemScript };
            }
            else
            {
                oldItemID--;
                player.inventar[0].Slots[currentSlot].Item = null;
                player.inventar[0].Slots[newSlot].Item = { "Id": ItemList[oldItemID].Id, "Name": ItemList[oldItemID].Name, "Weight": 0, "MaxCount":1, "Image": ItemList[oldItemID].Image, "Is_Weapon":true, "Type":4, "ItemScript": ItemList[oldItemID].ItemScript };
            }
            AccountHandler.savePlayerInventory(player);
            InvetarLoadWeapons(player);

        } catch (error) {
            console.log(error)
        }
    }
});