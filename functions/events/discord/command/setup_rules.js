const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let manager = process.env.SERVER_MANAGER_ID;

// https://autocode.com/tools/discord/embed-builder/?embed=JTdCJTIyY2hhbm5lbF9pZCUyMiUzQSUyMiU2MCUyNCU3QmNvbnRleHQucGFyYW1zLmV2ZW50LmNoYW5uZWxfaWQlN0QlNjAlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJTIyJTJDJTIydHRzJTIyJTNBZmFsc2UlMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQTElMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIyc3R5bGUlMjIlM0EzJTJDJTIybGFiZWwlMjIlM0ElMjIlNjBBY2NlcHRlciU2MCUyMiUyQyUyMmN1c3RvbV9pZCUyMiUzQSUyMiU2MGFjY2VwdF9ydWxlcyU2MCUyMiUyQyUyMmRpc2FibGVkJTIyJTNBZmFsc2UlMkMlMjJlbW9qaSUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTYwOTk3NjI5MzM0NjM2NDc0NDQ4JTYwJTIyJTJDJTIybmFtZSUyMiUzQSUyMiU2MHllcyU2MCUyMiUyQyUyMmFuaW1hdGVkJTIyJTNBZmFsc2UlN0QlMkMlMjJ0eXBlJTIyJTNBMiU3RCU1RCU3RCU1RCUyQyUyMmVtYmVkcyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJyaWNoJTIyJTJDJTIydGl0bGUlMjIlM0ElMjIlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiU2MCVFMiU4MCU4RSVFMiU4MCU4RiVFMiU4MCU4RiVFMiU4MCU4RSUyMCVFMiU4MCU4RSU1Q24lM0FmbGFnX2ZyJTNBJTIwJUUyJThCJUFFJTIwKipGUkFOJUMzJTg3QUlTKiolNUNuJUMyJUJCJTIwUmVzcGVjdGV6JTIwbGVzJTIwVE9TJTIwZGUlMjBEaXNjb3JkJTIwKGh0dHBzJTNBJTJGJTJGZGlzY29yZGFwcC5jb20lMkZ0ZXJtcyklMjBhaW5zaSUyMHF1ZSUyMGxhJTIwY2hhcnRlJTIwZCd1dGlsaXNhdGlvbiUyMChodHRwcyUzQSUyRiUyRmRpc2NvcmQuY29tJTJGZ3VpZGVsaW5lcykuJTVDbiVDMiVCQiUyMExlcyUyMHByb3BvcyUyMHJhY2lzdGVzJTJDJTIwc2V4aXN0ZXMlMkMlMjBob21vcGhvYmVzJTIwZXQlMjBhbnRpcyVDMyVBOW1pdGVzJTIwc29udCUyMGludGVyZGl0cy4lNUNuJUMyJUJCJTIwQXVjdW5lJTIwcHVibGljaXQlQzMlQTklMjBuJ2VzdCUyMGF1dG9yaXMlQzMlQTllJTIwKGluY2x1cyUyMHBhciUyMHZvY2FsJTJDJTIwcGFyJTIwbWVzc2FnZSUyMHRleHR1ZWwlMjBldCUyMHBhcyUyMG1lc3NhZ2UlMjBwcml2JUMzJUE5KS4lNUNuJUMyJUJCJTIwTGUlMjBzcGFtJTJDJTIwZmxvb2QlMkMlMjBtZW50aW9ucyUyMHNhbnMlMjByYWlzb25zJTIwZXQlMjBsZSUyMHRyb2xsJTIwYWJ1c2lmJTIwc29udCUyMGludGVyZGl0cy4lNUNuJUMyJUJCJTIwUmVzcGVjdGV6JTIwbGUlMjBidXQlMjBkZXMlMjBzYWxvbnMlMkMlMjB0b3V0JTIwbWVzc2FnZXMlMjBuZSUyMHJlc3BlY3RhbnQlMjBwYXMlMjBjZWNpJTIwcG91cnJhJTIwZXQlMjBzZXJhJTIwc3VwcHJpbSVDMyVBOSUyMHNhbnMlMjBhdmVydGlzc2VtZW50cy4lNUNuJUMyJUJCJTIwSWwlMjBlc3QlMjBpbnRlcmRpdCUyMGRlJTIwZGlmZnVzZXIlMjBkZXMlMjBpbWFnZXMlMkZ2aWQlQzMlQTlvcyUyME5TRlclMjBhaW5zaSUyMHF1ZSUyMGRlJTIwcG9zdGVyJTIwZGVzJTIwbGllbnMlMjBtZW5hbnQlMjB2ZXJzJTIwbidpbXBvcnRlJTIwcXVlbCUyMHR5cGUlMjBkZSUyMHZpcnVzJTIwb3UlMjBkJ2lwJTIwZ3JhYmJlci4lNUNuJTVDbiUzQWZsYWdfZ2IlM0ElMjAlRTIlOEIlQUUlMjAqKkVOR0xJU0gqKiU1Q24lQzIlQkIlMjBSZXNwZWN0JTIwRGlzY29yZCUyMFRPUyUyMChodHRwcyUzQSUyRiUyRmRpc2NvcmRhcHAuY29tJTJGdGVybXMpJTIwYXMlMjB3ZWxsJTIwYXMlMjB0aGUlMjB1c2VyJTIwZ3VpZGVsaW5lcyUyMChodHRwcyUzQSUyRiUyRmRpc2NvcmQuY29tJTJGZ3VpZGVsaW5lcykuJTVDbiVDMiVCQiUyMFJhY2lzdCUyQyUyMHNleGlzdCUyQyUyMGhvbW9waG9iaWMlMkMlMjBhbmQlMjBhbnRpLXNlbWl0aWMlMjBjb21tZW50cyUyMGFyZSUyMHByb2hpYml0ZWQuJTVDbiVDMiVCQiUyMEFkdmVydGlzaW5nJTIwaXMlMjBwcm9oaWJpdGVkJTIwKGluY2x1ZGVzJTIwYnklMjB2b2ljZSUyQyUyMGJ5JTIwdGV4dCUyMG1lc3NhZ2UlMkMlMjBhbmQlMjBieSUyMHByaXZhdGUlMjBtZXNzYWdlKS4lNUNuJUMyJUJCJTIwU3BhbSUyQyUyMGZsb29kJTJDJTIwbWVudGlvbnMlMjB3aXRob3V0JTIwYW55JTIwcmVhc29ucyUyQyUyMGFuZCUyMGFidXNpdmUlMjB0cm9sbGluZyUyMGlzJTIwcHJvaGliaXRlZC4lNUNuJUMyJUJCJTIwUmVzcGVjdCUyMHRoZSUyMHB1cnBvc2UlMjBvZiUyMHRoZSUyMGNoYW5uZWxzJTJDJTIwYW55JTIwbWVzc2FnZXMlMjBub3QlMjByZXNwZWN0aW5nJTIwdGhpcyUyMGNhbiUyMGFuZCUyMHdpbGwlMjBiZSUyMGRlbGV0ZWQlMjB3aXRob3V0JTIwd2FybmluZ3MuJTVDbiVDMiVCQiUyMEl0JTIwaXMlMjBmb3JiaWRkZW4lMjB0byUyMGJyb2FkY2FzdCUyME5TRlclMjBpbWFnZXMlMkZ2aWRlb3MlMjBhcyUyMHdlbGwlMjBhcyUyMHBvc3QlMjBsaW5rcyUyMHRvJTIwYW55JTIwdHlwZSUyMG9mJTIwdmlydXMlMjBvciUyMGlwJTIwZ3JhYmJlci4lNUNuJUUyJTgwJThFJUUyJTgwJThGJUUyJTgwJThGJUUyJTgwJThFJTIwJUUyJTgwJThFJTYwJTIyJTJDJTIyY29sb3IlMjIlM0ElMjIweDMwMzEzNiUyMiUyQyUyMmF1dGhvciUyMiUzQSU3QiUyMm5hbWUlMjIlM0ElMjIlNjBSJUMzJTg4R0xFTUVOVCU2MCUyMiUyQyUyMmljb25fdXJsJTIyJTNBJTIyJTYwaHR0cHMlM0ElMkYlMkZjZG4uZGlzY29yZGFwcC5jb20lMkZhdHRhY2htZW50cyUyRjc2MjQ5MDgxMDQ5ODk0MDk4OCUyRjEwMDgzNDU4NTY2ODYxODI0MTElMkZydWxlcy5wbmclNjAlMjIlN0QlN0QlNUQlMkMlMjJfZmlsZSUyMiUzQSUyMmRhdGElM0FpbWFnZSUyRnBuZyUzQmJhc2U2NCUyQ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTd0FBQUNXQ0FZQUFBQmtXN1hTQUFBQUFYTlNSMElBcnM0YzZRQUFCR0pKUkVGVWVGN3QxQUVKQUFBTUFzSFp2JTJGUnlQTndTeURuY09RSUVDRVFFRnNrcEpnRUNCTTVnZVFJQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBZ1FkV01RQ1g0eVc5b3dBQUFBQkpSVTVFcmtKZ2dnJTNEJTNEJTIyJTdE

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