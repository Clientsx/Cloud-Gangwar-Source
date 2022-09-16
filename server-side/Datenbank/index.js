let mysql = require("mysql2/promise");

global.cloudgw = mysql.createPool({
	host: "localhost", 
	user: "root",
	password: "",
	database: "cloudgangwar",
});

const AccountHandler = require("../AccountHandler/index.js");

setInterval(() => {
	mp.players.forEach(element => {
		if (element != null && mp.players.exists(element))
		{
			if (element.isLoggedIn)
			{
				AccountHandler.savePlayerAccount(element);
			}
		}
	});
}, 120000);