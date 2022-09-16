function getAdminRankByName(id)
{
    switch (id) {
        case 0:
            return "!{255, 255, 255}Spieler";
        break;
        case 1:
            return "!{93, 138, 168}Test Supporter";
        break;
        case 2:
            return "!{#84DE02}Supporter";
        break;
        case 3:
            return "!{0, 48, 143}Moderator";
        break;
        case 4:
            return "!{#FF7E00}Administrator";
        break;
        case 5:
            return "!{#6A0080}Super Administrator";
        break;
        case 6:
            return "!{#B30000}Manager";
        break;
        case 7:
            return "!{#D3212D}Stv. Projektleitung";
        break;
        case 8:
            return "!{255, 0, 0}Projektleitung";
        break;
        default:
            return "!{255, 0, 255}Opfer"
        break;
    }
}

function getFraktionColorById(player) {
    switch (player.getVariable("frakid")) {
        case 0:
            return "!{187, 51, 255}";
        break;
        case 1:
            return "!{0, 255, 0}";
        break;
        case 2:
            return "!{255, 255, 0}";
        break;
        case 3:
            return "!{0, 0, 255}";
        break;
        case 4:
            return "!{255, 0, 0}";
        break;
        case 5:
            return "!{138, 137, 135}";
        break;
        case 6:
            return "!{0, 0, 0}";
        break;
        case 7:
            return "!{0, 21, 128}";
        break;
        case 8:
            return "!{179, 0, 0}";
        break;
    
        default:
            return "!{120, 255, 0}";
        break;
    }
}

function convertFrakIdToName(id)
{
    switch (id) {
        case 0:
            return "Ballas";
        case 1:
            return "Grove";
        case 2:
            return "Vagos";
        case 3:
            return "Crips";
        case 4:
            return "Bloods";
        case 5:
            return "Lost";
        case 6:
            return "LCN";
        case 7:
            return "Triaden";
        case 8:
            return "Yakuza";
        default:
            return "Nigga";
    }
}


mp.events.add("playerChat", (player, message) => {
    if (message == null) return;
    mp.players.broadcast(`${getFraktionColorById(player)}${convertFrakIdToName(player.getVariable("frakid"))}!{255, 255, 255} | [${getAdminRankByName(player.admin)}!{255, 255, 255}] ${player.name} [${player.accountid}] » ${message}`);
});

mp.events.addCommand("t", (player, message) => {
    if (message == null) return;
    mp.players.forEach(_player => {
        if(_player.getVariable("frakid") == player.getVariable("frakid"))
        {
            _player.outputChatBox(`[!{#00AAFF}TEAMCHAT!{255, 255, 255}] | [${getAdminRankByName(player.admin)}!{255, 255, 255}] ${player.name} [${player.accountid}] » ${message}`)
        }
    });
});