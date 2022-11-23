const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let manager = process.env.SERVER_MANAGER_ID;

// https://autocode.com/tools/discord/embed-builder/?embed=JTdCJTIyY2hhbm5lbF9pZCUyMiUzQSUyMiU2MCUyNCU3QmNvbnRleHQucGFyYW1zLmV2ZW50LmNoYW5uZWxfaWQlN0QlNjAlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJTIyJTJDJTIydHRzJTIyJTNBZmFsc2UlMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQTElMkMlMjJjb21wb25lbnRzJTIyJTNBJTVCJTdCJTIyc3R5bGUlMjIlM0EyJTJDJTIybGFiZWwlMjIlM0ElMjIlNjBFc2NhcGUlMjBmcm9tJTIwVGFya292JTYwJTIyJTJDJTIyY3VzdG9tX2lkJTIyJTNBJTIyJTYwZWZ0JTYwJTIyJTJDJTIyZGlzYWJsZWQlMjIlM0FmYWxzZSUyQyUyMmVtb2ppJTIyJTNBJTdCJTIyaWQlMjIlM0ElMjIlNjAxMDExOTA1ODYyMTE1MjY2NTgxJTYwJTIyJTJDJTIybmFtZSUyMiUzQSUyMiU2MGVmdCU2MCUyMiUyQyUyMmFuaW1hdGVkJTIyJTNBZmFsc2UlN0QlMkMlMjJ0eXBlJTIyJTNBMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBMiUyQyUyMmxhYmVsJTIyJTNBJTIyJTYwUmFpbmJvdyUyMDYlMjBTaWVnZSU2MCUyMiUyQyUyMmN1c3RvbV9pZCUyMiUzQSUyMiU2MHI2cyU2MCUyMiUyQyUyMmRpc2FibGVkJTIyJTNBZmFsc2UlMkMlMjJlbW9qaSUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTYwOTk2MDk2MDI5ODI3MDIyOTM5JTYwJTIyJTJDJTIybmFtZSUyMiUzQSUyMiU2MHI2JTYwJTIyJTJDJTIyYW5pbWF0ZWQlMjIlM0FmYWxzZSU3RCUyQyUyMnR5cGUlMjIlM0EyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0EyJTJDJTIybGFiZWwlMjIlM0ElMjIlNjBHYXJyeSdzJTIwTW9kJTYwJTIyJTJDJTIyY3VzdG9tX2lkJTIyJTNBJTIyJTYwZ21vZCU2MCUyMiUyQyUyMmRpc2FibGVkJTIyJTNBZmFsc2UlMkMlMjJlbW9qaSUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTYwOTk2MDk5MTc5MzgwMjI4MjU2JTYwJTIyJTJDJTIybmFtZSUyMiUzQSUyMiU2MGdtb2QlNjAlMjIlMkMlMjJhbmltYXRlZCUyMiUzQWZhbHNlJTdEJTJDJTIydHlwZSUyMiUzQTIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQTIlMkMlMjJsYWJlbCUyMiUzQSUyMiU2MFJ1c3QlNjAlMjIlMkMlMjJjdXN0b21faWQlMjIlM0ElMjIlNjBydXN0JTYwJTIyJTJDJTIyZGlzYWJsZWQlMjIlM0FmYWxzZSUyQyUyMmVtb2ppJTIyJTNBJTdCJTIyaWQlMjIlM0ElMjIlNjA5OTYwOTY1MDk5NTczOTQ0OTMlNjAlMjIlMkMlMjJuYW1lJTIyJTNBJTIyJTYwcnVzdCU2MCUyMiUyQyUyMmFuaW1hdGVkJTIyJTNBZmFsc2UlN0QlMkMlMjJ0eXBlJTIyJTNBMiU3RCU1RCU3RCU1RCUyQyUyMmVtYmVkcyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJyaWNoJTIyJTJDJTIydGl0bGUlMjIlM0ElMjIlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiU2MCVFMiU4MCU4RSVFMiU4MCU4RiVFMiU4MCU4RiVFMiU4MCU4RSUyMCVFMiU4MCU4RSVFMiU4MCU4RSVFMiU4MCU4RiVFMiU4MCU4RiU1Q24lM0FmbGFnX2ZyJTNBJTIwJUUyJThCJUFFJTIwKipGUkFOJUMzJTg3QUlTKiolNUNuUyVDMyVBOWxlY3Rpb25uZXolMjBsZXMlMjBqZXV4JTIwYXV4cXVlbHMlMjB2b3VzJTIwam91ZXolMjBhZmluJTIwZGUlMjBkJUMzJUE5YmxvcXVlciUyMGRlcyUyMHIlQzMlQjRsZXMlMkMlMjBzYWxvbnMlMjBldCUyMHBsZWlucyUyMGQnYXV0cmVzJTIwZm9uY3Rpb25uYWxpdCVDMyVBOXMuJTVDbiU1Q24lM0FmbGFnX2diJTNBJTIwJUUyJThCJUFFJTIwKipFTkdMSVNIKiolNUNuU2VsZWN0JTIwdGhlJTIwZ2FtZXMlMjB5b3UlMjBwbGF5JTIwdG8lMjB1bmxvY2slMjByb2xlcyUyQyUyMGNoYW5uZWxzJTJDJTIwYW5kJTIwbWFueSUyMG1vcmUlMjBmZWF0dXJlcy4lNjAlMjIlMkMlMjJjb2xvciUyMiUzQSUyMjB4MzAzMTM2JTIyJTJDJTIyYXV0aG9yJTIyJTNBJTdCJTIybmFtZSUyMiUzQSUyMiU2MEpFVVglNjAlMjIlMkMlMjJpY29uX3VybCUyMiUzQSUyMiU2MGh0dHBzJTNBJTJGJTJGY2RuLmRpc2NvcmRhcHAuY29tJTJGYXR0YWNobWVudHMlMkY3NjI0OTA4MTA0OTg5NDA5ODglMkYxMDAwNTE4NjM4NTA1MzEyNDE2JTJGZ2FtZXMucG5nJTYwJTIyJTdEJTdEJTVEJTJDJTIyX2ZpbGUlMjIlM0ElMjJkYXRhJTNBaW1hZ2UlMkZwbmclM0JiYXNlNjQlMkNpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBU3dBQUFDV0NBWUFBQUJrVzdYU0FBQUFBWE5TUjBJQXJzNGM2UUFBQkdKSlJFRlVlRjd0MUFFSkFBQU1Bc0hadiUyRlJ5UE53U3lEbmNPUUlFQ0VRRUZza3BKZ0VDQk01Z2VRSUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQUFZUGxCd2dReUFnWXJFeFZnaElnWUxEOEFBRUNHUUdEbGFsS1VBSUVESllmSUVBZ0kyQ3dNbFVKU29DQXdmSURCQWhrQkF4V3BpcEJDUkF3V0g2QUFJR01nTUhLVkNVb0FRSUd5dzhRSUpBUk1GaVpxZ1FsUU1CZyUyQlFFQ0JESUNCaXRUbGFBRUNCZ3NQMENBUUViQVlHV3FFcFFBQVlQbEJ3Z1F5QWdZckV4VmdoSWdZTEQ4QUFFQ0dRR0RsYWxLVUFJRURKWWZJRUFnSTJDd01sVUpTb0NBd2ZJREJBaGtCQXhXcGlwQkNSQXdXSDZBQUlHTWdNSEtWQ1VvQVFJR3l3OFFJSkFSTUZpWnFnUWxRTUJnJTJCUUVDQkRJQ0JpdFRsYUFFQ0Jnc1AwQ0FRRWJBWUdXcUVwUUFBWVBsQndnUXlBZ1lyRXhWZ2hJZ1lMRDhBQUVDR1FHRGxhbEtVQUlFREpZZklFQWdJMkN3TWxVSlNvQ0F3ZklEQkFoa0JBeFdwaXBCQ1JBd1dINkFBSUdNZ01IS1ZDVW9BUUlHeXc4UUlKQVJNRmlacWdRbFFNQmclMkJRRUNCRElDQml0VGxhQUVDQmdzUDBDQVFFYkFZR1dxRXBRQWdRZFdNUUNYNHlXOW93QUFBQUJKUlU1RXJrSmdnZyUzRCUzRCUyMiU3RA%3D%3D

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