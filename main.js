const Discord = require('discord.js');
const cron = require("cron");

const client = new Discord.Client();

const guild = client.guilds.cache.get('932909585684123679');
const channel = guild.channels.cache.get('932909586317451286');

const goals = [
    'Drink at least 1.5 L of water today.',
    'Meditate for at least 10 min today.',
    'Stretch for at least 10 min today.',
    'Go for a 30 min walk, or longer!',
    'Try to eat 3 full meals today.',
    'Go to bed early today. Read a book if you can\'t sleep.'
]

const encouragements = [
    'You can do it!',
    'I believe in you!',
    'Try your best!'
]

var goalAchieved = false;

client.once('ready', () => {
    console.log('Self Care Bot is online.');

    let scheduledMessage = new cron.CronJob('00 00 10 * * *', () => {
        // This runs every day at 10:30:00

        if (!goalAchieved) {
            channel.send('Oh no! You didn\'t achieve your last goal. That\'s ok! Just try your best.')
        }
        goalAchieved = false;

        var goal = goals[Math.floor(Math.random() * goals.length)];
        var encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
        channel.send(goal);
        channel.send(encouragement);
    });

    scheduledMessage.start()
});

client.on('message', (msg) => {
    if (msg.content === 'Achieved') {
        goalAchieved = true;
        msg.reply('Yay! I\'m so proud of you!');
    }
});

chatroom.on('message', msg => {
    if (msg.isMentioned(chatroom.user)) {
        msg.reply('pong');
    }
});

client.login('OTMyOTA4MDMzMjQ2MzcxODQx.YeZ0Tw.4OEoSzP31I0Z-EFjoKEoGCDBwnQ');