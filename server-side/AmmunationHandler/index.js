let val = mp.colshapes.newCuboid(-57.0994758605957, -1228.9820556640625, 28.794052124023438, 2, 2, 2, 0);
val.shapeFunction = "Server:OpenAmmunation:Components";
val.arg1 = null;
val.arg2 = null;

mp.blips.new(567, new mp.Vector3(-57.0994758605957, -1228.9820556640625, 28.794052124023438),
    {
        name: 'Waffentuner',
        color: 1,
        scale: 0.7,
        shortRange: true,
});

mp.labels.new("« Waffen Aufsätze »", new mp.Vector3(-57.0994758605957, -1228.9820556640625, 28.794052124023438),
    {
        los: true,
        font: 0,
        drawDistance: 15,
        dimension: 0 
});

let val2 = mp.colshapes.newCuboid(-72.03636169433594, -1233.9700927734375, 29.08251953125, 2, 2, 2, 0);
val2.shapeFunction = "Server:OpenAmmunation:Tint";
val2.arg1 = null;
val2.arg2 = null;

mp.blips.new(567, new mp.Vector3(-72.03636169433594, -1233.9700927734375, 29.08251953125),
    {
        name: 'Waffentuner',
        color: 1,
        scale: 0.7,
        shortRange: true,
});

mp.labels.new("« Waffen Lackierungen »", new mp.Vector3(-72.03636169433594, -1233.9700927734375, 29.08251953125),
    {
        los: true,
        font: 0,
        drawDistance: 15,
        dimension: 0
});

let WeaponComponentList = [
    //Magazin 2
    { "Id": 1, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "pistol", "ItemId": 0, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_PISTOL_CLIP_02"},
    { "Id": 2, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "minismg", "ItemId": 1, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_MINISMG_CLIP_02"},
    { "Id": 3, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 2, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_ASSAULTRIFLE_CLIP_02"},
    { "Id": 4, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "advancedrifle", "ItemId": 3, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_ADVANCEDRIFLE_CLIP_02"},
    { "Id": 5, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "bullpuprifle", "ItemId": 4, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_BULLPUPRIFLE_CLIP_02"},
    { "Id": 6, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 5, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_CARBINERIFLE_CLIP_02"},
    { "Id": 7, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 6, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_SPECIALCARBINE_CLIP_02"},
    { "Id": 8, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "compactrifle", "ItemId": 7, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_COMPACTRIFLE_CLIP_02"},
    { "Id": 9, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "militaryrifle", "ItemId": 8, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_MILITARYRIFLE_CLIP_02"},
    { "Id": 10, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "heavyrifle", "ItemId": 9, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_HEAVYRIFLE_CLIP_02"},
    { "Id": 11, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "tacticalrifle", "ItemId": 10, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_TACTICALRIFLE_CLIP_02"},
    { "Id": 12, "AmmunationId": 1, "Category": 1, "ItemAmount": 1, "ItemImage": "gusenberg", "ItemId": 11, "ItemPrice": 10000, "Status": 1, "HashKey": "COMPONENT_GUSENBERG_CLIP_02"},

    //Magazin 3
    { "Id": 13, "AmmunationId": 1, "Category": 2, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 12, "ItemPrice": 15000, "Status": 1, "HashKey": "COMPONENT_ASSAULTRIFLE_CLIP_03"},
    { "Id": 14, "AmmunationId": 1, "Category": 2, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 13, "ItemPrice": 15000, "Status": 1, "HashKey": "COMPONENT_CARBINERIFLE_CLIP_03"},
    { "Id": 15, "AmmunationId": 1, "Category": 2, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 14, "ItemPrice": 15000, "Status": 1, "HashKey": "COMPONENT_SPECIALCARBINE_CLIP_03"},
    { "Id": 16, "AmmunationId": 1, "Category": 2, "ItemAmount": 1, "ItemImage": "compactrifle", "ItemId": 15, "ItemPrice": 15000, "Status": 1, "HashKey": "COMPONENT_COMPACTRIFLE_CLIP_03"},

    //Taschenlampe
    { "Id": 17, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "pistol", "ItemId": 16, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_PI_FLSH"},
    { "Id": 18, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 17, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 19, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "advancedrifle", "ItemId": 18, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 20, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "bullpuprifle", "ItemId": 19, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 21, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 20, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 22, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 21, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 23, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "militaryrifle", "ItemId": 22, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},
    { "Id": 24, "AmmunationId": 1, "Category": 3, "ItemAmount": 1, "ItemImage": "heavyrifle", "ItemId": 23, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_FLSH"},

    //Visier
    { "Id": 25, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 24, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_MACRO"},
    { "Id": 26, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "advancedrifle", "ItemId": 25, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_SMALL"},
    { "Id": 27, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "bullpuprifle", "ItemId": 26, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_SMALL"},
    { "Id": 28, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 27, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_MEDIUM"},
    { "Id": 29, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 28, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_MEDIUM"},
    { "Id": 30, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "militaryrifle", "ItemId": 29, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_SMALL"},
    { "Id": 31, "AmmunationId": 1, "Category": 4, "ItemAmount": 1, "ItemImage": "heavyrifle", "ItemId": 30, "ItemPrice": 8500, "Status": 1, "HashKey": "COMPONENT_AT_SCOPE_MEDIUM"},

    //Schaldämpfer
    { "Id": 32, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "pistol", "ItemId": 31, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_PI_SUPP_02"},
    { "Id": 33, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 32, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP_02"},
    { "Id": 34, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "advancedrifle", "ItemId": 33, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP"},
    { "Id": 35, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "bullpuprifle", "ItemId": 34, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP"},
    { "Id": 36, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 35, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP"},
    { "Id": 37, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 36, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP_02"},
    { "Id": 38, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "militaryrifle", "ItemId": 37, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP"},
    { "Id": 39, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "heavyrifle", "ItemId": 38, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP"},
    { "Id": 40, "AmmunationId": 1, "Category": 5, "ItemAmount": 1, "ItemImage": "tacticalrifle", "ItemId": 39, "ItemPrice": 13000, "Status": 1, "HashKey": "COMPONENT_AT_AR_SUPP_02"},

    //Griff
    { "Id": 41, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "assaultrifle", "ItemId": 40, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"},
    { "Id": 42, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "bullpuprifle", "ItemId": 41, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"},
    { "Id": 43, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "carbinerifle", "ItemId": 42, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"},
    { "Id": 44, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "specialcarbine", "ItemId": 43, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"},
    { "Id": 45, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "heavyrifle", "ItemId": 44, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"},
    { "Id": 46, "AmmunationId": 1, "Category": 6, "ItemAmount": 1, "ItemImage": "tacticalrifle", "ItemId": 45, "ItemPrice": 7500, "Status": 1, "HashKey": "COMPONENT_AT_AR_AFGRIP"}

]

mp.events.add('Server:OpenAmmunation:Components', (player) => {
    if (player)
    {
        try 
        {
            player.call("Client:Ammunation:OpenAmmunation", [`${JSON.stringify(WeaponComponentList)}`])
        }
        catch (error) 
        {
            console.log(error);
        }
    }
});

mp.events.add('Server:Ammunation:BuyItem', (player, selectedItemId, Price) => {
    if (player)
    {
        selectedItemId = parseInt(selectedItemId);
        Price = parseInt(Price);
        try 
        {
            if (player.money >= Price)
            {
                player.giveWeaponComponent(mp.joaat("weapon_" + WeaponComponentList[selectedItemId].ItemImage), mp.joaat(WeaponComponentList[selectedItemId].HashKey));
                player.money -= Price;
                player.call("Client:SetMoney", [player.money]);
                player.call("Client:CreateNotification", ["Server", `Du hast dir erfolgreich ein Waffenaufsatz für ${Price}$ gekauft!`, 4000, "success", false]);
            }
            else
            {
                player.call("Client:CreateNotification", ["Server", "Du hast nicht genug Geld!", 4000, "error", false])
            }
            player.call("Client:Ammunation:Destroy");
        }
        catch (error) 
        {
            console.log(error);
        }
    }
});

mp.events.add('Server:OpenAmmunation:Tint', (player) => {
    if (player)
    {
        try 
        {
            //player.call("Client:Ammunation:OpenAmmunationTint", [/*hier kommt die JSON*/])
        }
        catch (error) 
        {
            console.log(error);
        }
    }
});