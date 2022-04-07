console.log("Twitch Bot Starting");

require("dotenv").config();
// csv = require('jquery-csv');


const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'Italiandogs', 'mizkif' ]
});


client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    //tell chat gn
	if(process.env.GN_MESSAGES.includes(message.toLowerCase())) {
		client.say(channel, `gn ${tags.username} pepeL`);
	 }

    //i miss ockie
    if(message.toLowerCase() === "ockie") {
		client.say(channel, `I miss Ockie peepoSad`);
	 }

});