const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Retrieve guild id & member count
let guild = await lib.discord.guilds['@0.2.4'].retrieve({
  guild_id: `${context.params.event.guild_id}`,
  with_counts: true,
});

// Updates bot's status as soon as member joins
await lib.discord.users['@0.2.1'].me.status.update({
  activity_name: `${guild.approximate_member_count} members`,
  activity_type: 'WATCHING', // 'GAME', 'STREAMING', 'LISTENING', 'WATCHING', 'COMPETING'
  status: 'ONLINE', // 'ONLINE', 'DND', 'IDLE', 'INVISIBLE'
});