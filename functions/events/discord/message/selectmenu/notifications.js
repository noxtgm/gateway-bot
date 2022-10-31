const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Discord
if (context.params.event.data.values.includes('discord')) {
  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `992568799062675517`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `1000510270080307320`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  // Sends followup message confirming role has been added
  await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: `<:plus:997268819192074260> Discord`,
  });
} else {
  await lib.discord.guilds['@0.2.0'].members.roles.destroy({
    role_id: `1000510270080307320`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

// Twitch
if (context.params.event.data.values.includes('twitch')) {
  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `992568799062675517`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `1000510257564487760`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  // Sends followup message confirming role has been added
  await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: `<:plus:997268819192074260> Twitch`,
  });
} else {
  await lib.discord.guilds['@0.2.0'].members.roles.destroy({
    role_id: `1000510257564487760`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

// Youtube
if (context.params.event.data.values.includes('youtube')) {
  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `992568799062675517`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  await lib.discord.guilds['@0.2.0'].members.roles.update({
    role_id: `1000510294587605053`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  // Sends followup message confirming role has been added
  await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: `<:plus:997268819192074260> Youtube`,
  });
} else {
  await lib.discord.guilds['@0.2.0'].members.roles.destroy({
    role_id: `1000510294587605053`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}