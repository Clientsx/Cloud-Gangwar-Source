module.exports = {
    isSocialClubExist : async function(socialclub)
    {
        const [rows, fields, err] = await cloudgw.query("SELECT socialclub FROM accounts WHERE socialclub = ?", [socialclub])
        if (err) console.log(err)
        if(rows.length > 0){
            return true;
        }
        return false;
    },
    isSerialExist : async function(socialclub, serial)
    {
        const [rows, fields, err] = await cloudgw.query("SELECT hwid FROM accounts WHERE hwid = ?", [serial])
        if (err) console.log(err)
        if(rows.length > 0){
            const [rows2, fields2, err2] = await cloudgw.query("UPDATE accounts SET socialclub = ? WHERE hwid = ?", [socialclub, serial])
            if (err2) console.log(err2);

            return true;
        }
        return false;
    },
    isUsernameExist : async function(username)
    {
        const [rows, fields, err] = await cloudgw.query("SELECT username FROM accounts WHERE username = ?", [username])
        if (err) console.log(err)
        if(rows.length > 0){
            return true;
        }
        return false;
    },
    isPlayerBanned : async function(serial)
    {
        const [rows, fields, err] = await cloudgw.query("SELECT * FROM accounts WHERE hwid = ?", [serial])
        if (err) console.log(err)
        if(rows.length > 0){
            let banid = rows[0].ban;
            if (banid == 1)
            {
                return true;
            }
        }
        return false;
    },
    createPlayerAccount : async function(username, socialclub, serial)
    {
        const [rows, fields, err] = await cloudgw.query("INSERT INTO accounts SET username = ?, socialclub = ?, hwid = ?", [username, socialclub, serial])
        if (err) console.log(err);
    },
    loadPlayerAccountBySocialClub : async function(player)
    {
        if (player != null && mp.players.exists(player))
        {
            const [rows, fields, err] = await cloudgw.query("SELECT * FROM accounts WHERE socialclub = ?", [player.socialClub])
            if(rows.length > 0){
                player.accountid = rows[0].accountid;
                player.name = rows[0].username;
                player.admin = rows[0].admin;
                player.kills = rows[0].kills;
                player.deaths = rows[0].deaths;
                player.level = rows[0].level;
                player.xp = rows[0].xp;
                player.maxxp = rows[0].maxxp;
                player.money = rows[0].money;
                player.inventar = JSON.parse(rows[0].userinventar);
                player.character = JSON.parse(rows[0].usercharacater);
                player.clothes = JSON.parse(rows[0].userclothes);
                player.lastHitter = null;
                player.assistHitter = null; 

                player.call("Client:Hud:InitHud", [player.accountid]);
                player.call("Client:SetMoney", [player.money]);
                player.call("Client:SetStats", [player.kills, player.deaths]);
                player.call("Client:SetStats2", [player.level, player.xp, player.maxxp]);
                player.call("Client:CreateNotification", ["Server", `Willkommen zurück ${player.name}`, 4000, "success", false]);
                player.resetAllWeaponComponents();
                player.call("CreateExtrasBrowser");

                if(rows[0].usercharacater == "[]")
                {
                    player.call("Camera:LoadCharacterCreator");
                } else {
                    player.call("Camera:LoadCharacter");
                }
            }
        }
    },
    loadPlayerAccountBySerial : async function(player)
    {
        if (player != null && mp.players.exists(player))
        {
            const [rows, fields, err] = await cloudgw.query("SELECT * FROM accounts WHERE hwid = ?", [player.serial])
            if(rows.length > 0){
                player.accountid = rows[0].accountid;
                player.name = rows[0].username;
                player.admin = rows[0].admin;
                player.kills = rows[0].kills;
                player.deaths = rows[0].deaths;
                player.level = rows[0].level;
                player.xp = rows[0].xp;
                player.maxxp = rows[0].maxxp;
                player.money = rows[0].money;
                player.inventar = JSON.parse(rows[0].userinventar);
                player.character = JSON.parse(rows[0].usercharacater);
                player.clothes = JSON.parse(rows[0].userclothes);
                player.lastHitter = null;
                player.assistHitter = null;

                player.call("Client:Hud:InitHud", [player.accountid]);
                player.call("Client:SetMoney", [player.money]);
                player.call("Client:SetStats", [player.kills, player.deaths]);
                player.call("Client:SetStats2", [player.level, player.xp, player.maxxp]);
                player.call("Client:CreateNotification", ["Server", `Willkommen zurück ${player.name}`, 4000, "success", false]);
                player.resetAllWeaponComponents();
                player.call("CreateExtrasBrowser");

                if(rows[0].usercharacater == "[]")
                {
                    player.call("Camera:LoadCharacterCreator");
                } else {
                    player.call("Camera:LoadCharacter");
                }
            }
        }
    },
    savePlayerCharacter : async function(player, socialclub, json)
    {
        if (player != null && mp.players.exists(player))
        {
            const [rows, fields, err] = await cloudgw.query("UPDATE accounts SET usercharacater = ? WHERE socialclub = ?", [JSON.stringify(json), socialclub])
            if (err) console.log(err);
            player.character = json;
            player.call("Camera:LoadCharacter");
        }
    },
    loadPlayerCharacter : async function(player)
    {
        if (player != null && mp.players.exists(player))
        {
            try {
                if (player.character[0].gender == 0)
                {
                    player.model = mp.joaat("mp_f_freemode_01");
                }
                else
                {
                    player.model = mp.joaat("mp_m_freemode_01");
                }

                player.setHeadBlend(parseInt(player.character[0].mother), parseInt(player.character[0].father), 0, parseInt(player.character[0].mother), parseInt(player.character[0].father), 0, parseFloat(player.character[0].similarity), parseFloat(player.character[0].skin_color), 0.0);
                player.eyeColor = parseInt(player.character[0].eye_color);
                player.setClothes(2, parseInt(player.character[0].hairstyle), 0, 0);
                player.setHairColor(parseInt(player.character[0].hairstyle_color), parseInt(player.character[0].hairstyle_color_highlight));
                player.setHeadOverlay(2, [parseInt(player.character[0].eyebrow), parseFloat(player.character[0].eyebrow_width), parseInt(player.character[0].eyebrow_color), parseInt(player.character[0].eyebrow_color)]);
                player.setHeadOverlay(1, [parseInt(player.character[0].beard), parseFloat(player.character[0].beard_visibility), parseInt(player.character[0].beard_color), parseInt(player.character[0].beard_color)]);
                player.setHeadOverlay(0, [parseInt(player.character[0].blemishes), parseFloat(player.character[0].blemishes_visibility), 0, 0]);
                player.setHeadOverlay(3, [parseInt(player.character[0].ageing), parseFloat(player.character[0].ageing_visibility), 0, 0]);
                player.setHeadOverlay(4, [parseInt(player.character[0].makeup), parseFloat(player.character[0].makeup_visibility), parseInt(player.character[0].makeup_color), parseInt(player.character[0].makeup_color)]);
                player.setHeadOverlay(5, [parseInt(player.character[0].blush), parseFloat(player.character[0].blush_strength), 0, 0]);
                player.setHeadOverlay(7, [parseInt(player.character[0].sundamage), parseFloat(player.character[0].sundamage_strength), 0, 0]);
                player.setHeadOverlay(8, [parseInt(player.character[0].lipstick), parseFloat(player.character[0].lipstick_visibility), parseInt(player.character[0].lipstick_color), parseInt(player.character[0].lipstick_color_sec)]);
                player.setHeadOverlay(9, [parseInt(player.character[0].moles), parseFloat(player.character[0].moles_strength), 0, 0]);
                player.setHeadOverlay(10, [parseInt(player.character[0].chesthair), parseFloat(player.character[0].chesthair_strength), parseInt(player.character[0].chesthair_color), parseInt(player.character[0].chesthair_color_sec)]);
                player.setHeadOverlay(11, [parseInt(player.character[0].bodyblemishes), parseFloat(player.character[0].bodyblemishes_strenght), 0, 0]);
                player.setFaceFeature(0, parseFloat(player.character[0].nose_width));
                player.setFaceFeature(1, parseFloat(player.character[0].nose_height));
                player.setFaceFeature(2, parseFloat(player.character[0].nose_length));
                player.setFaceFeature(3, parseFloat(player.character[0].nose_bridge));
                player.setFaceFeature(4, parseFloat(player.character[0].nose_tip));
                player.setFaceFeature(5, parseFloat(player.character[0].nose_bridge_shift));
                player.setFaceFeature(6, parseFloat(player.character[0].brow_height));
                player.setFaceFeature(7, parseFloat(player.character[0].brow_width));
                player.setFaceFeature(8, parseFloat(player.character[0].cheekbone_height));
                player.setFaceFeature(9, parseFloat(player.character[0].cheekbone_width));
                player.setFaceFeature(10, parseFloat(player.character[0].cheeks_width));
                player.setFaceFeature(11, parseFloat(player.character[0].eyes));
                player.setFaceFeature(12, parseFloat(player.character[0].lips));
                player.setFaceFeature(13, parseFloat(player.character[0].jaw_width));
                player.setFaceFeature(14, parseFloat(player.character[0].jaw_height));
                player.setFaceFeature(15, parseFloat(player.character[0].chin_length));
                player.setFaceFeature(16, parseFloat(player.character[0].chin_position));
                player.setFaceFeature(17, parseFloat(player.character[0].chin_width));
                player.setFaceFeature(18, parseFloat(player.character[0].chin_shape));
                player.setFaceFeature(19, parseFloat(player.character[0].neck_width));

                player.call("Client:CreateNotification", ["Server", "Charakter wurde geladen!", 4000, "success", false]);
                player.isLoggedIn = true;
                            
            } catch (error) {
                console.log(error)
            }
        }
    },
    savePlayerClothes : async function(socialclub, carr)
    {
        const [rows, fields, err] = await cloudgw.query("UPDATE accounts SET userclothes = ? WHERE socialclub = ?", [carr, socialclub])
        if (err) console.log(err);
    },
    savePlayerAccount : async function(player)
    {
        if (player != null && mp.players.exists(player))
        {
            const [rows, fields, err] = await cloudgw.query("UPDATE accounts SET kills = ?, deaths = ?, level = ?, xp = ?, maxxp = ?, money = ? WHERE socialclub = ?", [player.kills, player.deaths, player.level, player.xp, player.maxxp, player.money, player.socialClub])
            if (err) console.log(err);
        }
    },
    savePlayerAccountByQuit : async function(kills, deaths, level, xp, maxxp, money, socialClub)
    {
        const [rows, fields, err] = await cloudgw.query("UPDATE accounts SET kills = ?, deaths = ?, level = ?, xp = ?, maxxp = ?, money = ? WHERE socialclub = ?", [kills, deaths, level, xp, maxxp, money, socialClub])
        if (err) console.log(err);
    },
    savePlayerInventory : async function(player)
    {
        if (player != null && mp.players.exists(player))
        {
            const [rows, fields, err] = await cloudgw.query("UPDATE accounts SET userinventar = ? WHERE socialclub = ?", [JSON.stringify(player.inventar), player.socialClub])
            if (err) console.log(err);
        }
    }
};