const SteamUser = require('steam-user');
const fs = require('fs');
const config = require('./config.json');
const client = new SteamUser();
const steamidconvert = require('steamidconvert')(config.SteamAPI_Key);
const logOnOptions = {
	accountName: config.username,
	password: config.password
};

if (fs.existsSync(config.username+'_sentry.hash')) {
	client.setSentry(new Buffer(fs.readFileSync(config.username+'_sentry.hash'), 'binary'));
}else{
	fs.writeFile(config.username+'_sentry.hash', '');
	client.setSentry(new Buffer(fs.readFileSync(config.username+'_sentry.hash'), 'binary'));
}

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	
	for (var i = 0; i < config.adminIDs.length; ++i) {
		client.addFriend(config.adminIDs[i]);
		client.chatMessage(config.adminIDs[i], "I'm online and reddy to convert SteamID's for you!");
	}
});

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle)
            return true;
    }
    return false;
}

function getsteamid(input, steamID)
{
	if(input.indexOf("profiles/") > -1) {
		var tmp = input.toString().replace('\n', '').split('profiles/');
		if(tmp.length > 1)
		{
			client.chatMessage(steamID, "STEAM64: "+tmp[1].replace('/', ''));
		}
	}else if(input.indexOf("id/") > -1) {
		var tmp = input.toString().replace('\n', '').split('id/');
		if(tmp.length > 1)
		{
			console.log(tmp[1]);
			steamidconvert.convertVanity(tmp[1].replace('/', ''), function(err, res) {
			  if (err) console.log(err)
			  else client.chatMessage(steamID, "STEAM64: "+res);
			});
		}
	}else if(input.indexOf("STEAM_") > -1) {	
		client.chatMessage(steamID, "STEAM64: " + steamidconvert.convertTo64(input));
	}else if(input.indexOf("76") > -1) {
		client.chatMessage(steamID, "STEAM64: "+ input);
	}else{
		client.chatMessage(steamID, "STEAMID could not be found - invalid input!");
	}

}

client.on('friendMessage', function(steamID, message) {
	var tmp = message.toString().replace('\n', '').split(' ');
    switch (tmp[0]) {
		case '!steamid':
			if(tmp.length > 1)
			{
				getsteamid(tmp[1], steamID);
			}else{
				client.chatMessage(steamID, "Wrong syntax: !steamid <PROFILELINK/STEAMID/STEAMID64>");
			}
			break;
		case '!add_friend':
			if(inArray(steamID,config.adminIDs)) {
				if(tmp.length > 1)
				{
					client.addFriend(tmp[1]);
					client.chatMessage(steamID, tmp[1] + " is now added to friendlist.");
				}else{
					client.chatMessage(steamID, "Wrong syntax: !add_friend <STEAMID64>");
				}
			}else{
				client.chatMessage(steamID, "Sorry but you are not my master!");
			}
			break;
		case '!remove_friend':
			if(inArray(steamID,config.adminIDs)) {
				if(tmp.length > 1)
				{
					client.removeFriend(tmp[1]);
					client.chatMessage(steamID, tmp[1] + " is now removed from friendlist.");
				}else{
					client.chatMessage(steamID, "Wrong syntax: !remove_friend <STEAMID64>");
				}
			}else{
				client.chatMessage(steamID, "Sorry but you are not my master!");
			}
			break;
		default:
			if(inArray(steamID,config.adminIDs)) {
				client.chatMessage(steamID, "COMMANDS I UNDERSTAND IS:\n!steamid <PROFILELINK/STEAMID/STEAMID64>\n!add_friend <STEAMID64>\n!remove_friend <STEAMID64>");
			}else{
				client.chatMessage(steamID, "COMMANDS I UNDERSTAND IS:\n!steamid <PROFILELINK/STEAMID/STEAMID64>");
			}
			break;
	}
});

client.on('sentry', function(data) {
	fs.writeFileSync(config.username+'_sentry.hash', data);
});