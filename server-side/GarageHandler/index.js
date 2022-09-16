let GarageList = [];
let GarageVehicleList = [];

/*
    0: Ballas
    1: Grove
    2: Vagos
    3: Crips
    4: Bloods
    5: Lost MC
    6: LCN
    7: Triaden
    8: Yakuza
*/

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

function converFrakIdToColor(id)
{
    switch (id) {
        case 0:
            return 145;
        case 1:
            return 53;
        case 2:
            return 89;
        case 3:
            return 79;
        case 4:
            return 150;
        case 5:
            return 100;
        case 6:
            return 0;
        case 7:
            return 75;
        case 8:
            return 34;
        default:
            return 135;
    }
}

function initGarages()
{
    GarageList.push({"name": "Ballas Garage", "position": new mp.Vector3(-68.70169830322266, -1457.8624267578125, 32.114906311035156), "size": 2, "parkOutPosition": new mp.Vector3(-76.43873596191406, -1457.68017578125, 31.72703742980957), "parkOutRotation": -148.94, "frakid": 0});
    GarageList.push({"name": "Ballas Garage", "position": new mp.Vector3(-20.762664794921875, -1437.246826171875, 30.653226852416992), "size": 2, "parkOutPosition": new mp.Vector3(-25.492647171020508, -1447.261962890625, 30.28445053100586), "parkOutRotation": -179.45, "frakid": 0});
    GarageList.push({"name": "Grove Garage", "position": new mp.Vector3(105.43217468261719, -1959.7501220703125, 20.832748413085938), "size": 2, "parkOutPosition": new mp.Vector3(102.8975601196289, -1955.8157958984375, 20.365398406982422), "parkOutRotation": -3.093, "frakid": 1});
    GarageList.push({"name": "Grove Garage", "position": new mp.Vector3(83.86146545410156, -1973.67724609375, 20.93134117126465), "size": 2, "parkOutPosition": new mp.Vector3(87.12933349609375, -1970.026123046875, 20.398012161254883), "parkOutRotation": -40.171, "frakid": 1});
    GarageList.push({"name": "Vagos Garage", "position": new mp.Vector3(824.3113403320312, -2116.092041015625, 29.37038803100586), "size": 2, "parkOutPosition": new mp.Vector3(820.7044067382812, -2117.18017578125, 29.004636764526367), "parkOutRotation": 175.78, "frakid": 2});
    GarageList.push({"name": "Vagos Garage", "position": new mp.Vector3(817.3662719726562, -2147.25390625, 29.32968521118164), "size": 2, "parkOutPosition": new mp.Vector3(821.2304077148438, -2145.544921875, 28.3974475860595), "parkOutRotation": 1.48, "frakid": 2});
    GarageList.push({"name": "Crips Garage", "position": new mp.Vector3(478.8912048339844, -1793.2144775390625, 28.545063018798828), "size": 2, "parkOutPosition": new mp.Vector3(478.9545593261719, -1797.312744140625, 28.155302047729492), "parkOutRotation": -129.38, "frakid": 3});
    GarageList.push({"name": "Crips Garage", "position": new mp.Vector3(464.86834716796875, -1740.8631591796875, 29.107397079467773), "size": 2, "parkOutPosition": new mp.Vector3(468.96728515625, -1742.2506103515625, 28.623903274536133), "parkOutRotation": -110.91, "frakid": 3});
    GarageList.push({"name": "Bloods Garage", "position": new mp.Vector3(1159.46728515625, -1643.7471923828125, 36.954063415527344), "size": 2, "parkOutPosition": new mp.Vector3(1158.9356689453125, -1647.38916015625, 36.570167541503906), "parkOutRotation": -152.45, "frakid": 4});
    GarageList.push({"name": "Bloods Garage", "position": new mp.Vector3(1256.1590576171875, -1618.4476318359375, 53.25006103515625), "size": 2, "parkOutPosition": new mp.Vector3(1253.7581787109375, -1621.5003662109375, 53.06547927856445), "parkOutRotation": 33.96, "frakid": 4});
    GarageList.push({"name": "Bloods Garage", "position": new mp.Vector3(1226.8035888671875, -1599.921875, 52.11760711669922), "size": 2, "parkOutPosition": new mp.Vector3(1226.1182861328125, -1603.181396484375, 51.54163360595703), "parkOutRotation": -146.40, "frakid": 4});
    GarageList.push({"name": "Lost MC Garage", "position": new mp.Vector3(-440.57293701171875, -1693.7218017578125, 19.20148468017578), "size": 2, "parkOutPosition": new mp.Vector3(-442.2134094238281, -1698.3802490234375, 18.591081619262695), "parkOutRotation": 161.349, "frakid": 5});
    GarageList.push({"name": "LCN Garage", "position": new mp.Vector3(-1534.232177734375, 80.42528533935547, 56.774349212646484), "size": 2, "parkOutPosition": new mp.Vector3(-1530.75, 84.15354919433594, 56.211177825927734), "parkOutRotation": -42.67, "frakid": 6});
    GarageList.push({"name": "LCN Garage", "position": new mp.Vector3(-1545.5672607421875, 104.28636932373047, 56.7799186706543), "size": 2, "parkOutPosition": new mp.Vector3(-1549.0198974609375, 107.36896514892578, 56.28794860839844), "parkOutRotation": 46.865, "frakid": 6});
    GarageList.push({"name": "Triaden Garage", "position": new mp.Vector3(-1785.8265380859375, 456.294921875, 128.3081665039062), "size": 2, "parkOutPosition": new mp.Vector3(-1790.308349609375, 456.3517761230469, 127.81635284423828), "parkOutRotation": 93.03, "frakid": 7});
    GarageList.push({"name": "Yakuza Garage", "position": new mp.Vector3(-1553.9100341796875, 880.50341796875, 181.3463134765625), "size": 2, "parkOutPosition": new mp.Vector3(-1551.0587158203125, 879.8195190429688, 180.8311309814453), "parkOutRotation": -160.63, "frakid": 8});
}

function initGarageVehicles()
{
    GarageVehicleList.push({"Id": 0, "DisplayName": "F620", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 1","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 1});
    GarageVehicleList.push({"Id": 1, "DisplayName": "Sentinel", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 1","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 1});
    GarageVehicleList.push({"Id": 2, "DisplayName": "Oracle", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 2","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 2});
    GarageVehicleList.push({"Id": 3, "DisplayName": "Buffalo", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 3","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 3});
    GarageVehicleList.push({"Id": 4, "DisplayName": "Jackal", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 3","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 3});
    GarageVehicleList.push({"Id": 5, "DisplayName": "Primo2", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 5","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 5});
    GarageVehicleList.push({"Id": 6, "DisplayName": "Dominator", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 7","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 7});
    GarageVehicleList.push({"Id": 7, "DisplayName": "Dominator7", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 10","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 10});
    GarageVehicleList.push({"Id": 8, "DisplayName": "Elegy", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 11","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 11});
    GarageVehicleList.push({"Id": 9, "DisplayName": "Baller3", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 13","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 13});
    GarageVehicleList.push({"Id": 10, "DisplayName": "Dubsta", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 15","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 15});
    GarageVehicleList.push({"Id": 11, "DisplayName": "Carbonrs", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 15","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 15});
    GarageVehicleList.push({"Id": 12, "DisplayName": "Double", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 18","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 18});
    GarageVehicleList.push({"Id": 13, "DisplayName": "Bati", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 18","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 18});
    GarageVehicleList.push({"Id": 14, "DisplayName": "Schafter", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 20","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 20});
    GarageVehicleList.push({"Id": 15, "DisplayName": "Fq2", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 22","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 22});
    GarageVehicleList.push({"Id": 16, "DisplayName": "Xls", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 23","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 23});
    GarageVehicleList.push({"Id": 17, "DisplayName": "Raiden", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 25","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 25});
    GarageVehicleList.push({"Id": 18, "DisplayName": "Coquette", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 28","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 28});
    GarageVehicleList.push({"Id": 19, "DisplayName": "Drafter", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 30","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 30});
    GarageVehicleList.push({"Id": 20, "DisplayName": "Neon", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 35","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 35});
    GarageVehicleList.push({"Id": 21, "DisplayName": "Revolter", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 38","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 38});
    GarageVehicleList.push({"Id": 22, "DisplayName": "Neo", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 40","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 40});
    GarageVehicleList.push({"Id": 23, "DisplayName": "Hakuchou", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 40","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 40});
    GarageVehicleList.push({"Id": 24, "DisplayName": "Raptor", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 43","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 43});
    GarageVehicleList.push({"Id": 25, "DisplayName": "Specter", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 45","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 45});
    GarageVehicleList.push({"Id": 26, "DisplayName": "Seven70", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 48","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 48});
    GarageVehicleList.push({"Id": 27, "DisplayName": "Schlagen", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 50","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 50});
    GarageVehicleList.push({"Id": 28, "DisplayName": "Havok", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 50","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 50});
    GarageVehicleList.push({"Id": 29, "DisplayName": "Cyclone", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 52","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 52});
    GarageVehicleList.push({"Id": 30, "DisplayName": "Italigtb", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 55","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 55});
    GarageVehicleList.push({"Id": 31, "DisplayName": "Krieger", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 60","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 60});
    GarageVehicleList.push({"Id": 32, "DisplayName": "Nero2", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 63","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 63});
    GarageVehicleList.push({"Id": 33, "DisplayName": "Thrax", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 63","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 63});
    GarageVehicleList.push({"Id": 34, "DisplayName": "Tigon", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 67","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 67});
    GarageVehicleList.push({"Id": 35, "DisplayName": "Turismor", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 70","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 70});
    GarageVehicleList.push({"Id": 36, "DisplayName": "Tyrant", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 74","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 74});
    GarageVehicleList.push({"Id": 37, "DisplayName": "XA21", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 77","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 77});
    GarageVehicleList.push({"Id": 38, "DisplayName": "Vagner", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 80","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 80});
    GarageVehicleList.push({"Id": 39, "DisplayName": "Tempesta", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 85","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 85});
    GarageVehicleList.push({"Id": 40, "DisplayName": "Taipan", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 88","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 88});
    GarageVehicleList.push({"Id": 41, "DisplayName": "Reaper", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 94","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 94});
    GarageVehicleList.push({"Id": 42, "DisplayName": "Tezeract", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 99","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 99});
    GarageVehicleList.push({"Id": 43, "DisplayName": "Prototipo", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 99","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 99});
    GarageVehicleList.push({"Id": 44, "DisplayName": "Pfister811", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 100","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 100});
    GarageVehicleList.push({"Id": 45, "DisplayName": "Volatus", "Health": 100, "Fuel":100,"NumberPlate": "Verfügbar ab Level: 120","Km":0,"TrunkWeight":0,"Note":"-","IsParked":false, "minLevel": 120});
}

initGarages();
initGarageVehicles();

function loadGarages(){
    for (let i = 0; i < GarageList.length; i++) {
        let val = mp.colshapes.newCuboid(GarageList[i].position.x, GarageList[i].position.y, GarageList[i].position.z, 2, 2, 2, 0);
        val.shapeFunction = "Server:OpenGarage";
        val.arg1 = i;
        val.arg2 = GarageList[i].frakid;
    }
    console.log(`[GARAGE] Es wurden ${GarageList.length} Garagen geladen.`);
}

mp.events.add('Server:OpenGarage', (player, id, frakid) => {
    if (player)
    {
        id = parseInt(id);
        try 
        {
            if (player.getVariable("frakid") == frakid)
            {
                player.call("Client:CreateGarage", [`${JSON.stringify(GarageVehicleList)}`, id, `${GarageList[id].name}`]);
            } else {
                player.call("Client:CreateNotification", ["Garage", "Du hast kein zugriff auf diese Garage!", 4000, "error", false])
            }
        }
        catch (error) 
        {
            console.log(error);
        }
    }
});

setTimeout(() => {
    loadGarages();
}, 1000);

mp.events.add('Server:Garage:ParkOutVehicle', (player, garageId, vehicleID) => {
    if (player)
    {
        garageId = parseInt(garageId);
        vehicleID = parseInt(vehicleID);
        try 
        {
            if (GarageVehicleList[vehicleID].minLevel > player.level) return player.call("Client:CreateNotification", ["Garage", "Du hast dieses Level noch nicht erreicht!", 4000, "error", false]);
            
            mp.vehicles.forEach(element => {
                if (element.owner == player.name)
                {
                    element.destroy();
                }
            });
            
            let car = mp.vehicles.new(mp.joaat(GarageVehicleList[vehicleID].DisplayName), GarageList[garageId].parkOutPosition,
            {
                heading: GarageList[garageId].parkOutRotation,
                numberPlate: "",
                color: [[0, 0, 0],[0, 0, 0]]
            });
            car.numberPlate = convertFrakIdToName(GarageList[garageId].frakid);
            car.owner = player.name;
            player.putIntoVehicle(car, 0);
            let col = converFrakIdToColor(GarageList[garageId].frakid);
            car.setColor(col, col);
            player.call("Client:CreateNotification", ["Garage", "Du hast erfolgreich ein Frahzeug ausgeparkt!", 4000, "success", false]);
        }
        catch (error) 
        {
            console.log(error);
        }
    }
});

mp.events.addCommand("veh", (player, model) => {
    let car = mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position),
    {
        numberPlate: "",
        color: [[255, 255, 255],[255, 255, 255]]
    });
    player.putIntoVehicle(car, 0);
});

mp.events.addCommand("pos", (player) => {
    console.log(`${player.position.x}, ${player.position.y}, ${player.position.z} - ${player.heading}`)
});