const { Client } = require( 'discord.js' );

const client = new Client();

client.on( 'message', message => {
     console.log( message.content );
});

// BOT LOGS IN
client.login( process.env.DISCORD_BOT_TOKEN );

client.once( 'ready', () => {
     console.log('Client ready')
});
