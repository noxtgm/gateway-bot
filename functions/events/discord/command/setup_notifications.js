const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let manager = process.env.SERVER_MANAGER_ID;

// https://autocode.com/tools/discord/embed-builder/?embed=JTdCJTIyY2hhbm5lbF9pZCUyMiUzQSUyMiU2MCUyNCU3QmNvbnRleHQucGFyYW1zLmV2ZW50LmNoYW5uZWxfaWQlN0QlNjAlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJTIyJTJDJTIydHRzJTIyJTNBZmFsc2UlMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQTElMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIyY3VzdG9tX2lkJTIyJTNBJTIyJTYwbm90aWZpY2F0aW9ucyU2MCUyMiUyQyUyMnBsYWNlaG9sZGVyJTIyJTNBJTIyJTYwU2VsZWN0aW9ubmV6JTIwdm9zJTIwbm90aWZpY2F0aW9ucyU2MCUyMiUyQyUyMm9wdGlvbnMlMjIlM0ElNUIlN0IlMjJsYWJlbCUyMiUzQSUyMiU2MERJU0NPUkQlNjAlMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU2MGRpc2NvcmQlNjAlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiU2MEdldCUyMG5vdGlmaWVkJTIwd2hlbmV2ZXIlMjB0aGUlMjBEaXNjb3JkJTIwc2VydmVyJTIwcmVjZWl2ZXMlMjBhbiUyMHVwZGF0ZS4lNjAlMjIlMkMlMjJkZWZhdWx0JTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJsYWJlbCUyMiUzQSUyMiU2MFRXSVRDSCU2MCUyMiUyQyUyMnZhbHVlJTIyJTNBJTIyJTYwdHdpdGNoJTYwJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlNjBHZXQlMjBub3RpZmllZCUyMHdoZW5ldmVyJTIwTm94VEdNJTIwZ29lcyUyMGxpdmUuJTYwJTIyJTJDJTIyZGVmYXVsdCUyMiUzQWZhbHNlJTdEJTJDJTdCJTIybGFiZWwlMjIlM0ElMjIlNjBZT1VUVUJFJTYwJTIyJTJDJTIydmFsdWUlMjIlM0ElMjIlNjB5b3V0dWJlJTYwJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlNjBHZXQlMjBub3RpZmllZCUyMHdoZW5ldmVyJTIwTm94VEdNJTIwcG9zdHMlMjBhJTIwbmV3JTIwdmlkZW8uJTYwJTIyJTJDJTIyZGVmYXVsdCUyMiUzQWZhbHNlJTdEJTVEJTJDJTIybWluX3ZhbHVlcyUyMiUzQTElMkMlMjJtYXhfdmFsdWVzJTIyJTNBMyUyQyUyMnR5cGUlMjIlM0EzJTdEJTVEJTdEJTVEJTJDJTIyZW1iZWRzJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnJpY2glMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMiUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTYwJUUyJTgwJThFJUUyJTgwJThGJUUyJTgwJThGJUUyJTgwJThFJUUyJTgwJThGJUUyJTgwJThGJUUyJTgwJThFJTIwJUUyJTgwJThFJUUyJTgwJThFJTIwJUUyJTgwJThFJUUyJTgwJThFJUUyJTgwJThGJUUyJTgwJThGJTVDbiUzQWZsYWdfZnIlM0ElMjAlRTIlOEIlQUUlMjAqKkZSQU4lQzMlODdBSVMqKiU1Q25TJUMzJUE5bGVjdGlvbm5leiUyMGxlcyUyMG5vdGlmaWNhdGlvbnMlMjBxdWUlMjB2b3VzJTIwdm91bGV6JTIwcmVjZXZvaXIlMjBkYW5zJTIwbGUlMjBtZW51JTIwY2ktZGVzc291cyUyMCh2b3VzJTIwcG91dmV6JTIwZW4lMjBzJUMzJUE5bGVjdGlvbm5lciUyMHBsdXNpZXVycykuJTVDbiU1Q24lM0FmbGFnX2diJTNBJTIwJUUyJThCJUFFJTIwKipFTkdMSVNIKiolNUNuU2VsZWN0JTIwdGhlJTIwbm90aWZpY2F0aW9ucyUyMHlvdSUyMHdvdWxkJTIwbGlrZSUyMHRvJTIwcmVjaWV2ZSUyMHRocm91Z2glMjB0aGUlMjBtZW51JTIwdW5kZXIlMjB0aGlzJTIwbWVzc2FnZSUyMCh5b3UlMjBjYW4lMjBzZWxlY3QlMjBtdWx0aXBsZSUyMG5vdGlmaWNhdGlvbnMpLiU2MCUyMiUyQyUyMmNvbG9yJTIyJTNBJTIyMHgzMDMxMzYlMjIlMkMlMjJhdXRob3IlMjIlM0ElN0IlMjJuYW1lJTIyJTNBJTIyJTYwTk9USUZJQ0FUSU9OUyU2MCUyMiUyQyUyMmljb25fdXJsJTIyJTNBJTIyJTYwaHR0cHMlM0ElMkYlMkZjZG4uZGlzY29yZGFwcC5jb20lMkZhdHRhY2htZW50cyUyRjc2MjQ5MDgxMDQ5ODk0MDk4OCUyRjEwMDA1MDY2Njk3MDIzMjg0MjIlMkYxMDMyLWJsdXJwbGUtYmVsbC5wbmclNjAlMjIlN0QlN0QlNUQlMkMlMjJfZmlsZSUyMiUzQSUyMmRhdGElM0FpbWFnZSUyRnBuZyUzQmJhc2U2NCUyQ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTd0FBQUNXQ0FZQUFBQmtXN1hTQUFBQUFYTlNSMElBcnM0YzZRQUFCR0pKUkVGVWVGN3QxQUVKQUFBTUFzSFp2JTJGUnlQTndTeURuY09RSUVDRVFFRnNrcEpnRUNCTTVnZVFJQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBZ1FkV01RQ1g0eVc5b3dBQUFBQkpSVTVFcmtKZ2dnJTNEJTNEJTIyJTdE

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