var weaponShopWindow = null;
let isOpen = false;

mp.events.add('Client:Ammunation:OpenAmmunation', (rawjson) => {
    try {

        if (weaponShopWindow == null) {
            weaponShopWindow = mp.browsers.new("package://cef/WeaponStore/index.html");
            isOpen = true;
            mp.gui.cursor.show(true, true);
            mp.game.ui.displayRadar(false);
            mp.players.local.freezePosition(true);
            if (weaponShopWindow != null) {
                weaponShopWindow.execute(`LoadWeaponStore('${rawjson}')`);
            }
            mp.events.call('Client:ToggleHud', false);
        }
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

mp.events.add('Client:Ammunation:Destroy', () => {
    try {
        if (weaponShopWindow != null) {
            weaponShopWindow.destroy();
            weaponShopWindow = null;
            isOpen = false;
            mp.game.ui.displayRadar(true);
            mp.players.local.freezePosition(false);
            mp.gui.cursor.show(false, false);
            mp.events.call('Client:ToggleHud', true);
        }
    } catch (error) {
        mp.game.graphics.notify(error);
    }
});

mp.events.add("Client:Ammunation:BuyItem", (selectedItemId, Price) => {
    if (selectedItemId != null && weaponShopWindow != null) {
        mp.events.callRemote("Server:Ammunation:BuyItem", selectedItemId, Price)
    }
})

mp.events.add("Client:Ammunation:SellItem", (selectedItemId, ItemAmount, Price) => {
    if (selectedItemId != null && weaponShopWindow != null) {
        mp.events.callRemote("Server:Ammunation:SellItem", selectedItemId, ItemAmount, Price)
    }
})