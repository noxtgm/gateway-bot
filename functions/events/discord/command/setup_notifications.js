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
              custom_id: `notifications`,
              placeholder: `Selectionnez vos notifications`,
              options: [
                {
                  label: `DISCORD`,
                  value: `discord`,
                  description: `Get notified whenever the Discord server receives an update.`,
                  default: false,
                },
                {
                  label: `TWITCH`,
                  value: `twitch`,
                  description: `Get notified whenever NoxTGM goes live.`,
                  default: false,
                },
                {
                  label: `YOUTUBE`,
                  value: `youtube`,
                  description: `Get notified whenever NoxTGM posts a new video.`,
                  default: false,
                },
              ],
              min_values: 1,
              max_values: 3,
              type: 3,
            },
          ],
        },
      ],
      embeds: [
        {
          type: 'rich',
          title: '',
          description: `‎‏‏‎‏‏‎ ‎‎ ‎‎‏‏\n:flag_fr: ⋮ **FRANÇAIS**\nSélectionnez les notifications que vous voulez recevoir dans le menu ci-dessous (vous pouvez en sélectionner plusieurs).\n\n:flag_gb: ⋮ **ENGLISH**\nSelect the notifications you would like to recieve through the menu under this message (you can select multiple notifications).`,
          color: 0x303136,
          author: {
            name: `NOTIFICATIONS`,
            icon_url: `https://cdn.discordapp.com/attachments/762490810498940988/1000506669702328422/1032-blurple-bell.png`,
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