const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Seperator role '⋮ ──────── ⋮ GAMES ⋮ ─────── ⋮'
await lib.discord.guilds['@0.2.4'].members.roles.update({
  role_id: `996093480419987536`,
  user_id: `${context.params.event.member.user.id}`,
  guild_id: `${context.params.event.guild_id}`,
});

// Game role
await lib.discord.guilds['@0.2.4'].members.roles.update({
  role_id: `909452016173064252`,
  user_id: `${context.params.event.member.user.id}`,
  guild_id: `${context.params.event.guild_id}`,
});

// Sends followup message confirming role has been added
await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
  token: `${context.params.event.token}`,
  content: `<:plus:997268819192074260> Rainbow 6 Siege`,
});