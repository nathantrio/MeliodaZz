const discord = require('discord.js'), client = new discord.Client();


client.login('token here');

client.on('ready', () => {
     client.user.setPresence({
          activity: {
               name: 'Heberged with glitch'
          }
     })
});
