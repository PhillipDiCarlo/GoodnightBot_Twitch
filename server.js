console.log("Twitch Bot Starting");

require("dotenv").config();
// csv = require('jquery-csv');


const tmi = require('tmi.js');


function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function randomIntFromInterval(min, max) { // min and max included 
	x = Math.floor(Math.random() * (max - min + 1) + min)
	return x * 1000

  }


const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'Italiandogs', 'Mizkif']
});


client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    //tell chat gn
	if(message.toLowerCase() === 'gn chat' 
	|| message.toLowerCase() === 'going to bed' 
	|| message.toLowerCase() === 'blacklivesmatter c ya chat' 
	|| message.toLowerCase() === 'BlackLivesMatter gn chat' 
	|| message.toLowerCase() === 'gn chat pepel'
	|| message.toLowerCase() === 'off to bed' ) {
		wait(randomIntFromInterval(5, 15));
		client.say(channel, `gn ${tags.username} pepeL`);
	 }

    //i miss ockie
    if(message.toLowerCase() === "ockie") {
		client.say(channel, `I miss Ockie peepoSad`);
	 }

});