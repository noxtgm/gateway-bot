const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let manager = process.env.SERVER_MANAGER_ID;

try {
  // Sends the message (embed panel) where the command is invoked
  if (context.params.event.member.roles.includes(manager)) {
    await lib.discord.channels['@0.3.2'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: '',
      tts: false,
      components: [
        {
          type: 1,
          components: [
            {
              style: 3,
              label: `Accepter`,
              custom_id: `accept_rules`,
              disabled: false,
              emoji: {
                id: `997629334636474448`,
                name: `yes`,
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
          description: `‎‏‏‎ ‎\n:flag_fr: ⋮ **FRANÇAIS**\n» Respectez les TOS de Discord (https://discordapp.com/terms) ainsi que la charte d'utilisation (https://discord.com/guidelines).\n» Les propos racistes, sexistes, homophobes et antisémites sont interdits.\n» Aucune publicité n'est autorisée (inclus par vocal, par message textuel et pas message privé).\n» Le spam, flood, mentions sans raisons et le troll abusif sont interdits.\n» Respectez le but des salons, tout messages ne respectant pas ceci pourra et sera supprimé sans avertissements.\n» Il est interdit de diffuser des images/vidéos NSFW ainsi que de poster des liens menant vers n'importe quel type de virus ou d'ip grabber.\n\n:flag_gb: ⋮ **ENGLISH**\n» Respect Discord TOS (https://discordapp.com/terms) as well as the user guidelines (https://discord.com/guidelines).\n» Racist, sexist, homophobic, and anti-semitic comments are prohibited.\n» Advertising is prohibited (includes by voice, by text message, and by private message).\n» Spam, flood, mentions without any reasons, and abusive trolling is prohibited.\n» Respect the purpose of the channels, any messages not respecting this can and will be deleted without warnings.\n» It is forbidden to broadcast NSFW images/videos as well as post links to any type of virus or ip grabber.\n‎‏‏‎ ‎`,
          color: 0x303136,
          author: {
            name: `RÈGLEMENT`,
            icon_url: `https://cdn.discordapp.com/attachments/762490810498940988/1008345856686182411/rules.png`,
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