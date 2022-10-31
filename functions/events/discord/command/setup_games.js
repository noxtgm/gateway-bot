const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let manager = process.env.SERVER_MANAGER_ID;

try {
  // Sends the message (embed panel) where the command is invoked
  if (context.params.event.member.roles.includes(manager)) {
    await lib.discord.channels['@0.3.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: '',
      tts: false,
      components: [
        {
          type: 1,
          components: [
            {
              style: 2,
              label: `Escape from Tarkov`,
              custom_id: `eft`,
              disabled: false,
              emoji: {
                id: `1011905862115266581`,
                name: `eft`,
                animated: false,
              },
              type: 2,
            },
            {
              style: 2,
              label: `Rainbow 6 Siege`,
              custom_id: `r6s`,
              disabled: false,
              emoji: {
                id: `996096029827022939`,
                name: `r6`,
                animated: false,
              },
              type: 2,
            },
            {
              style: 2,
              label: `Garry's Mod`,
              custom_id: `gmod`,
              disabled: false,
              emoji: {
                id: `996099179380228256`,
                name: `gmod`,
                animated: false,
              },
              type: 2,
            },
            {
              style: 2,
              label: `Rust`,
              custom_id: `rust`,
              disabled: false,
              emoji: {
                id: `996096509957394493`,
                name: `rust`,
                animated: false,
              },
              type: 2,
            },
          ],
        },
      ],
      embeds: [
        {
          type: 'rich',
          title: '',
          description: `‎‏‏‎ ‎‎‏‏\n:flag_fr: ⋮ **FRANÇAIS**\nSélectionnez les jeux auxquels vous jouez afin de débloquer des rôles, salons et pleins d'autres fonctionnalités.\n\n:flag_gb: ⋮ **ENGLISH**\nSelect the games you play to unlock roles, channels, and many more features.`,
          color: 0x303136,
          author: {
            name: `JEUX`,
            icon_url: `https://cdn.discordapp.com/attachments/762490810498940988/1000518638505312416/games.png`,
          },
        },
      ],
    });
  } else {
    // Replies to the command with an error stating that the user doesn't have the required perms
    return await lib.discord.interactions['@1.0.1'].responses.ephemeral.create({
      token: `${context.params.event.token}`,
      response_type: 'CHANNEL_MESSAGE_WITH_SOURCE',
      content: '',
      tts: false,
      embeds: [
        {
          type: 'rich',
          title: `ERROR`,
          description: `This commmand is restricted to the administration.`,
          color: 0xff0000,
        },
      ],
    });
  }
} catch (e) {
  console.log(e);
  // Replies to the command with the error
  return await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `ERROR`,
        description: `${e}`,
        color: 0xff0000,
      },
    ],
  });
}