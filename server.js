console.log("hello, twitchers");

// const tmi = require('tmi.js');

// const client = new tmi.Client({
// 	channels: [ 'italiandogs' ]
// });

// client.connect();

// client.on('message', (channel, tags, message, self) => {
// 	// "Alca: Hello, World!"
// 	console.log(`${tags['display-name']}: ${message}`);
// });

require("dotenv").config();

const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'italiandogs' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === 'gn chat') {
		// "@alca, heya!"
		client.say(channel, `gn ${tags.username} pepeL`);
	}
});